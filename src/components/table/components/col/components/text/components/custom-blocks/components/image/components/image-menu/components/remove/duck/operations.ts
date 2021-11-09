import { EditorState, Modifier } from "draft-js";

export const removeImage = (editorState: EditorState, blockKey: string): EditorState => {
  const contentState = editorState.getCurrentContent();
  const block = contentState.getBlockForKey(blockKey);
  const before = contentState.getBlockBefore(block.getKey());
  const after = contentState.getBlockAfter(block.getKey());
  const selection = editorState.getSelection();

  const selectionOfAtomicBlock = selection.merge({
    anchorKey: before?.getKey(),
    anchorOffset: 0,
    focusKey: after?.getKey(),
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
