import React from "react";
import { RichUtils, EditorState } from "draft-js";
import Button from "../../../../../../../button";
import icon from "./bold.svg";

interface BoldType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const Bold: React.FC<BoldType> = ({ editorState, setEditorState }) => {
  const [bold, setBold] = React.useState<boolean>(false);

  React.useEffect(() => {
    const inlineStyle = editorState.getCurrentInlineStyle();
    setBold(inlineStyle.has("BOLD"));
  }, [editorState]);

  const boldHandler = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  return (
    <Button
      active={bold}
      small
      onMouseDown={(e) => e.preventDefault()}
      onClick={boldHandler}
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default Bold;
