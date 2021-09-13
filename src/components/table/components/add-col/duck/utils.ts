import { RowType } from "../../../duck/types";
import { emptyCol } from "../../../duck/constants";

export const generateRowsWithNewCol = (rows: RowType[]): RowType[] =>
  rows.map((row: RowType) => ({
    ...row,
    cols: [...row.cols, { id: row.cols.length + 1, ...emptyCol }],
  }));
