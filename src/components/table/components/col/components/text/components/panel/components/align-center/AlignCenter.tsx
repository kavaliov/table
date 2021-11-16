import React from "react";
import { EditorState, RichUtils } from "draft-js";
import Button from "../../../../../../../button";
import icon from "./align-center.svg";

interface AlignRightType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const AlignCenter: React.FC<AlignRightType> = ({
  editorState,
  setEditorState,
}) => {
  const [right, setRight] = React.useState(false);

  React.useEffect(() => {
    const blockType = RichUtils.getCurrentBlockType(editorState);

    setRight(blockType === "center");
  }, [editorState]);

  const centerHandler = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "center"));
  };

  return (
    <Button
      active={right}
      onMouseDown={(e) => e.preventDefault()}
      onClick={centerHandler}
      small
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default AlignCenter;
