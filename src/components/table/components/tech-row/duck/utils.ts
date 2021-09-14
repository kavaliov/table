import { ColType, RowType } from "../../../duck/types";
import { emptyCol } from "../../../duck/constants";

export const generateRowsWithNewCol = (
  rows: RowType[],
  colId: number
): RowType[] =>
  rows.map((row: RowType) => {
    const newCols = row.cols.map((col: ColType) => {
      if (col.id > colId) {
        return { ...col, id: col.id + 1 };
      }
      return col;
    });

    const newCol = { id: colId + 1, ...emptyCol };

    newCols.splice(colId, 0, newCol);

    return {
      ...row,
      cols: newCols,
    };
  });

export const getColCount = (rows: RowType[]): number => {
  let count = 0;

  rows.forEach((row: RowType) => {
    if (row.cols.length > count) {
      count = row.cols.length;
    }
  });

  return count;
};
