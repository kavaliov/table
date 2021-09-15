import React from "react";
import { TableContext } from "../../duck/context";
import { getColCount } from "./duck/utils";
import { TechCol } from "./components";

const TechRow: React.FC = () => {
  const { state } = React.useContext(TableContext);
  const [cols, setCols] = React.useState<any>([]);

  React.useEffect(() => {
    setCols(
      Array(getColCount(state.rows))
        .fill({})
        .map((col, index) => ({ ...col, id: index + 1 }))
    );
  }, [state]);

  if (!state.rows.length) {
    return null;
  }

  return (
    <tr>
      <td style={{ width: 10 }} />
      {cols.map((col: any) => (
        <TechCol key={col.id} colId={col.id} />
      ))}
    </tr>
  );
};

export default TechRow;
