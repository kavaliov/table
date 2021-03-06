import React from "react";
import Button from "../../../../../../../../button";
import { TextContext } from "../../../../../duck/context";
import { removeBlock } from "../../../../../duck/utils";
import removeIcon from "./delete.svg";

interface RemoveType {
  blockKey: string;
}

const Remove: React.FC<RemoveType> = ({ blockKey }) => {
  const { editorState, setEditorState } = React.useContext(TextContext);

  const removeHandler = (): void => {
    setEditorState(removeBlock(editorState, blockKey));
  };

  return (
    <Button onClick={removeHandler}>
      <img src={removeIcon} alt="" />
    </Button>
  );
};

export default Remove;
