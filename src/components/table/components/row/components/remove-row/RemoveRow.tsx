import React from "react";
import { TableContext } from "../../../../duck/context";
import { rowsStateActions } from "../../../../duck/actions";
import icon from "./assets/close-circle.svg";
import styles from "./RemoveRow.module.css";

interface RemoveRowType {
  rowId: number;
  setRowSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const RemoveRow: React.FC<RemoveRowType> = ({ rowId, setRowSelected }) => {
  const { dispatchRowsState } = React.useContext(TableContext);

  const removeRowHandler = (e: any) => {
    e.stopPropagation();
    dispatchRowsState(rowsStateActions.removeRow({ rowId }));
    setRowSelected(false);
  };

  return (
    <button className={styles.wrapper} onClick={removeRowHandler}>
      <img src={icon} alt="" />
    </button>
  );
};

export default RemoveRow;
