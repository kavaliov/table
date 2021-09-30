import { createReducer, ActionType } from "typesafe-actions";
import initialState from "./state";
import * as actions from "./actions";
import * as Types from "./types";
import { ColType, PositionStateType, RowType, SelectedColsType } from "./types";
import { belongs, getRange } from "./utils";
import { omit } from "lodash-es";

type Action = ActionType<typeof actions>;

const tableReducer = createReducer<Types.TableState, Action>(initialState)
  .handleAction(
    actions.setStartSelection,
    (state, { payload: { positionStart } }) => ({
      ...state,
      touched: true,
      selectionState: {
        selectedCols: [],
        selected: false,
        start: positionStart,
      },
    })
  )
  .handleAction(
    actions.setEndSelection,
    (state, { payload: { positionEnd, finished } }) => {
      const selectedCols: SelectedColsType[] = [];
      const { rows } = state;
      const stateStart = state.selectionState.start;

      if (finished && stateStart) {
        const range = getRange(stateStart, positionEnd);
        const start = { rowId: range.row.min, colId: range.col.min };
        const end = { rowId: range.row.max, colId: range.col.max };

        for (let rowId = start.rowId; rowId <= end.rowId; rowId += 1) {
          const col = { rowId };

          for (let colId = start.colId; colId <= end.colId; colId += 1) {
            const colSpan = rows[rowId - 1].cols[colId - 1].colSpan;
            const rowSpan = rows[rowId - 1].cols[colId - 1].rowSpan;

            selectedCols.push({
              ...col,
              colId,
              ...(rowSpan ? { rowSpan } : {}),
              ...(colSpan ? { colSpan } : {}),
            });
          }
        }
      }

      return {
        ...state,
        ...(finished ? { touched: false } : {}),
        selectionState: {
          ...state.selectionState,
          selectedCols,
          ...(finished ? { selected: true } : {}),
          end: positionEnd,
        },
      };
    }
  )
  .handleAction(actions.clearSelection, (state) => ({
    ...state,
    selectionState: {
      selectedCols: [],
      selected: false,
    },
  }))
  .handleAction(actions.rowsUpdate, (state, { payload: { rows } }) => ({
    ...state,
    rows,
  }))
  .handleAction(actions.selectRow, (state, { payload: { rowId } }) => {
    const allocatedRow = state.rows[rowId - 1];

    const selectedCols = allocatedRow.cols.map((col: ColType) => ({
      rowId,
      colId: col.id,
    }));

    return {
      ...state,
      selectionState: {
        selected: true,
        selectedCols,
        start: { rowId, colId: allocatedRow.cols[0].id },
        end: {
          rowId,
          colId: allocatedRow.cols[allocatedRow.cols.length - 1].id,
        },
      },
    };
  })
  .handleAction(actions.selectCol, (state, { payload: { colId } }) => {
    const selectedCols: PositionStateType[] = [];

    for (let r = 1; r <= state.rows.length; r += 1) {
      selectedCols.push({ rowId: r, colId });
    }

    return {
      ...state,
      selectionState: {
        selected: true,
        selectedCols,
        start: { rowId: state.rows[0].id, colId },
        end: {
          rowId: state.rows[state.rows.length - 1].id,
          colId,
        },
      },
    };
  })
  .handleAction(actions.removeRow, (state, { payload: { rowId } }) => {
    const rowToRemove = state.rows[rowId - 1];
    const newRows = state.rows;
    const decreasedParent: string[] = [];

    rowToRemove.cols.forEach((colToDelete: ColType, colIndex) => {
      if (colToDelete.resources && colToDelete.rowSpan) {
        const { resources } = colToDelete;

        const newResources = resources.reduce(
          (acc: PositionStateType[], resource, index) => {
            if (
              resources[index + 1] &&
              resource.colId === resources[index + 1].colId
            ) {
              acc.push(resource);
            }
            return acc;
          },
          []
        );

        newRows[rowId].cols[colIndex] = {
          ...omit(colToDelete, ["rowSpan", "resources"]),
          ...(colToDelete.rowSpan && colToDelete.rowSpan > 2
            ? { rowSpan: colToDelete.rowSpan - 1 }
            : {}),
        };

        if (newResources.length > 0 && newRows[rowId].cols[colIndex + 1]) {
          newRows[rowId].cols[colIndex + 1].resources = newResources;
        }
      }

      if (colToDelete.resourceFor && colToDelete.resourceFor.rowId !== rowId) {
        let parentCol =
          newRows[colToDelete.resourceFor.rowId - 1].cols[
            colToDelete.resourceFor.colId - 1
          ];

        const parentId = `${colToDelete.resourceFor.rowId}-${colToDelete.resourceFor.colId}`;

        if (!decreasedParent.includes(parentId)) {
          decreasedParent.push(parentId);
          const newRowSpan = (parentCol.rowSpan || 1) - 1;
          const newResources = parentCol.resources?.slice(
            0,
            parentCol.resources.length - (parentCol.colSpan || 1)
          );

          if (newRowSpan > 1) {
            newRows[colToDelete.resourceFor.rowId - 1].cols[
              colToDelete.resourceFor.colId - 1
            ].rowSpan = newRowSpan;
          } else {
            parentCol = omit(parentCol, ["rowSpan"]);

            newRows[colToDelete.resourceFor.rowId - 1].cols[
              colToDelete.resourceFor.colId - 1
            ] = parentCol;
          }

          if (newResources && newResources.length > 0) {
            newRows[colToDelete.resourceFor.rowId - 1].cols[
              colToDelete.resourceFor.colId - 1
            ].resources = newResources;
          } else {
            parentCol = omit(parentCol, ["resources"]);

            newRows[colToDelete.resourceFor.rowId - 1].cols[
              colToDelete.resourceFor.colId - 1
            ] = parentCol;
          }
        }
      }
    });

    newRows.splice(rowId - 1, 1);

    return {
      ...state,
      selectionState: {
        selectedCols: [],
        selected: false,
      },
      rows: newRows.map((row: RowType, index: number) => {
        const newCols = row.cols.map((col: ColType) => {
          const newResources = col.resources?.map((resource) => ({
            ...resource,
            colId: resource.rowId > rowId ? resource.rowId - 1 : resource.rowId,
          }));

          return {
            ...col,
            ...(newResources ? { resources: newResources } : {}),
            ...(col.resourceFor && col.resourceFor.rowId > rowId
              ? {
                  resourceFor: {
                    ...col.resourceFor,
                    rowId: col.resourceFor.rowId - 1,
                  },
                }
              : {}),
          };
        });

        return {
          ...row,
          id: index + 1,
          cols: newCols,
        };
      }),
    };
  })
  .handleAction(actions.removeCol, (state, { payload: { colId } }) => {
    const newRows = state.rows;
    const decreasedParent: string[] = [];

    newRows.forEach((row: RowType, rowIndex) => {
      const colToDelete = row.cols[colId - 1];

      if (colToDelete.resources && colToDelete.colSpan) {
        const { resources } = colToDelete;

        const newResources = resources.reduce(
          (acc: PositionStateType[], resource, index) => {
            if (
              resources[index + 1] &&
              resource.rowId === resources[index + 1].rowId
            ) {
              acc.push(resource);
            }
            return acc;
          },
          []
        );

        newRows[rowIndex].cols[colId] = {
          ...omit(colToDelete, ["colSpan", "resources"]),
          ...(colToDelete.colSpan && colToDelete.colSpan > 2
            ? { colSpan: colToDelete.colSpan - 1 }
            : {}),
        };

        if (newResources.length > 0) {
          newRows[rowIndex].cols[colId].resources = newResources;
        }
      }

      if (colToDelete.resourceFor && colToDelete.resourceFor.colId !== colId) {
        let parentCol =
          newRows[colToDelete.resourceFor.rowId - 1].cols[
            colToDelete.resourceFor.colId - 1
          ];

        const parentId = `${colToDelete.resourceFor.rowId}-${colToDelete.resourceFor.colId}`;

        if (!decreasedParent.includes(parentId)) {
          decreasedParent.push(parentId);
          const newColSpan = (parentCol.colSpan || 1) - 1;
          const newResources = parentCol.resources?.reduce(
            (acc: PositionStateType[], item) => {
              if (
                item.colId !== colToDelete.id &&
                item.rowId !== rowIndex + 1
              ) {
                acc.push(item);
              }
              return acc;
            },
            []
          );

          if (newColSpan > 1) {
            newRows[colToDelete.resourceFor.rowId - 1].cols[
              colToDelete.resourceFor.colId - 1
            ].colSpan = newColSpan;
          } else {
            parentCol = omit(parentCol, ["colSpan"]);

            newRows[colToDelete.resourceFor.rowId - 1].cols[
              colToDelete.resourceFor.colId - 1
            ] = parentCol;
          }

          if (newResources && newResources.length > 0) {
            newRows[colToDelete.resourceFor.rowId - 1].cols[
              colToDelete.resourceFor.colId - 1
            ].resources = newResources;
          } else {
            parentCol = omit(parentCol, ["resources"]);

            newRows[colToDelete.resourceFor.rowId - 1].cols[
              colToDelete.resourceFor.colId - 1
            ] = parentCol;
          }
        }
      }

      row.cols.splice(colId - 1, 1);

      row.cols = row.cols.map((col: ColType, index) => {
        return {
          ...col,
          id: index + 1,
        };
      });
    });

    return {
      ...state,
      selectionState: {
        selectedCols: [],
        selected: false,
      },
      rows: newRows.map((row: RowType, index: number) => {
        const newCols = row.cols.map((col: ColType) => {
          const newResources = col.resources?.map((resource) => ({
            ...resource,
            colId: resource.colId > colId ? resource.colId - 1 : resource.colId,
          }));

          return {
            ...col,
            ...(newResources ? { resources: newResources } : {}),
            ...(col.resourceFor && col.resourceFor.colId > colId
              ? {
                  resourceFor: {
                    ...col.resourceFor,
                    colId: col.resourceFor.colId - 1,
                  },
                }
              : {}),
          };
        });

        return {
          ...row,
          id: index + 1,
          cols: newCols,
        };
      }),
    };
  })
  .handleAction(
    actions.updateColContent,
    (state, { payload: { colId, rowId, content } }) => {
      const { rows } = state;

      rows[rowId - 1].cols[colId - 1].content = content;

      return {
        ...state,
        rows,
      };
    }
  )
  .handleAction(
    actions.updateColBackground,
    (state, { payload: { selectionState, background } }) => {
      const { rows } = state;

      const newRows = rows.map((row: RowType) => {
        const newCols = row.cols.map((col: ColType) => {
          if (
            selectionState.start &&
            selectionState.end &&
            belongs(selectionState.start, selectionState.end, {
              rowId: row.id,
              colId: col.id,
            })
          ) {
            return { ...col, background };
          }

          return col;
        });

        return { ...row, cols: newCols };
      });

      return {
        ...state,
        rows: newRows,
      };
    }
  );

export default tableReducer;
