import { getRange } from "../../../duck/utils";
import { PositionStateType } from "../../../duck/types";

export interface PositionType {
  top: number;
  left: number;
}

export const getMenuPosition = (
  start: PositionStateType,
  end: PositionStateType
): PositionType => {
  const range = getRange(start, end);
  const cell = document.getElementById(`col-${range.row.min}-${range.col.min}`);

  if (cell) {
    return {
      top: cell.offsetTop + 8,
      left: cell.offsetLeft + 8,
    };
  }

  return {
    top: 0,
    left: 0,
  };
};
