import { emptyCol } from "../../../../../duck/constants";
import { RowType } from "../../../../../duck/types";

export const generateNewRows = (rows: RowType[], rowId: number): RowType[] => {
  const colCount = rows[0] ? rows[0].cols.length : 1;

  const newRow: RowType = {
    id: rowId + 1,
    cols: Array(colCount)
      .fill(emptyCol)
      .map((col, index) => ({ ...col, id: index + 1 })),
  };

  const newRows = rows.map((row: RowType) => {
    if (row.id > rowId) {
      return { ...row, id: row.id + 1 };
    }
    return row;
  });

  newRows.splice(rowId, 0, newRow);

  return newRows;
};
