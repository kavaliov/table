import { EditorState } from "draft-js";

export const changeImageSize = (
  editorState: EditorState,
  blockKey: string,
  size: { width: number; height: number }
) => {
  const contentState = editorState.getCurrentContent();
  const block = contentState.getBlockForKey(blockKey);
  const entityAt = block.getEntityAt(0);

  const newContent = contentState.mergeEntityData(entityAt, {
    ...size,
  });

  return EditorState.push(editorState, newContent, "change-block-data");
};
