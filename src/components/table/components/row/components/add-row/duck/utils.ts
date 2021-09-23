import { ColType, RowType } from "../../../../../duck/types";
import { emptyCol } from "../../../../../duck/constants";

export const generateNewRows = (rows: RowType[], rowId: number): RowType[] => {
  const prevRow = rows[rowId - 1];
  const nextRow = rows[rowId];
  const newRow: RowType = {
    id: rowId + 1,
    cols: [],
  };

  prevRow.cols.forEach((col: ColType, index) => {
    const newCol = { ...emptyCol, id: col.id };

    if (nextRow) {
      const prevCol = prevRow.cols[index];
      const nextCol = nextRow.cols[index];

      if (
        prevCol.rowSpan &&
        nextCol.resourceFor &&
        nextCol.resourceFor.colId === prevCol.id &&
        nextCol.resourceFor.rowId === prevRow.id
      ) {
        newRow.cols.push({
          ...newCol,
          display: false,
          resourceFor: { rowId, colId: col.id },
        });
      } else if (
        prevCol.resourceFor &&
        nextCol.resourceFor &&
        nextCol.resourceFor.colId === prevCol.resourceFor.colId &&
        nextCol.resourceFor.rowId === prevCol.resourceFor.rowId
      ) {
        newRow.cols.push({
          ...newCol,
          display: false,
          resourceFor: prevCol.resourceFor,
        });
      } else {
        newRow.cols.push(newCol);
      }
    } else {
      newRow.cols.push(newCol);
    }
  });

  const increasedCols: string[] = [];

  newRow.cols.forEach((col) => {
    if (col.resourceFor) {
      const colId = `${col.resourceFor.rowId}${col.resourceFor.colId}`;

      if (!increasedCols.includes(colId)) {
        const rowSpan =
          rows[col.resourceFor.rowId - 1].cols[col.resourceFor.colId - 1]
            .rowSpan || 0;

        rows[col.resourceFor.rowId - 1].cols[
          col.resourceFor.colId - 1
        ].rowSpan = rowSpan + 1;

        increasedCols.push(colId);
      }
    }
  });

  const newRows = rows.map((row: RowType) => {
    if (row.id > rowId) {
      let newCols = row.cols.map((col: ColType) => ({
        ...col,
        ...(col.resourceFor && col.resourceFor.rowId > rowId
          ? {
              resourceFor: {
                ...col.resourceFor,
                rowId: col.resourceFor.rowId + 1,
              },
            }
          : col.resourceFor),
      }));

      return { ...row, id: row.id + 1, cols: newCols };
    }

    return row;
  });

  newRows.splice(rowId, 0, newRow);

  newRows.forEach((row: RowType) => {
    row.cols.forEach((col: ColType) => {
      if (col.resources) {
        newRows[row.id - 1].cols[col.id - 1].resources = [];
      }

      if (col.resourceFor) {
        newRows[col.resourceFor.rowId - 1].cols[
          col.resourceFor.colId - 1
        ].resources?.push({
          colId: col.id,
          rowId: row.id,
        });
      }
    });
  });

  return newRows;
};
