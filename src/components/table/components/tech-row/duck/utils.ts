import { ColType, RowType } from "../../../duck/types";
import { emptyCol } from "../../../duck/constants";

export const generateRowsWithNewCol = (
  rows: RowType[],
  colId: number
): RowType[] =>
  rows.map((row: RowType) => {
    const { cols } = row;

    // updating all colId in curren row
    let newCols = cols.map((col: ColType) => {
      if (col.id > colId) {
        return {
          ...col,
          id: col.id + 1,
          ...(col.resources
            ? {
                resources: col.resources.map((currentResource) => ({
                  ...currentResource,
                  colId: currentResource.colId + 1,
                })),
              }
            : {}),
          ...(col.resourceFor && col.resourceFor.colId > colId
            ? {
                resourceFor: {
                  ...col.resourceFor,
                  colId: col.resourceFor.colId + 1,
                },
              }
            : col.resourceFor),
        };
      }
      return col;
    });

    const lineContinuation =
      newCols[colId - 1] &&
      newCols[colId - 1].resourceFor &&
      newCols[colId] &&
      newCols[colId].resourceFor &&
      newCols[colId - 1].resourceFor?.colId ===
        newCols[colId].resourceFor?.colId;

    const newCol: ColType = {
      id: colId + 1,
      ...emptyCol,
      ...(newCols[colId - 1] && newCols[colId - 1].colSpan
        ? {
            display: false,
            resourceFor: { rowId: row.id, colId: newCols[colId - 1].id },
          }
        : {}),
      ...(lineContinuation
        ? { display: false, resourceFor: newCols[colId - 1].resourceFor }
        : {}),
    };

    if (newCols[colId - 1] && newCols[colId - 1].colSpan) {
      // @ts-ignore
      newCols[colId - 1].colSpan += 1;
      newCols[colId - 1].resources?.push({ rowId: row.id, colId: newCol.id });
    }

    if (lineContinuation) {
      const { resourceFor } = newCols[colId - 1];

      if (resourceFor && newCols[resourceFor.colId - 1]) {
        // @ts-ignore
        newCols[resourceFor.colId - 1].colSpan += 1;
      }
    }

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
