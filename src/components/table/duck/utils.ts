import { PositionStateType, RangeType, SelectionStateType } from "./types";

export const getRange = (
  start: PositionStateType,
  end: PositionStateType
): RangeType => ({
  row: {
    min: start.rowId < end.rowId ? start.rowId : end.rowId,
    max: start.rowId < end.rowId ? end.rowId : start.rowId,
  },
  col: {
    min: start.colId < end.colId ? start.colId : end.colId,
    max: start.colId < end.colId ? end.colId : start.colId,
  },
});

export const belongs = (
  start: PositionStateType,
  end: PositionStateType,
  current: PositionStateType
): boolean => {
  const range = getRange(start, end);

  return (
    current.rowId >= range.row.min &&
    current.rowId <= range.row.max &&
    current.colId >= range.col.min &&
    current.colId <= range.col.max
  );
};

export const isSingleSelection = (
  selectionState: SelectionStateType
): boolean => {
  const { selectedCols, start, end } = selectionState;
  const firstCol = selectedCols[0];
  const rowSpan = firstCol?.rowSpan ? firstCol.rowSpan - 1 : 0;
  const colSpan = firstCol?.colSpan ? firstCol.colSpan - 1 : 0;

  if (start && end && start.rowId === end.rowId && start.colId === end.colId) {
    return true;
  }

  return (
    (rowSpan > 0 || colSpan > 0) &&
    !!start &&
    !!end &&
    end.rowId === start.rowId + rowSpan &&
    end.colId === start.colId + colSpan &&
    selectedCols.length > 1
  );
};

export const intersects = (
  colRange: RangeType,
  selectionRange: RangeType
): "full" | "part" | "not" => {
  const left = Math.max(colRange.col.min - 1, selectionRange.col.min - 1);
  const right = Math.min(colRange.col.max, selectionRange.col.max);
  const bottom = Math.max(colRange.row.min - 1, selectionRange.row.min - 1);
  const top = Math.min(colRange.row.max, selectionRange.row.max);
  const colSquare =
    (colRange.col.max - colRange.col.min + 1) *
    (colRange.row.max - colRange.row.min + 1);

  if (left < right && bottom < top) {
    const intersectsSquare = (right - left) * (top - bottom);
    if (intersectsSquare === colSquare) {
      return "full";
    } else {
      return "part";
    }
  } else {
    return "not";
  }
};
