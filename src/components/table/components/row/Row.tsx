import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { RowType as RowDataType, ColType } from "../../duck/types";
import { TableContext } from "../../duck/context";
import { selectRow } from "../../duck/actions";
import { ROW_HEIGHT } from "../../duck/constants";
import Col from "../col";
import { AddRow, RemoveRow } from "./components";
import styles from "./Row.module.css";

interface RowType {
  rowData: RowDataType;
}

const Row: React.FC<RowType> = ({ rowData }) => {
  const [rowSelected, setRowSelected] = React.useState(false);
  const { state, dispatch } = React.useContext(TableContext);

  const selectRowHandler = () => {
    setRowSelected(true);
    dispatch(selectRow({ rowId: rowData.id }));
  };

  const outsideClickHandler = () => {
    setRowSelected(false);
  };

  return (
    <tr style={{ height: rowData.height || ROW_HEIGHT }}>
      <td className={styles.techCol} onClick={selectRowHandler}>
        <AddRow rowId={rowData.id} />
        {rowSelected && state.rows.length > 1 && (
          <OutsideClickHandler onOutsideClick={outsideClickHandler}>
            <RemoveRow rowId={rowData.id} setRowSelected={setRowSelected} />
          </OutsideClickHandler>
        )}
      </td>
      {rowData.cols.map((col: ColType) => (
        <Col key={col.id} colData={col} rowId={rowData.id} />
      ))}
    </tr>
  );
};

export default Row;
