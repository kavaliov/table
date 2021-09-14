import { createReducer, ActionType } from "typesafe-actions";
import initialState from "./state";
import * as actions from "./actions";
import * as Types from "./types";

type Action = ActionType<typeof actions>;

const tableReducer = createReducer<Types.TableState, Action>(initialState)
  .handleAction(
    actions.setStartSelection,
    (state, { payload: { positionStart } }) => ({
      ...state,
      selectionState: {
        ...state.selectionState,
        start: positionStart,
      },
    })
  )
  .handleAction(
    actions.setEndSelection,
    (state, { payload: { positionEnd } }) => ({
      ...state,
      selectionState: {
        ...state.selectionState,
        end: positionEnd,
      },
    })
  )
  .handleAction(actions.setTouched, (state, { payload: { touched } }) => ({
    ...state,
    touched,
  }))
  .handleAction(
    actions.setSelectedSelection,
    (state, { payload: { selected } }) => ({
      ...state,
      selectionState: {
        ...state.selectionState,
        selected,
      },
    })
  )
  .handleAction(actions.clearSelection, (state) => ({
    ...state,
    selectionState: {
      selected: false,
    },
  }))
  .handleAction(actions.rowsUpdate, (state, { payload: { rows } }) => ({
    ...state,
    rows,
  }))
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
    (state, { payload: { colId, rowId, background } }) => {
      const { rows } = state;

      rows[rowId - 1].cols[colId - 1].background = background;

      return {
        ...state,
        rows,
      };
    }
  );

export default tableReducer;
