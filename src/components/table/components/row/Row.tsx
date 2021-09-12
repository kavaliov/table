import React from "react";
import { RowType as RowDataType, ColType } from "../../duck/types";
import Col from "../col";

interface RowType {
  rowData: RowDataType;
}

const Row: React.FC<RowType> = ({ rowData }) => {
  return (
    <tr style={{ height: rowData.height }}>
      {rowData.cols.map((col: ColType) => (
        <Col key={col.id} colData={col} rowId={rowData.id} />
      ))}
    </tr>
  );
};

export default Row;
