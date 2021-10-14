import React, { useState } from "react";
import { TableContext } from "../../../../duck/context";
import { tableStateActions, rowsStateActions } from "../../../../duck/actions";
import styles from "./ChangeWidth.module.css";

interface ChangeWidthType {
  tableHeight: number;
  colId: number;
}

const ChangeWidth: React.FC<ChangeWidthType> = ({ tableHeight, colId }) => {
  const { rowsState, dispatchTableState, dispatchRowsState } = React.useContext(
    TableContext
  );
  const [pressed, setPressed] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const [right, setRight] = useState<number>(0);

  const onMouseDownHandler = (e: any) => {
    e.stopPropagation();
    dispatchTableState(tableStateActions.clearSelection());
    setPressed(true);
    setStart(e.screenX + right);
  };

  const onUpHandler = (e: any) => {
    e.stopPropagation();
    if (pressed) {
      dispatchRowsState(
        rowsStateActions.setColWidth({ colId, width: width - right })
      );
      setRight(0);
      setPressed(false);
    }
  };

  const onMouseMoveHandler = (e: any) => {
    e.stopPropagation();

    if (pressed && width - right > 10) {
      setRight(start - e.screenX);
    }
  };

  if (rowsState[0].cols.length === colId) {
    return null;
  }

  return (
    <div
      onMouseDown={onMouseDownHandler}
      onMouseUp={onUpHandler}
      onMouseLeave={onUpHandler}
      onMouseMove={onMouseMoveHandler}
      onClick={(e) => e.stopPropagation()}
      ref={(div: HTMLDivElement) =>
        setWidth(div?.closest("td")?.offsetWidth || 0)
      }
      className={styles.wrapper}
      style={{ height: tableHeight, right }}
    />
  );
};

export default ChangeWidth;
