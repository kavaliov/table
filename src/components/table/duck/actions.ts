import { createStandardAction } from "typesafe-actions";
import { PositionStateType, RowType } from "./types";

export const setStartSelection = createStandardAction(
  "TABLE/SET_START_SELECTION"
)<{
  positionStart: PositionStateType;
}>();

export const setEndSelection = createStandardAction("TABLE/SET_END_SELECTION")<{
  positionEnd: PositionStateType;
}>();

export const setSelectedSelection = createStandardAction(
  "TABLE/SET_SELECTED_SELECTION"
)<{ selected: boolean }>();

export const setTouched = createStandardAction("TABLE/SET_TOUCHED")<{
  touched: boolean;
}>();

export const clearSelection = createStandardAction("TABLE/CLEAR_SELECTION")();

export const rowsUpdate = createStandardAction("TABLE/ROWS_UPDATE")<{
  rows: RowType[];
}>();

export const setEditableCol = createStandardAction("TABLE/SET_EDITABLE_COL")<{
  editableCol: number;
}>();

export const updateColContent = createStandardAction(
  "TABLE/UPDATE_COL_CONTENT"
)<{
  rowId: number;
  colId: number;
  content: string;
}>();

export const updateColBackground = createStandardAction(
  "TABLE/UPDATE_COL_BACKGROUND"
)<{
  rowId: number;
  colId: number;
  background: string;
}>();
