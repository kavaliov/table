import React from "react";
import { TableContext } from "../../../../duck/context";
import { rowsStateActions } from "../../../../duck/actions";
import icon from "./assets/close-circle.svg";
import styles from "./RemoveCol.module.css";

interface RemoveColType {
  colId: number;
  setColSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const RemoveCol: React.FC<RemoveColType> = ({ colId, setColSelected }) => {
  const { dispatchRowsState } = React.useContext(TableContext);

  const removeRowHandler = (e: any) => {
    e.stopPropagation();
    dispatchRowsState(rowsStateActions.removeCol({ colId }));
    setColSelected(false);
  };

  return (
    <button className={styles.wrapper} onClick={removeRowHandler}>
      <img src={icon} alt="" />
    </button>
  );
};

export default RemoveCol;
