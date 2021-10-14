import React, { useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { rowsStateActions } from "../../../../duck/actions";
import { TableContext } from "../../../../duck/context";
import { getBlockStyle } from "./duck/utils";
import { Panel } from "./components";
import styles from "./TextEdit.module.css";

interface TextEditType {
  value: any;
  rowId: number;
  colId: number;
  background?: string;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextEdit: React.FC<TextEditType> = ({
  value,
  colId,
  rowId,
  editMode,
  setEditMode,
}) => {
  const { dispatchRowsState } = React.useContext(TableContext);
  const editorRef = useRef<Editor>(null);
  const [editorState, setEditorState] = React.useState(
    value
      ? EditorState.createWithContent(convertFromRaw(value))
      : EditorState.createEmpty()
  );

  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, [editMode]);

  const outsideClickHandler = () => {
    if (editMode) {
      const contentState = editorState.getCurrentContent();
      dispatchRowsState(
        rowsStateActions.updateColContent({
          rowId,
          colId,
          content: convertToRaw(contentState),
        })
      );
      setEditMode(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <OutsideClickHandler onOutsideClick={outsideClickHandler}>
        {editMode && (
          <Panel editorState={editorState} setEditorState={setEditorState} />
        )}
        <Editor
          blockStyleFn={getBlockStyle}
          readOnly={!editMode}
          editorState={editorState}
          onChange={setEditorState}
          ref={editorRef}
        />
      </OutsideClickHandler>
    </div>
  );
};

export default TextEdit;
