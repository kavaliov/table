import React from "react";
import 'draft-js/dist/Draft.css'
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "./duck/context";
import tableState from "./duck/state";
import tableReducer from "./duck/reducer";
import { RowType } from "./duck/types";
import { clearSelection } from "./duck/actions";
import { Row, SelectionMenu, TechRow } from "./components";
import styles from "./Table.module.css";

interface TableType {
  onChange?: (rows: RowType[]) => any;
}

const Table: React.FC<TableType> = ({ onChange }) => {
  const [state, dispatch] = React.useReducer(tableReducer, tableState);

  React.useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(state.rows);
    }
  }, [state, onChange]);

  const outsideClickHandler = () => {
    dispatch(clearSelection());
  };

  return (
    <TableContext.Provider value={{ dispatch, state }}>
      <div className={classNames(styles.wrapper, "notranslate")}>
        <OutsideClickHandler onOutsideClick={outsideClickHandler}>
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
        </OutsideClickHandler>
      </div>
    </TableContext.Provider>
  );
};

export default Table;
