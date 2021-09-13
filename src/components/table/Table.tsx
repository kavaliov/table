import React from "react";
import { TableContext } from "./duck/context";
import tableState from "./duck/state";
import tableReducer from "./duck/reducer";
import { RowType } from "./duck/types";
import { Row, SelectionMenu, AddCol, AddRow } from "./components";
import styles from "./Table.module.css";
import classNames from "classnames";

const Table: React.FC = () => {
  const [state, dispatch] = React.useReducer(tableReducer, tableState);

  return (
    <TableContext.Provider value={{ dispatch, state }}>
      <div className={styles.wrapper}>
        <table
          className={classNames(styles.table, {
            [styles.filled]: !!state.rows.length,
          })}
        >
          <tbody>
            {state.rows.map((row: RowType) => (
              <Row key={row.id} rowData={row} />
            ))}
          </tbody>
        </table>
        <SelectionMenu />
        <AddCol />
        <AddRow />
      </div>
    </TableContext.Provider>
  );
};

export default Table;
