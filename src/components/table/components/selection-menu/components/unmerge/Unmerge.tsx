import React from "react";
import { TableContext } from "../../../../duck/context";
import { getCol, isSingleSelection } from "../../../../duck/utils";
import { unmergeCols } from "./duck/operations";

const Unmerge: React.FC = () => {
  const context = React.useContext(TableContext);
  const [canUnmerged, setCanUnmerged] = React.useState(false);
  const { tableState, rowsState } = context;

  const unmergeHandler = () => {
    unmergeCols(context);
  };

  React.useEffect(() => {
    const selectionStart = tableState.selectionState.start;
    if (selectionStart) {
      const selectedCol = getCol(rowsState, selectionStart);
      if (
        (selectedCol.colSpan || selectedCol.rowSpan) &&
        isSingleSelection(tableState.selectionState)
      ) {
        setCanUnmerged(true);
      }
    }
  }, [tableState, rowsState]);

  return (
    <li>
      <button disabled={!canUnmerged} onClick={unmergeHandler}>
        Unmerge
      </button>
    </li>
  );
};

export default Unmerge;
