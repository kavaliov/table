import React from "react";
import { EditorState } from "draft-js";
import {
  Bold,
  Italic,
  Underline,
  UnorderedList,
  OrderedList,
  FontSize,
  Colors,
  AlignRight,
  AlignLeft,
  AlignCenter,
  InsertImage,
  InsertKatex,
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
    <div className={styles.separator} />
    <FontSize />
    <div className={styles.separator} />
    <Colors />
    <div className={styles.separator} />
    <AlignLeft editorState={editorState} setEditorState={setEditorState} />
    <AlignCenter editorState={editorState} setEditorState={setEditorState} />
    <AlignRight editorState={editorState} setEditorState={setEditorState} />
    <div className={styles.separator} />
    <UnorderedList editorState={editorState} setEditorState={setEditorState} />
    <OrderedList editorState={editorState} setEditorState={setEditorState} />
    <div className={styles.separator} />
    <InsertImage />
    <InsertKatex />
  </div>
);

export default Panel;
