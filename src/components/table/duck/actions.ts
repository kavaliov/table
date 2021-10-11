import { createStandardAction } from "typesafe-actions";
import { PositionStateType, RowType, SelectionStateType } from "./types";

export const setStartSelection = createStandardAction(
  "TABLE/SET_START_SELECTION"
)<{
  positionStart: PositionStateType;
}>();

export const setEndSelection = createStandardAction("TABLE/SET_END_SELECTION")<{
  positionEnd: PositionStateType;
  finished: boolean;
}>();

export const clearSelection = createStandardAction("TABLE/CLEAR_SELECTION")();

export const rowsUpdate = createStandardAction("TABLE/ROWS_UPDATE")<{
  rows: RowType[];
}>();

export const updateColContent = createStandardAction(
  "TABLE/UPDATE_COL_CONTENT"
)<{
  rowId: number;
  colId: number;
  content: any;
}>();

export const updateColBackground = createStandardAction(
  "TABLE/UPDATE_COL_BACKGROUND"
)<{
  selectionState: SelectionStateType;
  background: string | undefined;
}>();

export const selectRow = createStandardAction("TABLE/SELECT_ROW")<{
  rowId: number;
}>();

export const removeRow = createStandardAction("TABLE/REMOVE_ROW")<{
  rowId: number;
}>();

export const selectCol = createStandardAction("TABLE/SELECT_COL")<{
  colId: number;
}>();

export const setColWidth = createStandardAction("TABLE/SET_COL_WIDTH")<{
  colId: number;
  width: number;
}>();

export const removeCol = createStandardAction("TABLE/REMOVE_COL")<{
  colId: number;
}>();
