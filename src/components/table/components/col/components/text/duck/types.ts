import React from "react";
import { Editor, EditorState } from "draft-js";

export interface TextContext {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
  editor: Editor | null;
}
