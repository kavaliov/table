import React from "react";
import { TableContext } from "./duck/context";
import tableState from "./duck/state";
import tableReducer from "./duck/reducer";
import { RowType } from "./duck/types";
import { Row } from "./components";
import styles from "./Table.module.css";

const Table: React.FC = () => {
  const [state, dispatch] = React.useReducer(tableReducer, tableState);

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TableContext.Provider value={{ dispatch, state }}>
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <tbody>
            {state.rows.map((row: RowType) => (
              <Row key={row.id} rowData={row} />
            ))}
          </tbody>
        </table>
      </div>
    </TableContext.Provider>
  );
};

export default Table;
