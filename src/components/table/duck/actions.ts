import { createStandardAction } from "typesafe-actions";
import {
  PositionStateType,
  RowType,
  SelectionStateType,
} from "./types";

const setStartSelection = createStandardAction("TABLE/SET_START_SELECTION")<{
  positionStart: PositionStateType;
}>();

const setEndSelection = createStandardAction("TABLE/SET_END_SELECTION")<{
  positionEnd: PositionStateType;
  finished: boolean;
  rows: RowType[];
}>();

const clearSelection = createStandardAction("TABLE/CLEAR_SELECTION")();

const selectRow = createStandardAction("TABLE/SELECT_ROW")<{
  rowId: number;
  rows: RowType[];
}>();

const selectCol = createStandardAction("TABLE/SELECT_COL")<{
  colId: number;
  rows: RowType[];
}>();

const rowsUpdate = createStandardAction("TABLE/ROWS_UPDATE")<{
  rows: RowType[];
}>();

const updateColContent = createStandardAction("TABLE/UPDATE_COL_CONTENT")<{
  rowId: number;
  colId: number;
  content: any;
}>();

const updateColBackground = createStandardAction(
  "TABLE/UPDATE_COL_BACKGROUND"
)<{
  selectionState: SelectionStateType;
  background: string | undefined;
}>();

const updateColType = createStandardAction("TABLE/UPDATE_COL_TYPE")<{
  selectionState: SelectionStateType;
  type: string;
}>();

const removeRow = createStandardAction("TABLE/REMOVE_ROW")<{
  rowId: number;
}>();

const setColWidth = createStandardAction("TABLE/SET_COL_WIDTH")<{
  colId: number;
  width: number;
}>();

const removeCol = createStandardAction("TABLE/REMOVE_COL")<{
  colId: number;
}>();

const tableStateActions = {
  setStartSelection,
  setEndSelection,
  clearSelection,
  selectCol,
  selectRow,
};

const rowsStateActions = {
  rowsUpdate,
  updateColContent,
  updateColBackground,
  updateColType,
  removeRow,
  setColWidth,
  removeCol,
};

export { tableStateActions, rowsStateActions };
