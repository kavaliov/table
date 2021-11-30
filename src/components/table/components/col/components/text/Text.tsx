import React, { useRef } from "react";
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import {
  Editor,
  EditorState,
  convertToRaw,
  convertFromRaw,
  DraftHandleValue,
} from "draft-js";
import { rowsStateActions } from "../../../../duck/actions";
import { TableContext } from "../../../../duck/context";
import { Panel, CustomBlock } from "./components";
import { getBeforeBlock, getBlockStyle, removeBlock } from "./duck/utils";
import { TextContext } from "./duck/context";
import { customStyleMap } from "./duck/constants";
import styles from "./Text.module.css";

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
      console.log(value);
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

  const handleKeyCommand = (command: string): DraftHandleValue => {
    if (command === "backspace") {
      const beforeBlock = getBeforeBlock(editorState);
      const selection = editorState.getSelection();

      if (
        beforeBlock &&
        beforeBlock.getType().indexOf("atomic") > -1 &&
        !selection.getEndOffset()
      ) {
        setEditorState(removeBlock(editorState, beforeBlock.getKey()));

        return "handled";
      }
    }

    return "not-handled";
  };

  return (
    <TextContext.Provider
      value={{
        editMode,
        setEditMode,
        editorState,
        setEditorState,
        editor: editorRef.current,
      }}
    >
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
              if (block.getType().indexOf("atomic") > -1) {
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
            handleKeyCommand={handleKeyCommand}
            customStyleMap={customStyleMap}
            ref={editorRef}
          />
        </OutsideClickHandler>
      </div>
    </TextContext.Provider>
  );
};

export default Text;
