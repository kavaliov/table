import React from "react";
import classNames from "classnames";
import { ColType as ColDataType, PositionStateType } from "../../duck/types";
import { TableContext } from "../../duck/context";
import { tableStateActions } from "../../duck/actions";
import { belongs } from "../../duck/utils";
import { TextEdit } from "./components";
import styles from "./Col.module.css";

interface ColType {
  colData: ColDataType;
  rowId: number;
}

const Col: React.FC<ColType> = React.memo(({ colData, rowId }) => {
  const [selected, setSelected] = React.useState<boolean>(false);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [positionEnd, setPositionEnd] = React.useState<PositionStateType>({
    rowId: 0,
    colId: 0,
  });
  const { rowsState, tableState, dispatchTableState } = React.useContext(
    TableContext
  );

  React.useEffect(() => {
    if (tableState.selectionState.start && tableState.selectionState.end) {
      setSelected(
        belongs(
          tableState.selectionState.start,
          tableState.selectionState.end,
          {
            rowId,
            colId: colData.id,
          }
        )
      );
    } else {
      setSelected(false);
    }

    setPositionEnd({
      rowId:
        colData.rowSpan &&
        tableState.selectionState.start &&
        tableState.selectionState.start.rowId < rowId
          ? rowId + colData.rowSpan - 1
          : rowId,
      colId:
        colData.colSpan &&
        tableState.selectionState.start &&
        tableState.selectionState.start.colId < colData.id
          ? colData.id + colData.colSpan - 1
          : colData.id,
    });
  }, [tableState, rowId, colData]);

  if (!colData.display) {
    return null;
  }

  const selectStartHandler = () => {
    if (!tableState.touched && !editMode) {
      dispatchTableState(
        tableStateActions.setStartSelection({
          positionStart: { rowId, colId: colData.id },
        })
      );
    } else if (!editMode) {
      dispatchTableState(
        tableStateActions.setEndSelection({
          positionEnd,
          finished: true,
          rows: rowsState,
        })
      );
    }
  };

  const selectEndHandler = () => {
    if (!editMode) {
      dispatchTableState(
        tableStateActions.setEndSelection({
          positionEnd,
          finished: true,
          rows: rowsState,
        })
      );
    }
  };

  const selectUpdateHandler = () => {
    if (tableState.touched && !editMode) {
      dispatchTableState(
        tableStateActions.setEndSelection({
          positionEnd: { rowId, colId: colData.id },
          finished: false,
          rows: rowsState,
        })
      );
    }
  };

  const doubleClickHandler = () => {
    if (tableState.selectionState.selected) {
      dispatchTableState(tableStateActions.clearSelection());
    }
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
});

export default Col;
