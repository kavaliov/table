import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { RowType as RowDataType, ColType } from "../../duck/types";
import { TableContext } from "../../duck/context";
import { clearSelection } from "../../duck/actions";
import Col from "../col";
import { AddRow, RemoveRow } from "./components";
import styles from "./Row.module.css";

interface RowType {
  rowData: RowDataType;
}

const Row: React.FC<RowType> = ({ rowData }) => {
  const [rowSelected, setRowSelected] = React.useState(false);
  const { state, dispatch } = React.useContext(TableContext);
  const [width, setWidth] = React.useState(0);
  const tdRef = React.useRef<HTMLTableDataCellElement>(null);

  const selectRowHandler = () => {
    setRowSelected(true);
    dispatch(clearSelection());

    if (tdRef.current) {
      setWidth((tdRef.current.closest("table")?.offsetWidth || 0) - 12);
    }
  };

  const outsideClickHandler = () => {
    setRowSelected(false);
  };

  return (
    <tr>
      <td ref={tdRef} className={styles.techCol} onClick={selectRowHandler}>
        <AddRow rowId={rowData.id} />
        {rowSelected && state.rows.length > 1 && (
          <>
            <div className={styles.selectArea} style={{ width }} />
            <OutsideClickHandler onOutsideClick={outsideClickHandler}>
              <RemoveRow rowId={rowData.id} setRowSelected={setRowSelected} />
            </OutsideClickHandler>
          </>
        )}
      </td>
      {rowData.cols.map((col: ColType) => (
        <Col key={col.id} colData={col} rowId={rowData.id} />
      ))}
    </tr>
  );
};

export default Row;
