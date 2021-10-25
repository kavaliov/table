import React from "react";
import { RichUtils, EditorState } from "draft-js";
import icon from "./underline.svg";
import Button from "../../../../../../../button";

interface BoldType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const Underline: React.FC<BoldType> = ({ editorState, setEditorState }) => {
  const [underline, setUnderline] = React.useState<boolean>(false);

  React.useEffect(() => {
    const inlineStyle = editorState.getCurrentInlineStyle();
    setUnderline(inlineStyle.has("UNDERLINE"));
  }, [editorState]);

  const underlineHandler = (e: any) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  return (
    <Button
      onMouseDown={(e) => e.preventDefault()}
      active={underline}
      small
      onClick={underlineHandler}
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default Underline;
