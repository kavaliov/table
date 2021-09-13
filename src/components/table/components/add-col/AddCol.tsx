import React from "react";
import Button from "../button";
import { TableContext } from "../../duck/context";
import { rowsUpdate } from "../../duck/actions";
import { generateRowsWithNewCol } from "./duck/utils";
import styles from "./AddCol.module.css";

const AddCol: React.FC = () => {
  const { state, dispatch } = React.useContext(TableContext);

  const addColHandler = (): void => {
    dispatch(rowsUpdate({ rows: generateRowsWithNewCol(state.rows) }));
  };

  if (!state.rows.length) {
    return null;
  }

  return (
    <Button onClick={addColHandler} className={styles.wrapper}>
      Add Cell
    </Button>
  );
};

export default AddCol;
