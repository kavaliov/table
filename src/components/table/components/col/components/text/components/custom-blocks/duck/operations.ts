import { EditorState } from "draft-js";

export const changeBlockData = (
  editorState: EditorState,
  blockKey: string,
  data: any
) => {
  const contentState = editorState.getCurrentContent();
  const block = contentState.getBlockForKey(blockKey);
  const entityAt = block.getEntityAt(0);

  const newContent = contentState.mergeEntityData(entityAt, {
    ...data,
  });

  return EditorState.push(editorState, newContent, "change-block-data");
};
