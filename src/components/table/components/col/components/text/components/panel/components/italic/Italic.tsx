import React from "react";
import { RichUtils, EditorState } from "draft-js";
import icon from "./italic.svg";
import Button from "../../../../../../../button";

interface BoldType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const Italic: React.FC<BoldType> = ({ editorState, setEditorState }) => {
  const [italic, setItalic] = React.useState<boolean>(false);

  React.useEffect(() => {
    const inlineStyle = editorState.getCurrentInlineStyle();
    setItalic(inlineStyle.has("ITALIC"));
  }, [editorState]);

  const italicHandler = (e: any) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  return (
    <Button
      onMouseDown={(e) => e.preventDefault()}
      active={italic}
      small
      onClick={italicHandler}
    >
      <img src={icon} alt="" />
    </Button>
  );
};

export default Italic;
