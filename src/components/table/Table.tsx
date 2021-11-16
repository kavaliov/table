import React from "react";
import "draft-js/dist/Draft.css";
import "katex/dist/katex.min.css";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "./duck/context";
import { initialTableState, initialRowsState } from "./duck/state";
import { tableStateReducer, rowsStateReducer } from "./duck/reducer";
import { RowType } from "./duck/types";
import { tableStateActions } from "./duck/actions";
import { Row, SelectionMenu, TechRow } from "./components";
import styles from "./Table.module.css";

interface TableType {
  onChange?: (rows: RowType[]) => any;
}

const Table: React.FC<TableType> = ({ onChange }) => {
  const [tableState, dispatchTableState] = React.useReducer(
    tableStateReducer,
    initialTableState
  );
  const [rowsState, dispatchRowsState] = React.useReducer(
    rowsStateReducer,
    initialRowsState
  );

  React.useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(rowsState);
    }
  }, [rowsState, onChange]);

  const outsideClickHandler = () => {
    if (tableState.selectionState.selected) {
      dispatchTableState(tableStateActions.clearSelection());
    }
  };

  return (
    <TableContext.Provider
      value={{ dispatchTableState, tableState, rowsState, dispatchRowsState }}
    >
      <div className={classNames(styles.wrapper, "notranslate")}>
        <OutsideClickHandler onOutsideClick={outsideClickHandler}>
          <table
            className={classNames(styles.table, {
              [styles.filled]: !!rowsState.length,
            })}
          >
            <tbody>
              <TechRow />
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
