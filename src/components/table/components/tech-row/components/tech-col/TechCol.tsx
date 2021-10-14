import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "../../../../duck/context";
import { tableStateActions } from "../../../../duck/actions";
import AddCol from "../add-col";
import RemoveCol from "../remove-col";
import ChangeWidth from "../change-width";
import styles from "./TechCol.module.css";

interface TechColType {
  colId: number;
}

const TechCol: React.FC<TechColType> = ({ colId }) => {
  const { rowsState, dispatchTableState } = React.useContext(TableContext);
  const [colSelected, setColSelected] = React.useState(false);
  const [height, setHeight] = React.useState(0);

  const selectColHandler = () => {
    dispatchTableState(tableStateActions.clearSelection());
    setColSelected(true);
  };

  const outsideClickHandler = () => {
    if (colSelected) {
      setColSelected(false);
    }
  };

  return (
    <td
      ref={(td: HTMLTableDataCellElement) =>
        setHeight((td?.closest("table")?.offsetHeight || 0) - 12)
      }
      onClick={selectColHandler}
      className={styles.techCol}
      style={{
        width:
          rowsState[0].cols.length > 1
            ? rowsState[0].cols[colId - 1]?.width
            : "auto",
      }}
    >
      <AddCol colId={colId} />
      <ChangeWidth tableHeight={height} colId={colId} />
      {rowsState[0].cols.length > 1 && colSelected && (
        <>
          <div className={styles.selectArea} style={{ height }} />
          <OutsideClickHandler onOutsideClick={outsideClickHandler}>
            <RemoveCol colId={colId} setColSelected={setColSelected} />
          </OutsideClickHandler>
        </>
      )}
    </td>
  );
};

export default TechCol;
