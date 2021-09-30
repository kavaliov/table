import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "../../../../duck/context";
import { clearSelection } from "../../../../duck/actions";
import AddCol from "../add-col";
import RemoveCol from "../remove-col";
import styles from "./TechCol.module.css";

interface TechColType {
  colId: number;
}

const TechCol: React.FC<TechColType> = ({ colId }) => {
  const { state, dispatch } = React.useContext(TableContext);
  const [colSelected, setColSelected] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const tdRef = React.useRef<HTMLTableDataCellElement>(null);

  const selectColHandler = () => {
    dispatch(clearSelection());
    setColSelected(true);

    if (tdRef.current) {
      setHeight((tdRef.current.closest("table")?.offsetHeight || 0) - 12);
    }
  };

  const outsideClickHandler = () => {
    setColSelected(false);
  };

  return (
    <td ref={tdRef} onClick={selectColHandler} className={styles.techCol}>
      <AddCol colId={colId} />
      {state.rows[0].cols.length > 1 && colSelected && (
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
