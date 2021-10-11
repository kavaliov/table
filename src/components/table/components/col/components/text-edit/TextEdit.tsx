import React, { useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { updateColContent } from "../../../../duck/actions";
import { TableContext } from "../../../../duck/context";
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
  const { dispatch } = React.useContext(TableContext);
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

  const editHandler = () => {
    const contentState = editorState.getCurrentContent();
    dispatch(
      updateColContent({ rowId, colId, content: convertToRaw(contentState) })
    );
    setEditMode(false);
  };

  return (
    <div className={styles.wrapper}>
      <OutsideClickHandler onOutsideClick={editHandler}>
        {editMode && (
          <Panel editorState={editorState} setEditorState={setEditorState} />
        )}
        <Editor
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
