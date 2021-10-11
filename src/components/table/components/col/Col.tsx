import React from "react";
import classNames from "classnames";
import { ColType as ColDataType, PositionStateType } from "../../duck/types";
import { TableContext } from "../../duck/context";
import {
  clearSelection,
  setEndSelection,
  setStartSelection,
} from "../../duck/actions";
import { belongs } from "../../duck/utils";
import { TextEdit } from "./components";
import styles from "./Col.module.css";

interface ColType {
  colData: ColDataType;
  rowId: number;
}

const Col: React.FC<ColType> = ({ colData, rowId }) => {
  const [selected, setSelected] = React.useState<boolean>(false);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [positionEnd, setPositionEnd] = React.useState<PositionStateType>({
    rowId: 0,
    colId: 0,
  });
  const { state, dispatch } = React.useContext(TableContext);

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

    setPositionEnd({
      rowId:
        colData.rowSpan &&
        state.selectionState.start &&
        state.selectionState.start.rowId < rowId
          ? rowId + colData.rowSpan - 1
          : rowId,
      colId:
        colData.colSpan &&
        state.selectionState.start &&
        state.selectionState.start.colId < colData.id
          ? colData.id + colData.colSpan - 1
          : colData.id,
    });
  }, [state, rowId, colData]);

  if (!colData.display) {
    return null;
  }

  const selectStartHandler = () => {
    if (!state.touched && !editMode) {
      dispatch(
        setStartSelection({ positionStart: { rowId, colId: colData.id } })
      );
    } else if (!editMode) {
      dispatch(
        setEndSelection({
          positionEnd,
          finished: true,
        })
      );
    }
  };

  const selectEndHandler = () => {
    if (!editMode) {
      dispatch(
        setEndSelection({
          positionEnd,
          finished: true,
        })
      );
    }
  };

  const selectUpdateHandler = () => {
    if (state.touched && !editMode) {
      dispatch(
        setEndSelection({
          positionEnd: { rowId, colId: colData.id },
          finished: false,
        })
      );
    }
  };

  const doubleClickHandler = () => {
    dispatch(clearSelection());
    setEditMode(true);
  };

  return (
    <td
      id={`col-${rowId}-${colData.id}`}
      onMouseDown={selectStartHandler}
      onMouseUp={selectEndHandler}
      onMouseEnter={selectUpdateHandler}
      onDoubleClick={doubleClickHandler}
      colSpan={colData.colSpan}
      rowSpan={colData.rowSpan}
      className={classNames(styles.wrapper, {
        [styles.selected]: selected,
        [styles.editMode]: editMode,
      })}
      style={{ background: colData.background }}
    >
      {colData.type === "text" && (
        <TextEdit
          value={colData.content}
          background={colData.background}
          rowId={rowId}
          colId={colData.id}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      )}
    </td>
  );
};

export default Col;
