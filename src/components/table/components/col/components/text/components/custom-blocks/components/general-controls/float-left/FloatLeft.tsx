import React from "react";
import { EditorState } from "draft-js";
import Button from "../../../../../../../../button";
import { TextContext } from "../../../../../duck/context";
import {
  createAtomicSelection,
  getBlockTypeByKey,
  setAtomicBlockType,
} from "../../../../../duck/utils";
import icon from "./pic-left.svg";

interface FloatLeftType {
  blockKey: string;
}

const FloatLeft: React.FC<FloatLeftType> = ({ blockKey }) => {
  const { editorState, setEditorState } = React.useContext(TextContext);
  const [alignLeft, setAlignLeft] = React.useState(false);

  React.useEffect(() => {
    const blockType = getBlockTypeByKey(editorState, blockKey);
    setAlignLeft(blockType.indexOf("floatLeft") !== -1);
  }, [editorState, blockKey]);

  const clickHandler = () => {
    if (!alignLeft) {
      const oldSelection = editorState.getSelection();
      const newSelection = createAtomicSelection(editorState, blockKey);
      const newEditorState = EditorState.acceptSelection(
        editorState,
        newSelection
      );

      setEditorState(
        setAtomicBlockType(
          newEditorState,
          newEditorState.getSelection(),
          "atomic floatLeft"
        )
      );

      setEditorState((prevEditorState: EditorState) =>
        EditorState.acceptSelection(prevEditorState, oldSelection)
      );
    }
  };

  return (
    <Button
      active={alignLeft}
      onMouseDown={(e) => e.preventDefault()}
      onClick={clickHandler}
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default FloatLeft;
