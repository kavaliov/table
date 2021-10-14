import React from "react";
import { TableContext } from "../../../../duck/context";
import { rowsStateActions } from "../../../../duck/actions";
import { generateNewRows } from "./duck/utils";
import styles from "./AddRow.module.css";

interface AddRowType {
  rowId: number;
}

const AddRow: React.FC<AddRowType> = ({ rowId }) => {
  const { dispatchRowsState, rowsState } = React.useContext(TableContext);

  const addNewRowHandler = (e: any) => {
    e.stopPropagation();
    dispatchRowsState(
      rowsStateActions.rowsUpdate({ rows: generateNewRows(rowsState, rowId) })
    );
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.addButton} onClick={addNewRowHandler}>
        +
      </button>
    </div>
  );
};

export default AddRow;
