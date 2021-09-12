import { createStandardAction } from "typesafe-actions";
import { PositionStateType } from "./types";

export const setStartSelection = createStandardAction(
  "TABLE/SET_START_SELECTION"
)<{
  positionStart: PositionStateType;
}>();

export const setEndSelection = createStandardAction("TABLE/SET_END_SELECTION")<{
  positionEnd: PositionStateType;
}>();

export const setTouched = createStandardAction("TABLE/SET_TOUCHED")<{
  touched: boolean;
}>();

export const clearSelection = createStandardAction("TABLE/CLEAR_SELECTION")();
