import React from "react";
import { TableContext } from "../../../../duck/context";
import { mergeAvailable, mergeCols } from "./duck/operations";

const Merge: React.FC = () => {
  const context = React.useContext(TableContext);

  const mergeHandler = () => {
    mergeCols(context);
  };

  return (
    <li>
      <button disabled={!mergeAvailable(context)} onClick={mergeHandler}>
        Merge
      </button>
    </li>
  );
};

export default Merge;
