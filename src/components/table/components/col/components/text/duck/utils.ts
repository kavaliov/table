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

export const getImageInfo = (fileInput: HTMLInputElement): Promise<string> =>
  new Promise((resolve, reject) => {
    const { files } = fileInput;
    const reader = new FileReader();
    if (files) {
      reader.readAsDataURL(files[0]);
    }

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = (error) => reject(error);
  });
