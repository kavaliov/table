import React from "react";
import { EditorState, RichUtils } from "draft-js";
import { HEADERS } from "./duck/constants";
import { getLabel } from "./duck/utils";
import styles from "./Headers.module.css";
import { getBlockType } from "../../../../duck/utils";
import Button from "../../../../../../../button";

interface HeadersType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const Headers: React.FC<HeadersType> = ({ editorState, setEditorState }) => {
  const [type, setType] = React.useState("unstyled");
  const [opened, setOpened] = React.useState(false);

  React.useEffect(() => {
    setType(getBlockType(editorState));
  }, [editorState]);

  const headerHandler = (value: string) => {
    setType(value);
    setEditorState(RichUtils.toggleBlockType(editorState, value));
    setOpened(false);
  };

  return (
    <div className={styles.select}>
      <Button
        onClick={() => setOpened(!opened)}
        small
        className={styles.openButton}
        onMouseDown={(e) => e.preventDefault()}
      >
        {getLabel(type)}
      </Button>
      {opened && (
        <ul className={styles.list}>
          <li>
            <button
              value="unstyled"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => headerHandler("unstyled")}
              className={styles.header}
            >
              unstyled
            </button>
          </li>
          {HEADERS.map((header) => (
            <li key={header.label}>
              <button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => headerHandler(header.value)}
                className={styles.header}
              >
                {header.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Headers;
