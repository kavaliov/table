import React from "react";
import { EditorState, RichUtils } from "draft-js";
import Button from "../../../../../../../button";
import { getBlockType } from "../../../../duck/utils";
import icon from "./unordered-list.svg";

interface UnorderedListType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const UnorderedList: React.FC<UnorderedListType> = ({
  setEditorState,
  editorState,
}) => {
  const [unordered, setUnordered] = React.useState(false);

  React.useEffect(() => {
    const blockType = getBlockType(editorState);

    setUnordered(blockType === "unordered-list-item");
  }, [editorState]);

  const listHandler = (e: any) => {
    e.preventDefault();
    setEditorState(
      RichUtils.toggleBlockType(editorState, "unordered-list-item")
    );
  };

  return (
    <Button
      onMouseDown={(e) => e.preventDefault()}
      active={unordered}
      small
      onClick={listHandler}
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default UnorderedList;
