import React, { useRef } from "react";
import classNames from "classnames";
import { ColType as ColDataType } from "../../duck/types";
import { TableContext } from "../../duck/context";
import {
  clearSelection,
  setEndSelection,
  setSelectedSelection,
  setStartSelection,
  setTouched,
} from "../../duck/actions";
import { belongs } from "../../duck/utils";
import styles from "./Col.module.css";
import { TextEdit } from "./components";

interface ColType {
  colData: ColDataType;
  rowId: number;
}

const Col: React.FC<ColType> = ({ colData, rowId }) => {
  const [selected, setSelected] = React.useState<boolean>(false);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const { state, dispatch } = React.useContext(TableContext);
  const inputRef = useRef<HTMLInputElement>(null);

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

    if (state.editableCol === +`${rowId}${colData.id}`) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [state, rowId, colData, inputRef]);

  if (!colData.display) {
    return null;
  }

  const selectStartHandler = () => {
    dispatch(clearSelection());
    dispatch(setTouched({ touched: true }));
    dispatch(
      setStartSelection({ positionStart: { rowId, colId: colData.id } })
    );
  };

  const selectEndHandler = () => {
    dispatch(setTouched({ touched: false }));
    dispatch(setSelectedSelection({ selected: true }));
    dispatch(setEndSelection({ positionEnd: { rowId, colId: colData.id } }));
  };

  const selectUpdateHandler = () => {
    if (state.touched) {
      dispatch(setEndSelection({ positionEnd: { rowId, colId: colData.id } }));
    }
  };

  return (
    <td
      id={`col-${rowId}-${colData.id}`}
      onMouseDown={selectStartHandler}
      onMouseUp={selectEndHandler}
      onMouseEnter={selectUpdateHandler}
      colSpan={colData.colSpan}
      rowSpan={colData.rowSpan}
      className={classNames(styles.wrapper, { [styles.selected]: selected })}
      style={{ background: colData.background }}
    >
      {editMode && colData.type === "text" && (
        <TextEdit value={colData.content} rowId={rowId} colId={colData.id} />
      )}
      {!editMode && colData.content}
    </td>
  );
};

export default Col;
