import {
  AnyDispatch,
  ColType,
  PositionStateType,
  RowType,
  TableState,
} from "../../../../../duck/types";
import { belongs, getRange } from "../../../../../duck/utils";
import { clearSelection, rowsUpdate } from "../../../../../duck/actions";

export const mergeCols = (state: TableState, dispatch: AnyDispatch): void => {
  const { selectionState, rows } = state;

  if (selectionState.end && selectionState.start) {
    const range = getRange(selectionState.start, selectionState.end);
    const colSpan = range.col.max + 1 - range.col.min;
    const rowSpan = range.row.max + 1 - range.row.min;
    const targetCol = { row: range.row.min, col: range.col.min };

    if (colSpan > 1) {
      rows[targetCol.row - 1].cols[targetCol.col - 1].colSpan = colSpan;
    }

    if (rowSpan > 1) {
      rows[targetCol.row - 1].cols[targetCol.col - 1].rowSpan = rowSpan;
    }

    rows.forEach((row: RowType) => {
      row.cols = row.cols.map((col: ColType) => {
        if (
          belongs(
            selectionState.start as PositionStateType,
            selectionState.end as PositionStateType,
            {
              rowId: row.id,
              colId: col.id,
            }
          ) &&
          !(targetCol.row === row.id && targetCol.col === col.id)
        ) {
          return { ...col, display: false };
        }

        return col;
      });
    });

    dispatch(rowsUpdate({ rows }));
    dispatch(clearSelection());
  }
};
