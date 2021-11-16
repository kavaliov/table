import { ContentBlock, EditorState, SelectionState, Modifier } from "draft-js";

export const getBlockStyle = (block: ContentBlock): string => {
  const type = block.getType();
  let className = "";

  if (type.indexOf("left") > -1) {
    className = `${className} align-left`;
  }

  if (type.indexOf("center") > -1) {
    className = `${className} align-center`;
  }

  if (type.indexOf("right") > -1) {
    className = `${className} align-right`;
  }

  if (type.indexOf("floatLeft") > -1) {
    className = `${className} float-left`;
  }

  if (type.indexOf("floatRight") > -1) {
    className = `${className} float-right`;
  }

  return className;
};

export const getBlockTypeByKey = (
  editorState: EditorState,
  blockKey: string
): string => editorState.getCurrentContent().getBlockForKey(blockKey).getType();

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

export const createAtomicSelection = (
  editorState: EditorState,
  blockKey: string
): SelectionState => {
  const selection = editorState.getSelection();

  return selection.merge({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 0,
  });
};

export const setAtomicBlockType = (
  editorState: EditorState,
  selection: SelectionState,
  type: string
) =>
  EditorState.push(
    editorState,
    Modifier.setBlockType(editorState.getCurrentContent(), selection, type),
    "change-block-type"
  );
