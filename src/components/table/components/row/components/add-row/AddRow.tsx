import React from "react";
import { TableContext } from "../../../../duck/context";
import { rowsUpdate } from "../../../../duck/actions";
import { generateNewRows } from "./duck/utils";
import styles from "./AddRow.module.css";

interface AddRowType {
  rowId: number;
}

const AddRow: React.FC<AddRowType> = ({ rowId }) => {
  const { dispatch, state } = React.useContext(TableContext);

  const addNewRowHandler = () => {
    dispatch(rowsUpdate({ rows: generateNewRows(state.rows, rowId) }));
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
