import { omit } from "lodash-es";
import { PositionStateType, TableContext } from "../../../../../duck/types";
import {
  tableStateActions,
  rowsStateActions,
} from "../../../../../duck/actions";

export const unmergeCols = (context: TableContext) => {
  const { selectionState } = context.tableState;
  const rows = context.rowsState;
  const unmergeColPosition = selectionState.selectedCols[0];
  const unmergeCol =
    rows[unmergeColPosition.rowId - 1].cols[unmergeColPosition.colId - 1];

  if (unmergeCol && unmergeCol.resources) {
    unmergeCol.resources.forEach((resource: PositionStateType) => {
      const resourceCol = rows[resource.rowId - 1].cols[resource.colId - 1];

      rows[resource.rowId - 1].cols[resource.colId - 1] = {
        ...omit(resourceCol, ["resourceFor"]),
        display: true,
      };
    });
  }

  rows[unmergeColPosition.rowId - 1].cols[
    unmergeColPosition.colId - 1
  ] = omit(unmergeCol, ["resources", "colSpan", "rowSpan"]);

  context.dispatchRowsState(rowsStateActions.rowsUpdate({ rows }));
  context.dispatchTableState(tableStateActions.clearSelection());
};
