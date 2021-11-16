import React from "react";
import { EditorState, RichUtils } from "draft-js";
import Button from "../../../../../../../button";
import icon from "./align-right.svg";

interface AlignRightType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const AlignRight: React.FC<AlignRightType> = ({
  editorState,
  setEditorState,
}) => {
  const [right, setRight] = React.useState(false);

  React.useEffect(() => {
    const blockType = RichUtils.getCurrentBlockType(editorState);

    setRight(blockType === "right");
  }, [editorState]);

  const rightHandler = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "right"));
  };

  return (
    <Button
      active={right}
      onMouseDown={(e) => e.preventDefault()}
      onClick={rightHandler}
      small
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default AlignRight;
