import React from "react";
import classNames from "classnames";
import { ColType as ColDataType } from "../../duck/types";
import { TableContext } from "../../duck/context";
import {
  clearSelection,
  setEndSelection,
  setStartSelection,
  setTouched,
} from "../../duck/actions";
import { belongs } from "./duck/operations";
import styles from "./Col.module.css";

interface ColType {
  colData: ColDataType;
  rowId: number;
}

const Col: React.FC<ColType> = ({ colData, rowId }) => {
  const { state, dispatch } = React.useContext(TableContext);
  const [selected, setSelected] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (state.selectionState.start && state.selectionState.end) {
      setSelected(
        belongs(state.selectionState.start, state.selectionState.end, {
          rowId,
          colId: colData.id,
        })
      );
    } else {
      setSelected(false);
    }
  }, [state, rowId, colData]);

  const selectStartHandler = () => {
    dispatch(clearSelection());
    dispatch(setTouched({ touched: true }));
    dispatch(
      setStartSelection({ positionStart: { rowId, colId: colData.id } })
    );
  };

  const selectEndHandler = () => {
    dispatch(setTouched({ touched: false }));
    dispatch(setEndSelection({ positionEnd: { rowId, colId: colData.id } }));
  };

  const selectUpdateHandler = () => {
    if (state.touched) {
      dispatch(setEndSelection({ positionEnd: { rowId, colId: colData.id } }));
    }
  };

  return (
    <td
      onMouseDown={selectStartHandler}
      onMouseUp={selectEndHandler}
      onMouseEnter={selectUpdateHandler}
      onDoubleClick={() => console.log("dbl")}
      colSpan={colData.colSpan}
      rowSpan={colData.rowSpan}
      className={classNames(styles.col, { [styles.selected]: selected })}
    >
      {colData.content}
    </td>
  );
};

export default Col;
