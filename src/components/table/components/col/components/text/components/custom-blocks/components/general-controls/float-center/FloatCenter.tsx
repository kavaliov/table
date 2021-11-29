import React from "react";
import Button from "../../../../../../../../button";
import { TextContext } from "../../../../../duck/context";
import { getBlockTypeByKey } from "../../../../../duck/utils";
import { changeAtomicFloating } from "../duck/operations";
import icon from "./pic-center.svg";

interface FloatLeftType {
  blockKey: string;
}

const FloatLeft: React.FC<FloatLeftType> = ({ blockKey }) => {
  const { editorState, setEditorState } = React.useContext(TextContext);
  const [alignCenter, setAlignCenter] = React.useState(false);

  React.useEffect(() => {
    const blockType = getBlockTypeByKey(editorState, blockKey);
    setAlignCenter(blockType.indexOf("floatCenter") !== -1);
  }, [editorState, blockKey]);

  const clickHandler = () => {
    changeAtomicFloating(
      editorState,
      setEditorState,
      blockKey,
      `atomic ${!alignCenter && "floatCenter"}`
    );
  };

  return (
    <Button
      active={alignCenter}
      onMouseDown={(e) => e.preventDefault()}
      onClick={clickHandler}
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default FloatLeft;
