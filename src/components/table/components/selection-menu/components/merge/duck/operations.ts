import { omit } from "lodash-es";
import {
  ColType,
  PositionStateType,
  RangeType,
  RowType,
  SelectedColsType,
  TableContext,
} from "../../../../../duck/types";
import {
  belongs,
  intersects,
  isSingleSelection,
} from "../../../../../duck/utils";
import {
  rowsStateActions,
  tableStateActions,
} from "../../../../../duck/actions";

export const mergeCols = (context: TableContext): void => {
  const { selectionState } = context.tableState;
  const rows = context.rowsState;
  const resources: PositionStateType[] = [];
  const { selectedCols } = selectionState;
  const targetCol = {
    rowId: selectedCols[0].rowId,
    colId: selectedCols[0].colId,
  };
  let colSpan = { prevRowId: selectedCols[0].rowId, prevColId: 0, count: 0 };
  let rowSpan = { prevRowId: 0, count: 0 };

  selectedCols.forEach((selectedCol: SelectedColsType, index) => {
    if (
      selectedCol.colId !== colSpan.prevColId &&
      selectedCol.rowId === colSpan.prevRowId
    ) {
      colSpan.prevColId = selectedCol.colId;
      colSpan.count += 1;
      if (selectedCols.length === index - 1 && selectedCol.colSpan) {
        colSpan.count += selectedCol.colSpan;
      }
    }

    if (selectedCol.rowId !== rowSpan.prevRowId) {
      rowSpan.prevRowId = selectedCol.rowId;
      rowSpan.count += 1;
      if (
        selectionState.selectedCols.length === index - 1 &&
        selectedCol.rowSpan
      ) {
        rowSpan.count += selectedCol.rowSpan;
      }
    }
  });

  const newRows = rows.map((row: RowType) => {
    const newCols = row.cols.map((col: ColType) => {
      const currentPosition: PositionStateType = {
        rowId: row.id,
        colId: col.id,
      };
      const isTargetCol =
        targetCol.rowId === row.id && targetCol.colId === col.id;
      const isBelongs = belongs(
        selectionState.start as PositionStateType,
        selectionState.end as PositionStateType,
        currentPosition
      );

      if (isTargetCol && colSpan.count > 1) {
        col.colSpan = colSpan.count;
      }

      if (isTargetCol && rowSpan.count > 1) {
        col.rowSpan = rowSpan.count;
      }

      if (isBelongs && !isTargetCol) {
        resources.push(currentPosition);
      }

      return {
        ...(isBelongs && !isTargetCol
          ? omit(col, ["colSpan", "rowSpan"])
          : col),
        ...(isTargetCol ? { resources: [] } : {}),
        ...(isBelongs && !isTargetCol
          ? { display: false, resourceFor: targetCol }
          : {}),
      };
    });

    return { ...row, cols: newCols };
  });

  newRows[targetCol.rowId - 1].cols[targetCol.colId - 1].resources = resources;

  context.dispatchRowsState(rowsStateActions.rowsUpdate({ rows: newRows }));
  context.dispatchTableState(tableStateActions.clearSelection());
};

export const mergeAvailable = (context: TableContext): boolean => {
  const { selectionState } = context.tableState;
  const rows = context.rowsState;
  const { selectedCols, start, end } = selectionState;
  const singleSelection = isSingleSelection(selectionState);
  const mergedCols: RangeType[] = [];
  let isIntersects = false;
  const size = {
    maxColId: 0,
    maxRowId: 0,
    startColId: 0,
    startRowId: 0,
    get: function () {
      return (
        (this.maxColId - this.startColId + 1) *
        (this.maxRowId - this.startRowId + 1)
      );
    },
  };

  rows.forEach((row: RowType) => {
    row.cols.forEach((col: ColType) => {
      if (col.colSpan || col.rowSpan) {
        const colSpan = col.colSpan || 0;
        const rowSpan = col.rowSpan || 0;

        mergedCols.push({
          row: {
            min: row.id,
            max: !!rowSpan ? row.id + rowSpan - 1 : row.id,
          },
          col: {
            min: col.id,
            max: !!colSpan ? col.id + colSpan - 1 : col.id,
          },
        });
      }
    });
  });

  selectedCols.forEach((col: SelectedColsType, index) => {
    const colId = col.colSpan ? col.colId + col.colSpan - 1 : col.colId;
    const rowId = col.rowSpan ? col.rowId + col.rowSpan - 1 : col.rowId;

    if (colId > size.maxColId) {
      size.maxColId = colId;
    }

    if (rowId > size.maxRowId) {
      size.maxRowId = rowId;
    }

    if (index === 0) {
      size.startColId = col.colId;
      size.startRowId = col.rowId;
    }
  });

  mergedCols.forEach((mergedCol: RangeType) => {
    if (start && end && !isIntersects) {
      const intersectStatus = intersects(mergedCol, {
        row: {
          min: start.rowId,
          max: end.rowId,
        },
        col: {
          min: start.colId,
          max: end.colId,
        },
      });

      if (intersectStatus === "part") {
        isIntersects = true;
      }
    }
  });

  return (
    !singleSelection && size.get() === selectedCols.length && !isIntersects
  );
};
