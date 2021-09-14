import React from "react";
import { RowType as RowDataType, ColType } from "../../duck/types";
import { ROW_HEIGHT } from "../../duck/constants";
import Col from "../col";
import { AddRow } from "./components";
import styles from "./Row.module.css";

interface RowType {
  rowData: RowDataType;
}

const Row: React.FC<RowType> = ({ rowData }) => {
  return (
    <tr style={{ height: rowData.height || ROW_HEIGHT }}>
      <td className={styles.techCol}>
        <AddRow rowId={rowData.id} />
      </td>
      {rowData.cols.map((col: ColType) => (
        <Col key={col.id} colData={col} rowId={rowData.id} />
      ))}
    </tr>
  );
};

export default Row;
