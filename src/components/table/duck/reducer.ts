import { ActionType, createReducer } from "typesafe-actions";
import { omit } from "lodash-es";
import {
  initialRowsState,
  initialTableState,
  initialAnswersState,
} from "./state";
import {
  rowsStateActions,
  tableStateActions,
  answersStateActions,
} from "./actions";
import * as Types from "./types";
import {
  Answer,
  AnswersState,
  ColType,
  PositionStateType,
  RowType,
  SelectedColsType,
} from "./types";
import { belongs, getRange } from "./utils";

type TableStateAction = ActionType<typeof tableStateActions>;
type RowsStateAction = ActionType<typeof rowsStateActions>;
type AnswersStateAction = ActionType<typeof answersStateActions>;

export const tableStateReducer = createReducer<
  Types.TableState,
  TableStateAction
>(initialTableState)
  .handleAction(
    tableStateActions.setStartSelection,
    (state, { payload: { positionStart } }) => ({
      touched: true,
      selectionState: {
        selectedCols: [],
        selected: false,
        start: positionStart,
      },
    })
  )
  .handleAction(
    tableStateActions.setEndSelection,
    (state, { payload: { positionEnd, finished, rows } }) => {
      const selectedCols: SelectedColsType[] = [];
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
  .handleAction(tableStateActions.clearSelection, (state) => ({
    ...state,
    selectionState: {
      selectedCols: [],
      selected: false,
    },
  }))
  .handleAction(
    tableStateActions.selectRow,
    (state, { payload: { rowId, rows } }) => {
      const allocatedRow = rows[rowId - 1];

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
    }
  )
  .handleAction(
    tableStateActions.selectCol,
    (state, { payload: { colId, rows } }) => {
      const selectedCols: PositionStateType[] = [];

      for (let r = 1; r <= rows.length; r += 1) {
        selectedCols.push({ rowId: r, colId });
      }

      return {
        ...state,
        selectionState: {
          selected: true,
          selectedCols,
          start: { rowId: rows[0].id, colId },
          end: {
            rowId: rows[rows.length - 1].id,
            colId,
          },
        },
      };
    }
  );

export const rowsStateReducer = createReducer<Types.RowsState, RowsStateAction>(
  initialRowsState
)
  .handleAction(
    rowsStateActions.rowsUpdate,
    (state, { payload: { rows } }) => rows
  )
  .handleAction(
    rowsStateActions.updateColBackground,
    (state, { payload: { selectionState, background } }) =>
      state.map((row: RowType) => {
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
      })
  )
  .handleAction(
    rowsStateActions.updateColType,
    (state, { payload: { selectionState, type } }) =>
      state.map((row: RowType) => {
        const newCols = row.cols.map((col: ColType) => {
          if (
            selectionState.start &&
            selectionState.end &&
            belongs(selectionState.start, selectionState.end, {
              rowId: row.id,
              colId: col.id,
            })
          ) {
            return { ...col, type };
          }

          return col;
        });

        return { ...row, cols: newCols };
      })
  )
  .handleAction(
    rowsStateActions.setColWidth,
    (state, { payload: { colId, width } }) =>
      state.map((row) => {
        const newCols = row.cols.map((col: ColType) => ({
          ...col,
          ...(col.id === colId ? { width } : {}),
        }));

        return { ...row, cols: newCols };
      })
  )
  .handleAction(
    rowsStateActions.updateColContent,
    (state, { payload: { colId, rowId, content } }) =>
      state.map((row: RowType) => ({
        ...row,
        ...(row.id === rowId
          ? {
              cols: row.cols.map((col: ColType) => ({
                ...col,
                ...(col.id === colId ? { ...col, content } : col),
              })),
            }
          : {}),
      }))
  )
  .handleAction(rowsStateActions.removeCol, (state, { payload: { colId } }) => {
    const newRows = state;
    const decreasedParent: string[] = [];

    newRows.forEach((row: RowType, rowIndex) => {
      const colToDelete = row.cols[colId - 1];

      if (colToDelete.resources && colToDelete.colSpan) {
        const { resources } = colToDelete;

        const newResources = resources.reduce(
          (acc: PositionStateType[], resource) => {
            if (
              resource.colId !==
              colToDelete.id + (colToDelete.colSpan || 0) - 1
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
              if (item.colId !== parentCol.id + (parentCol.colSpan || 0) - 1) {
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

    return newRows.map((row: RowType, index: number) => {
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
    });
  })
  .handleAction(rowsStateActions.removeRow, (state, { payload: { rowId } }) => {
    const rowToRemove = state[rowId - 1];
    const newRows = state;
    const decreasedParent: string[] = [];

    rowToRemove.cols.forEach((colToDelete: ColType, colIndex) => {
      if (colToDelete.resources && colToDelete.rowSpan) {
        const { resources } = colToDelete;

        const newResources = resources?.slice(
          0,
          resources.length - (colToDelete.colSpan || 1)
        );

        newRows[rowId].cols[colIndex] = {
          ...omit(colToDelete, ["rowSpan", "resources"]),
          ...(colToDelete.rowSpan && colToDelete.rowSpan > 2
            ? { rowSpan: colToDelete.rowSpan - 1 }
            : {}),
        };

        if (newResources.length > 0 && newRows[rowId].cols[colIndex]) {
          newRows[rowId].cols[colIndex].resources = newResources;
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

    return newRows.map((row: RowType, index: number) => {
      const newCols = row.cols.map((col: ColType) => {
        return {
          ...col,
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
    });
  });

export const answersStateReducer = createReducer<
  Types.AnswersState,
  AnswersStateAction
>(initialAnswersState)
  .handleAction(
    answersStateActions.setStudentAnswer,
    (state: AnswersState, { payload: { rowId, colId, answer } }) => {
      let updated = false;
      const newState: AnswersState = state.map((stateStudentAnswer) => {
        if (
          stateStudentAnswer.rowId === rowId &&
          stateStudentAnswer.colId === colId
        ) {
          updated = true;
          return { ...stateStudentAnswer, studentAnswer: answer };
        } else {
          return stateStudentAnswer;
        }
      });

      if (!updated) {
        newState.push({
          rowId,
          colId,
          studentAnswer: answer,
          teacherAnswer: "",
        });
      }

      return newState;
    }
  )
  .handleAction(
    answersStateActions.setTeacherAnswer,
    (state: Answer[], { payload: { rowId, colId, answer } }) => {
      let updated = false;
      const newState: AnswersState = state.map((stateTeacherAnswer) => {
        if (
          stateTeacherAnswer.rowId === rowId &&
          stateTeacherAnswer.colId === colId
        ) {
          updated = true;
          return { ...stateTeacherAnswer, teacherAnswer: answer };
        } else {
          return stateTeacherAnswer;
        }
      });

      if (!updated) {
        newState.push({
          rowId,
          colId,
          studentAnswer: "",
          teacherAnswer: answer,
        });
      }

      return newState;
    }
  );
