import {
  AnyDispatch,
  ColType,
  PositionStateType,
  RowType,
  SelectedColsType,
  TableState,
} from "../../../../../duck/types";
import { belongs } from "../../../../../duck/utils";
import { clearSelection, rowsUpdate } from "../../../../../duck/actions";

export const mergeCols = (state: TableState, dispatch: AnyDispatch): void => {
  const { selectionState, rows } = state;
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
        ...col,
        ...(isTargetCol ? { resources: [] } : {}),
        ...(isBelongs && !isTargetCol
          ? { display: false, resourceFor: targetCol }
          : {}),
      };
    });

    return { ...row, cols: newCols };
  });

  newRows[targetCol.rowId - 1].cols[targetCol.colId - 1].resources = resources;

  dispatch(rowsUpdate({ rows: newRows }));
  dispatch(clearSelection());
};
