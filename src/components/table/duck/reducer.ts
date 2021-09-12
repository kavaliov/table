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
        selected: true,
        end: positionEnd,
      },
    })
  )
  .handleAction(actions.setTouched, (state, { payload: { touched } }) => ({
    ...state,
    touched,
  }))
  .handleAction(actions.clearSelection, (state) => ({
    ...state,
    selectionState: {
      selected: false,
    },
  }));

export default tableReducer;
