import React from "react";
import Button from "../../../button";
import { TableContext } from "../../../../duck/context";
import { getCellCount } from "../../../../duck/utils";
import { setEditableCol } from "../../../../duck/actions";

const Edit: React.FC = () => {
  const { dispatch, state } = React.useContext(TableContext);

  if (getCellCount(state.selectionState) > 1) {
    return null;
  }

  const editHandler = (): void => {
    if (state.selectionState.start) {
      dispatch(
        setEditableCol({
          editableCol: +`${state.selectionState.start.rowId}${state.selectionState.start.colId}`,
        })
      );
    }
  };

  return <Button onClick={editHandler}>Edit</Button>;
};

export default Edit;
