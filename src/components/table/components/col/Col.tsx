import React, { useRef } from "react";
import classNames from "classnames";
import { ColType as ColDataType } from "../../duck/types";
import { TableContext } from "../../duck/context";
import { setEndSelection, setStartSelection } from "../../duck/actions";
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
  }, [state, rowId, colData, inputRef]);

  if (!colData.display) {
    return null;
  }

  const selectStartHandler = () => {
    dispatch(
      setStartSelection({ positionStart: { rowId, colId: colData.id } })
    );
  };

  const selectEndHandler = () => {
    dispatch(
      setEndSelection({
        positionEnd: { rowId, colId: colData.id },
        finished: true,
      })
    );
  };

  const selectUpdateHandler = () => {
    if (state.touched) {
      dispatch(
        setEndSelection({
          positionEnd: { rowId, colId: colData.id },
          finished: false,
        })
      );
    }
  };

  return (
    <td
      id={`col-${rowId}-${colData.id}`}
      onMouseDown={selectStartHandler}
      onMouseUp={selectEndHandler}
      onMouseEnter={selectUpdateHandler}
      onDoubleClick={() => setEditMode(true)}
      colSpan={colData.colSpan}
      rowSpan={colData.rowSpan}
      className={classNames(styles.wrapper, { [styles.selected]: selected })}
      style={{ background: colData.background }}
    >
      {editMode && colData.type === "text" && (
        <TextEdit
          value={colData.content}
          background={colData.background}
          rowId={rowId}
          colId={colData.id}
          setEditMode={setEditMode}
        />
      )}
      {!editMode && colData.content}
    </td>
  );
};

export default Col;
