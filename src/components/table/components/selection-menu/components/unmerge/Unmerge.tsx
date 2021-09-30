import React from "react";
import { TableContext } from "../../../../duck/context";
import { getCol, isSingleSelection } from "../../../../duck/utils";
import { unmergeCols } from "./duck/operations";

const Unmerge: React.FC = () => {
  const { state, dispatch } = React.useContext(TableContext);
  const [canUnmerged, setCanUnmerged] = React.useState(false);

  const unmergeHandler = () => {
    unmergeCols(state, dispatch);
  };

  React.useEffect(() => {
    const selectionState = state.selectionState.start;
    if (selectionState) {
      const selectedCol = getCol(state.rows, selectionState);
      if (
        (selectedCol.colSpan || selectedCol.rowSpan) &&
        isSingleSelection(state.selectionState)
      ) {
        setCanUnmerged(true);
      }
    }
  }, [state]);

  return (
    <li>
      <button disabled={!canUnmerged} onClick={unmergeHandler}>
        Unmerge
      </button>
    </li>
  );
};

export default Unmerge;
