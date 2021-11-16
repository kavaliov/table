import React from "react";
import { EditorState } from "draft-js";
import Button from "../../../../../../../../button";
import { TextContext } from "../../../../../duck/context";
import {
  createAtomicSelection,
  getBlockTypeByKey,
  setAtomicBlockType,
} from "../../../../../duck/utils";
import icon from "./pic-right.svg";

interface FloatRightType {
  blockKey: string;
}

const FloatRight: React.FC<FloatRightType> = ({ blockKey }) => {
  const { editorState, setEditorState } = React.useContext(TextContext);
  const [alignRight, setAlignRight] = React.useState(false);

  React.useEffect(() => {
    const blockType = getBlockTypeByKey(editorState, blockKey);
    setAlignRight(blockType.indexOf("floatRight") !== -1);
  }, [editorState, blockKey]);

  const clickHandler = () => {
    if (!alignRight) {
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
          "atomic floatRight"
        )
      );
      setEditorState((prevEditorState: EditorState) =>
        EditorState.acceptSelection(prevEditorState, oldSelection)
      );
    }
  };

  return (
    <Button
      active={alignRight}
      onMouseDown={(e) => e.preventDefault()}
      onClick={clickHandler}
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default FloatRight;
