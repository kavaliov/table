import React from "react";
import { EditorState, RichUtils } from "draft-js";
import Button from "../../../../../../../button";
import icon from "./align-left.svg";
import {getBlockType} from "../../../../duck/utils";

interface AlignRightType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const AlignLeft: React.FC<AlignRightType> = ({
  editorState,
  setEditorState,
}) => {
  const [left, setLeft] = React.useState(false);

  React.useEffect(() => {
    const blockType = getBlockType(editorState);

    setLeft(blockType === "left");
  }, [editorState]);

  const leftHandler = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "left"));
  };

  return (
    <Button
      active={left}
      onMouseDown={(e) => e.preventDefault()}
      onClick={leftHandler}
      small
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default AlignLeft;
