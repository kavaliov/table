import { EditorState } from "draft-js";
import {
  createAtomicSelection,
  setAtomicBlockType,
} from "../../../../../duck/utils";

export const changeAtomicFloating = (
  editorState: EditorState,
  setEditorState: any,
  blockKey: string,
  type: string
): void => {
  const oldSelection = editorState.getSelection();
  const newSelection = createAtomicSelection(editorState, blockKey);
  const newEditorState = EditorState.acceptSelection(editorState, newSelection);

  setEditorState(
    setAtomicBlockType(newEditorState, newEditorState.getSelection(), type)
  );

  setEditorState((prevEditorState: EditorState) =>
    EditorState.acceptSelection(prevEditorState, oldSelection)
  );
};
