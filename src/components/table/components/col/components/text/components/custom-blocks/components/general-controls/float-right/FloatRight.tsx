import React from "react";
import Button from "../../../../../../../../button";
import { TextContext } from "../../../../../duck/context";
import { getBlockTypeByKey } from "../../../../../duck/utils";
import { changeAtomicFloating } from "../duck/operations";
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
    changeAtomicFloating(
      editorState,
      setEditorState,
      blockKey,
      `atomic ${!alignRight && "floatRight"}`
    );
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
