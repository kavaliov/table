import React from "react";
import { TableContext } from "../../../../duck/context";
import { unmergeCols } from "./duck/operations";
import { isSingleSelection } from "../../../../duck/utils";

const Unmerge: React.FC = () => {
  const { state, dispatch } = React.useContext(TableContext);

  const unmergeHandler = () => {
    unmergeCols(state, dispatch);
  };

  return (
    <li>
      <button
        disabled={
          !(isSingleSelection(state.selectionState))
        }
        onClick={unmergeHandler}
      >
        Unmerge
      </button>
    </li>
  );
};

export default Unmerge;
