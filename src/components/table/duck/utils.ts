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

  return (
    (rowSpan > 0 || colSpan > 0) &&
    !!start &&
    !!end &&
    end.rowId === start.rowId + rowSpan &&
    end.colId === start.colId + colSpan &&
    selectedCols.length > 1
  );
};

export const getCellCount = (selectionState: SelectionStateType): number => {
  if (selectionState.start && selectionState.end) {
    const range = getRange(selectionState.start, selectionState.end);

    return (
      (range.row.max - range.row.min + 1) * (range.col.max - range.col.min + 1)
    );
  }

  return 0;
};
