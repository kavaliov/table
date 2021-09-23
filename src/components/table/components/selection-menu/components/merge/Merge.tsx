import React from "react";
import { TableContext } from "../../../../duck/context";
import { mergeCols } from "./duck/operations";
import { isSingleSelection } from "../../../../duck/utils";

const Merge: React.FC = () => {
  const { state, dispatch } = React.useContext(TableContext);

  const mergeHandler = () => {
    mergeCols(state, dispatch);
  };

  return (
    <li>
      <button
        disabled={
          isSingleSelection(state.selectionState) ||
          !(state.selectionState.selectedCols.length > 1)
        }
        onClick={mergeHandler}
      >
        Merge
      </button>
    </li>
  );
};

export default Merge;
