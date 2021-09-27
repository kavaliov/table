import React from "react";
import { TableContext } from "../../../../duck/context";
import { mergeAvailable, mergeCols } from "./duck/operations";

const Merge: React.FC = () => {
  const { state, dispatch } = React.useContext(TableContext);

  const mergeHandler = () => {
    mergeCols(state, dispatch);
  };

  return (
    <li>
      <button
        disabled={!mergeAvailable(state)}
        onClick={mergeHandler}
      >
        Merge
      </button>
    </li>
  );
};

export default Merge;
