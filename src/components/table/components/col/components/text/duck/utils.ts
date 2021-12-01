import {
  ContentBlock,
  EditorState,
  SelectionState,
  ContentState,
  Modifier,
  genKey,
} from "draft-js";

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

  if (type.indexOf("floatCenter") > -1) {
    className = `${className} float-center`;
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

export const getNextBlock = (editorState: EditorState): ContentBlock | null => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const anchorKey = selection.getAnchorKey();
  const focusKey = selection.getFocusKey();

  // single line selection
  if (anchorKey === focusKey) {
    const after = contentState.getBlockAfter(anchorKey);

    if (after) {
      return after;
    }
  }

  return null;
};

export const getBeforeBlock = (
  editorState: EditorState
): ContentBlock | null => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const anchorKey = selection.getAnchorKey();
  const focusKey = selection.getFocusKey();

  // single line selection
  if (anchorKey === focusKey) {
    const before = contentState.getBlockBefore(anchorKey);

    if (before) {
      return before;
    }
  }

  return null;
};

export const addEmptyBlock = (editorState: EditorState, blockKey: string) => {
  const contentState = editorState.getCurrentContent();

  const newBlock = new ContentBlock({
    key: genKey(),
    type: "unstyled",
    text: "",
  });
  const newBlockMap = contentState
    .getBlockMap()
    .set(newBlock.getKey(), newBlock);

  return EditorState.push(
    editorState,
    ContentState.createFromBlockArray(newBlockMap.toArray()),
    "split-block"
  );
};

export const removeBlock = (
  editorState: EditorState,
  blockKey: string
): EditorState => {
  const contentState = editorState.getCurrentContent();
  const block = contentState.getBlockForKey(blockKey);
  const before = contentState.getBlockBefore(block.getKey());
  const after = contentState.getBlockAfter(block.getKey());
  const selection = editorState.getSelection();

  const selectionOfAtomicBlock = selection.merge({
    anchorKey: before ? before.getKey() : blockKey,
    anchorOffset: 0,
    focusKey: after ? after.getKey() : blockKey,
    focusOffset: 0,
  });

  const contentStateWithoutEntity = Modifier.applyEntity(
    contentState,
    selectionOfAtomicBlock,
    null
  );

  const editorStateWithoutEntity = EditorState.push(
    editorState,
    contentStateWithoutEntity,
    "apply-entity"
  );

  const contentStateWithoutBlock = Modifier.removeRange(
    contentStateWithoutEntity,
    selectionOfAtomicBlock,
    "backward"
  );

  return EditorState.push(
    editorStateWithoutEntity,
    contentStateWithoutBlock,
    "remove-range"
  );
};

export const getCurrentStyle = (
  editorState: EditorState,
  style: string
): string[] => {
  const inlineStyle = editorState.getCurrentInlineStyle();
  const stylesArray = inlineStyle.toJS();

  return stylesArray.reduce((acc: string[], current: string) => {
    if (current.indexOf(style) > -1) {
      acc.push(current);
    }

    return acc;
  }, []);
};
