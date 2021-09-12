import { PositionStateType } from "../../../duck/types";

export const belongs = (
  start: PositionStateType,
  end: PositionStateType,
  current: PositionStateType
): boolean => {
  const rowCord =
    start.rowId < end.rowId
      ? [start.rowId, end.rowId]
      : [end.rowId, start.rowId];
  const colCord =
    start.colId < end.colId
      ? [start.colId, end.colId]
      : [end.colId, start.colId];

  return (
    current.rowId >= rowCord[0] &&
    current.rowId <= rowCord[1] &&
    current.colId >= colCord[0] &&
    current.colId <= colCord[1]
  );
};
