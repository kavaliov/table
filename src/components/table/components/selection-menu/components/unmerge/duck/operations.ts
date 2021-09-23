import { omit } from "lodash-es";
import {
  AnyDispatch,
  PositionStateType,
  TableState,
} from "../../../../../duck/types";
import { clearSelection, rowsUpdate } from "../../../../../duck/actions";

export const unmergeCols = (state: TableState, dispatch: AnyDispatch) => {
  const { selectionState, rows } = state;
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

  dispatch(rowsUpdate({ rows }));
  dispatch(clearSelection());
};
