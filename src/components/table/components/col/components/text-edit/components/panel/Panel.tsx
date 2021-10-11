import React from "react";
import { EditorState } from "draft-js";
import {
  Bold,
  Italic,
  Underline,
  UnorderedList,
  OrderedList,
  Headers,
} from "./components";
import styles from "./Panel.module.css";

interface PanelType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const Panel: React.FC<PanelType> = ({ editorState, setEditorState }) => (
  <div className={styles.wrapper}>
    <Bold editorState={editorState} setEditorState={setEditorState} />
    <Italic editorState={editorState} setEditorState={setEditorState} />
    <Underline editorState={editorState} setEditorState={setEditorState} />
    <UnorderedList editorState={editorState} setEditorState={setEditorState} />
    <OrderedList editorState={editorState} setEditorState={setEditorState} />
    <Headers editorState={editorState} setEditorState={setEditorState} />
  </div>
);

export default Panel;
