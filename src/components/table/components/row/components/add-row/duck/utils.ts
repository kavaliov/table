import { ColType, RowType } from "../../../../../duck/types";
import { emptyCol } from "../../../../../duck/constants";

export const generateNewRows = (rows: RowType[], rowId: number): RowType[] => {
  const prevRow = rows[rowId - 1];
  const increasedCols: string[] = [];
  const newRow: RowType = {
    id: rowId + 1,
    cols: [],
  };

  prevRow.cols.forEach((col: ColType, index) => {
    if (col.rowSpan) {
      const colID = `${prevRow.id}${col.id}`;
      if (!increasedCols.includes(colID)) {
        rows[rowId - 1].cols[index].rowSpan = col.rowSpan + 1;
        increasedCols.push(colID);
      }

      newRow.cols.push({
        ...emptyCol,
        id: col.id,
        display: false,
        resourceFor: { rowId: rowId, colId: col.id },
        ...(col.colSpan ? { colSpan: col.colSpan } : {}),
      });
    } else if (col.resourceFor) {
      newRow.cols.push({
        ...emptyCol,
        id: col.id,
        resourceFor: col.resourceFor,
        display: false,
        ...(col.colSpan ? { colSpan: col.colSpan } : {}),
      });

      if (col.resourceFor.rowId !== prevRow.id) {
        const colID = `${col.resourceFor.rowId}${col.resourceFor.colId}`;
        if (!increasedCols.includes(colID)) {
          // @ts-ignore
          rows[col.resourceFor.rowId - 1].cols[
            col.resourceFor.colId - 1
          ].rowSpan += 1;
          increasedCols.push(colID);
        }
      }
    } else {
      newRow.cols.push({
        ...emptyCol,
        id: col.id,
        ...(col.colSpan ? { colSpan: col.colSpan } : {}),
      });
    }
  });

  const newRows = rows.map((row: RowType) => {
    if (row.id > rowId) {
      return { ...row, id: row.id + 1 };
    }
    return row;
  });

  newRows.splice(rowId, 0, newRow);

  return newRows;
};
