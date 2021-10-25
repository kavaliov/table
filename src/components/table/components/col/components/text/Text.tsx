import React, { useRef } from "react";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { rowsStateActions } from "../../../../duck/actions";
import { TableContext } from "../../../../duck/context";
import { getBlockStyle } from "./duck/utils";
import { Panel } from "./components";
import styles from "./Text.module.css";
import CustomBlock from "./components/custom-blocks";

interface TextType {
  value: any;
  rowId: number;
  colId: number;
  background?: string;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Text: React.FC<TextType> = ({
  value,
  colId,
  rowId,
  editMode,
  setEditMode,
}) => {
  const { dispatchRowsState } = React.useContext(TableContext);
  const editorRef = useRef<Editor>(null);
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, [editMode]);

  React.useEffect(() => {
    if (value) {
      setEditorState(EditorState.createWithContent(convertFromRaw(value)));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [value]);

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
    <div
      className={classNames(styles.wrapper, { [styles.editMode]: editMode })}
    >
      <OutsideClickHandler onOutsideClick={outsideClickHandler}>
        {editMode && (
          <Panel editorState={editorState} setEditorState={setEditorState} />
        )}
        <Editor
          blockStyleFn={getBlockStyle}
          blockRendererFn={(block) => {
            if (block.getType() === 'atomic') {
              return {
                component: CustomBlock,
                editable: false,
              };
            }

            return null;
          }}
          readOnly={!editMode}
          editorState={editorState}
          onChange={setEditorState}
          ref={editorRef}
        />
      </OutsideClickHandler>
    </div>
  );
};

export default Text;
