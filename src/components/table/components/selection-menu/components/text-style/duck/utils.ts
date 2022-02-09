import { convertFromRaw, EditorState, RichUtils } from "draft-js";

export const createAllSelection = (content: any): EditorState => {
  const editorState = EditorState.createWithContent(convertFromRaw(content));

  const currentContent = editorState.getCurrentContent();
  const allContentSelection = editorState.getSelection().merge({
    anchorKey: currentContent.getFirstBlock().getKey(),
    anchorOffset: 0,

    focusOffset: currentContent.getLastBlock().getText().length,
    focusKey: currentContent.getLastBlock().getKey(),
  });

  return EditorState.acceptSelection(editorState, allContentSelection);
};

export const applyTextStyle = (
  styleType: string,
  editorState: EditorState
): EditorState => {
  if (styleType === "bold") {
    return RichUtils.toggleInlineStyle(editorState, "BOLD");
  }

  if (styleType === "italic") {
    return RichUtils.toggleInlineStyle(editorState, "ITALIC");
  }

  if (styleType === "underline") {
    return RichUtils.toggleInlineStyle(editorState, "UNDERLINE");
  }

  if (styleType === "textLeft") {
    return RichUtils.toggleBlockType(editorState, "left");
  }

  if (styleType === "textCenter") {
    return RichUtils.toggleBlockType(editorState, "center");
  }

  if (styleType === "textRight") {
    return RichUtils.toggleBlockType(editorState, "right");
  }

  if (styleType.indexOf("FONT_SIZE") > -1) {
    return RichUtils.toggleInlineStyle(editorState, styleType);
  }

  if (styleType.indexOf("COLOR") > -1) {
    return RichUtils.toggleInlineStyle(editorState, styleType);
  }

  return editorState;
};
