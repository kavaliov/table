import React from "react";
import { TableContext } from "../../../../duck/context";
import { rowsUpdate } from "../../../../duck/actions";
import { generateRowsWithNewCol } from "../../duck/utils";
import styles from "./AddCol.module.css";

interface AddColType {
  colId: number;
}

const AddCol: React.FC<AddColType> = ({ colId }) => {
  const { dispatch, state } = React.useContext(TableContext);

  const addColHandler = (e: any): void => {
    e.stopPropagation();
    dispatch(rowsUpdate({ rows: generateRowsWithNewCol(state.rows, colId) }));
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.addButton} onClick={addColHandler}>
        +
      </button>
    </div>
  );
};

export default AddCol;
