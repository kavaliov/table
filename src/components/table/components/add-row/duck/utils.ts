import { emptyCol } from "../../../duck/constants";
import { RowType } from "../../../duck/types";

export const generateNewRows = (rows: RowType[]): RowType[] => {
  const colCount = rows[0] ? rows[0].cols.length : 1;

  const newRow: RowType = {
    id: rows.length + 1,
    cols: new Array(colCount)
      .fill(emptyCol)
      .map((col, index) => ({ ...col, id: index + 1 })),
  };

  return [...rows, newRow];
};
