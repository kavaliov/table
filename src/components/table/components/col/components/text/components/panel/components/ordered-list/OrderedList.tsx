import React from "react";
import { EditorState, RichUtils } from "draft-js";
import Button from "../../../../../../../button";
import icon from "./ordered-list.svg";

interface UnorderedListType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const OrderedList: React.FC<UnorderedListType> = ({
  setEditorState,
  editorState,
}) => {
  const [ordered, setOrdered] = React.useState(false);

  React.useEffect(() => {
    const blockType = RichUtils.getCurrentBlockType(editorState);

    setOrdered(blockType === "ordered-list-item");
  }, [editorState]);

  const listHandler = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
  };

  return (
    <Button
      onMouseDown={(e) => e.preventDefault()}
      active={ordered}
      small
      onClick={listHandler}
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default OrderedList;
