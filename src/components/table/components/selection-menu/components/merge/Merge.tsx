import React from "react";
import { TableContext } from "../../../../duck/context";
import { getCellCount } from "../../../../duck/utils";
import { mergeCols } from "./duck/operations";

const Merge: React.FC = () => {
  const [selectedCellCounts, setSelectedCellCounts] = React.useState(0);
  const { state, dispatch } = React.useContext(TableContext);

  React.useEffect(() => {
    setSelectedCellCounts(getCellCount(state.selectionState));
  }, [state]);

  const mergeHandler = () => {
    mergeCols(state, dispatch);
  };

  return (
    <li>
      <button disabled={selectedCellCounts <= 1} onClick={mergeHandler}>
        Merge
      </button>
    </li>
  );
};

export default Merge;
