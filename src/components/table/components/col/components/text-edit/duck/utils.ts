import { ContentBlock, EditorState } from "draft-js";

export const getBlockStyle = (block: ContentBlock): string => {
  switch (block.getType()) {
    case "left":
      return "align-left";
    case "center":
      return "align-center";
    case "right":
      return "align-right";
    default:
      return "";
  }
};

export const getBlockType = (editorState: EditorState): string => {
  const selection = editorState.getSelection();
  return editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
};
