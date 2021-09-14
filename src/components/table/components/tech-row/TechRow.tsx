import React from "react";
import { TableContext } from "../../duck/context";
import { getColCount } from "./duck/utils";
import { AddCol } from "./components";
import styles from "./TechRow.module.css";

const TechRow: React.FC = () => {
  const { state } = React.useContext(TableContext);
  const [cols, setCols] = React.useState<any>([]);

  React.useEffect(() => {
    setCols(
      Array(getColCount(state.rows))
        .fill({})
        .map((col, index) => ({ ...col, id: index }))
    );
  }, [state]);

  if (!state.rows.length) {
    return null;
  }

  return (
    <tr>
      <td style={{ width: 10 }} />
      {cols.map((col: any, index: number) => (
        <td key={col.id} className={styles.techCol}>
          <AddCol colId={index + 1} />
        </td>
      ))}
    </tr>
  );
};

export default TechRow;
