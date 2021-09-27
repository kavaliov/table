import { createReducer, ActionType } from "typesafe-actions";
import initialState from "./state";
import * as actions from "./actions";
import * as Types from "./types";
import { ColType, PositionStateType, RowType, SelectedColsType } from "./types";
import { belongs, getRange } from "./utils";

type Action = ActionType<typeof actions>;

const tableReducer = createReducer<Types.TableState, Action>(initialState)
  .handleAction(
    actions.setStartSelection,
    (state, { payload: { positionStart } }) => ({
      ...state,
      touched: true,
      selectionState: {
        selectedCols: [],
        selected: false,
        start: positionStart,
      },
    })
  )
  .handleAction(
    actions.setEndSelection,
    (state, { payload: { positionEnd, finished } }) => {
      const selectedCols: SelectedColsType[] = [];
      const { rows } = state;
      const stateStart = state.selectionState.start;

      if (finished && stateStart) {
        const range = getRange(stateStart, positionEnd);
        const start = { rowId: range.row.min, colId: range.col.min };
        const end = { rowId: range.row.max, colId: range.col.max };

        for (let rowId = start.rowId; rowId <= end.rowId; rowId += 1) {
          const col = { rowId };

          for (let colId = start.colId; colId <= end.colId; colId += 1) {
            const colSpan = rows[rowId - 1].cols[colId - 1].colSpan;
            const rowSpan = rows[rowId - 1].cols[colId - 1].rowSpan;

            selectedCols.push({
              ...col,
              colId,
              ...(rowSpan ? { rowSpan } : {}),
              ...(colSpan ? { colSpan } : {}),
            });
          }
        }
      }

      return {
        ...state,
        ...(finished ? { touched: false } : {}),
        selectionState: {
          ...state.selectionState,
          selectedCols,
          ...(finished ? { selected: true } : {}),
          end: positionEnd,
        },
      };
    }
  )
  .handleAction(actions.clearSelection, (state) => ({
    ...state,
    selectionState: {
      selectedCols: [],
      selected: false,
    },
  }))
  .handleAction(actions.rowsUpdate, (state, { payload: { rows } }) => ({
    ...state,
    rows,
  }))
  .handleAction(actions.selectRow, (state, { payload: { rowId } }) => {
    const allocatedRow = state.rows[rowId - 1];

    const selectedCols = allocatedRow.cols.map((col: ColType) => ({
      rowId,
      colId: col.id,
    }));

    return {
      ...state,
      selectionState: {
        selected: true,
        selectedCols,
        start: { rowId, colId: allocatedRow.cols[0].id },
        end: {
          rowId,
          colId: allocatedRow.cols[allocatedRow.cols.length - 1].id,
        },
      },
    };
  })
  .handleAction(actions.selectCol, (state, { payload: { colId } }) => {
    const selectedCols: PositionStateType[] = [];

    for (let r = 1; r <= state.rows.length; r += 1) {
      selectedCols.push({ rowId: r, colId });
    }

    return {
      ...state,
      selectionState: {
        selected: true,
        selectedCols,
        start: { rowId: state.rows[0].id, colId },
        end: {
          rowId: state.rows[state.rows.length - 1].id,
          colId,
        },
      },
    };
  })
  .handleAction(actions.removeRow, (state, { payload: { rowId } }) => {
    const newRows = state.rows;
    newRows.splice(rowId - 1, 1);

    return {
      ...state,
      selectionState: {
        selectedCols: [],
        selected: false,
      },
      rows: newRows.map((row: RowType, index: number) => ({
        ...row,
        id: index + 1,
      })),
    };
  })
  .handleAction(actions.removeCol, (state, { payload: { colId } }) => {
    const newRows = state.rows;

    newRows.forEach((row: RowType) => {
      row.cols.splice(colId - 1, 1);
      row.cols = row.cols.map((col: ColType, index) => ({
        ...col,
        id: index + 1,
      }));
    });

    return {
      ...state,
      selectionState: {
        selectedCols: [],
        selected: false,
      },
      rows: newRows.map((row: RowType, index: number) => ({
        ...row,
        id: index + 1,
      })),
    };
  })
  .handleAction(
    actions.updateColContent,
    (state, { payload: { colId, rowId, content } }) => {
      const { rows } = state;

      rows[rowId - 1].cols[colId - 1].content = content;

      return {
        ...state,
        rows,
      };
    }
  )
  .handleAction(
    actions.updateColBackground,
    (state, { payload: { selectionState, background } }) => {
      const { rows } = state;

      const newRows = rows.map((row: RowType) => {
        const newCols = row.cols.map((col: ColType) => {
          if (
            selectionState.start &&
            selectionState.end &&
            belongs(selectionState.start, selectionState.end, {
              rowId: row.id,
              colId: col.id,
            })
          ) {
            return { ...col, background };
          }

          return col;
        });

        return { ...row, cols: newCols };
      });

      return {
        ...state,
        rows: newRows,
      };
    }
  );

export default tableReducer;
