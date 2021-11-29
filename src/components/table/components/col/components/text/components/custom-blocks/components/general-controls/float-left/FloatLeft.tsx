import React from "react";
import Button from "../../../../../../../../button";
import { TextContext } from "../../../../../duck/context";
import { getBlockTypeByKey } from "../../../../../duck/utils";
import { changeAtomicFloating } from "../duck/operations";
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
    changeAtomicFloating(
      editorState,
      setEditorState,
      blockKey,
      `atomic ${!alignLeft && "floatLeft"}`
    );
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
