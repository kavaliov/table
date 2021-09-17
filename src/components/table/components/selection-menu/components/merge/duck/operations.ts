import {
  AnyDispatch,
  ColType,
  PositionStateType,
  RowType,
  SelectedColsType,
  TableState,
} from "../../../../../duck/types";
import { belongs, getRange } from "../../../../../duck/utils";
import { clearSelection, rowsUpdate } from "../../../../../duck/actions";

export const mergeCols = (state: TableState, dispatch: AnyDispatch): void => {
  const { selectionState, rows } = state;

  if (selectionState.end && selectionState.start) {
    const { selectedCols } = selectionState;
    const range = getRange(selectionState.start, selectionState.end);
    const targetCol = { rowId: range.row.min, colId: range.col.min };
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
        const isTargetCol =
          targetCol.rowId === row.id && targetCol.colId === col.id;
        const isBelongs = belongs(
          selectionState.start as PositionStateType,
          selectionState.end as PositionStateType,
          {
            rowId: row.id,
            colId: col.id,
          }
        );

        if (isTargetCol && colSpan.count > 1) {
          col.colSpan = colSpan.count;
        }

        if (isTargetCol && rowSpan.count > 1) {
          col.rowSpan = rowSpan.count;
        }

        return {
          ...col,
          ...(isBelongs && !isTargetCol ? { display: false } : {}),
        };
      });

      return { ...row, cols: newCols };
    });

    dispatch(rowsUpdate({ rows: newRows }));
    dispatch(clearSelection());
  }
};
