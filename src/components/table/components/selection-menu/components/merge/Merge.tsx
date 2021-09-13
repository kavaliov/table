import React from "react";
import Button from "../../../button";
import { TableContext } from "../../../../duck/context";
import { getCellCount } from "../../../../duck/utils";
import { mergeCols } from "./duck/operations";

const Merge: React.FC = () => {
  const [selectedCellCounts, setSelectedCellCounts] = React.useState(0);
  const { state, dispatch } = React.useContext(TableContext);

  React.useEffect(() => {
    setSelectedCellCounts(getCellCount(state.selectionState));
  }, [state]);

  if (selectedCellCounts <= 1) {
    return null;
  }

  const mergeHandler = () => {
    mergeCols(state, dispatch);
  };

  return <Button onClick={mergeHandler}>Merge</Button>;
};

export default Merge;
