import React from "react";
import { TableContext } from "./duck/context";
import tableState from "./duck/state";
import tableReducer from "./duck/reducer";
import { RowType } from "./duck/types";
import { Row, SelectionMenu, TechRow } from "./components";
import styles from "./Table.module.css";
import classNames from "classnames";

interface TableType {
  onChange?: (rows: RowType[]) => any;
}

const Table: React.FC<TableType> = ({ onChange }) => {
  const [state, dispatch] = React.useReducer(tableReducer, tableState);

  React.useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(state.rows);
    }

    console.log(state.rows, "rows state");
  }, [state, onChange]);

  return (
    <TableContext.Provider value={{ dispatch, state }}>
      <div className={styles.wrapper}>
        <table
          className={classNames(styles.table, {
            [styles.filled]: !!state.rows.length,
          })}
        >
          <tbody>
            <TechRow />
            {state.rows.map((row: RowType) => (
              <Row key={row.id} rowData={row} />
            ))}
          </tbody>
        </table>
        <SelectionMenu />
      </div>
    </TableContext.Provider>
  );
};

export default Table;
