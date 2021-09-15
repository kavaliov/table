import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "../../../../duck/context";
import { selectCol } from "../../../../duck/actions";
import AddCol from "../add-col";
import RemoveCol from "../remove-col";
import styles from "./TechCol.module.css";

interface TechColType {
  colId: number;
}

const TechCol: React.FC<TechColType> = ({ colId }) => {
  const { state, dispatch } = React.useContext(TableContext);
  const [colSelected, setColSelected] = React.useState(false);

  const selectColHandler = () => {
    setColSelected(true);
    dispatch(selectCol({ colId }));
  };

  const outsideClickHandler = () => {
    setColSelected(false);
  };

  return (
    <td key={colId} onClick={selectColHandler} className={styles.techCol}>
      <AddCol colId={colId} />
      {state.rows[0].cols.length > 1 && colSelected && (
        <OutsideClickHandler onOutsideClick={outsideClickHandler}>
          <RemoveCol colId={colId} setColSelected={setColSelected} />
        </OutsideClickHandler>
      )}
    </td>
  );
};

export default TechCol;
