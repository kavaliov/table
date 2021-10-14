import React from "react";
import { EditorState, RichUtils } from "draft-js";
import { HEADERS } from "./duck/constants";
import styles from "./Headers.module.css";
import { getBlockType } from "../../../../duck/utils";

interface HeadersType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const Headers: React.FC<HeadersType> = ({ editorState, setEditorState }) => {
  const [type, setType] = React.useState("unstyled");

  React.useEffect(() => {
    setType(getBlockType(editorState));
  }, [editorState]);

  const headerHandler = (e: any) => {
    setType(e.target.value);
    setEditorState(RichUtils.toggleBlockType(editorState, e.target.value));
  };

  return (
    <select
      value={type}
      onChange={(e) => headerHandler(e)}
      className={styles.wrapper}
    >
      <option value={"unstyled"}>Unstyled</option>
      {HEADERS.map((header) => (
        <option key={header.label} value={header.value}>
          {header.label}
        </option>
      ))}
    </select>
  );
};

export default Headers;
