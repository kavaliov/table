import React from "react";
import "draft-js/dist/Draft.css";
import "katex/dist/katex.min.css";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "./duck/context";
import { initialTableState, initialRowsState } from "./duck/state";
import {
  tableStateReducer,
  rowsStateReducer,
  answersStateReducer,
} from "./duck/reducer";
import { AnswersState, RowType } from "./duck/types";
import { tableStateActions } from "./duck/actions";
import { Row, SelectionMenu, TechRow } from "./components";
import styles from "./Table.module.css";

interface TableType {
  onChange?: (rows: RowType[]) => any;
  onAnswerChange?: (answers: AnswersState) => any;
  builderMode: boolean;
  teacherMode: boolean;
}

const Table: React.FC<TableType> = ({
  onChange,
  onAnswerChange,
  builderMode,
  teacherMode,
}) => {
  const [tableState, dispatchTableState] = React.useReducer(
    tableStateReducer,
    initialTableState
  );
  const [rowsState, dispatchRowsState] = React.useReducer(
    rowsStateReducer,
    initialRowsState
  );
  const [answersState, dispatchAnswersState] = React.useReducer(
    answersStateReducer,
    []
  );

  React.useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(rowsState);
    }
  }, [rowsState, onChange]);

  React.useEffect(() => {
    if (onAnswerChange && typeof onAnswerChange === "function") {
      onAnswerChange(answersState);
    }
  }, [answersState, onAnswerChange]);

  const outsideClickHandler = () => {
    if (tableState.selectionState.selected) {
      dispatchTableState(tableStateActions.clearSelection());
    }
  };

  return (
    <TableContext.Provider
      value={{
        tableState,
        dispatchTableState,
        rowsState,
        dispatchRowsState,
        answersState,
        dispatchAnswersState,
        builderMode,
        teacherMode,
      }}
    >
      <div className={styles.wrapper}>
        <OutsideClickHandler onOutsideClick={outsideClickHandler}>
          <table
            className={classNames(styles.table, {
              [styles.filled]: !!rowsState.length,
            })}
          >
            <tbody>
              {builderMode && <TechRow />}
              {rowsState.map((row: RowType) => (
                <Row key={row.id} rowData={row} />
              ))}
            </tbody>
          </table>
          <SelectionMenu />
        </OutsideClickHandler>
      </div>
    </TableContext.Provider>
  );
};

export default Table;
