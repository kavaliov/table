import React from "react";
import Button from "../button";
import { TableContext } from "../../duck/context";
import { rowsUpdate } from "../../duck/actions";
import { generateNewRows } from "./duck/utils";
import styles from "./AddRow.module.css";

const AddRow: React.FC = () => {
  const { dispatch, state } = React.useContext(TableContext);

  const addNewRowHandler = () => {
    dispatch(rowsUpdate({ rows: generateNewRows(state.rows) }));
  };

  return (
    <Button onClick={addNewRowHandler} className={styles.wrapper}>
      Add row
    </Button>
  );
};

export default AddRow;
