import React, { ChangeEvent } from "react";
import { EditorState } from "draft-js";
import OutsideClickHandler from "react-outside-click-handler";
import Button from "../../../../../../../../../../../button";
import { TextContext } from "../../../../../../../../duck/context";
import { changeBlockData } from "../../../../../../duck/operations";
import icon from "./crop.svg";
import styles from "./ChangeSize.module.css";

interface ChangeSizeType {
  blockKey: string;
}

const ChangeSize: React.FC<ChangeSizeType> = ({ blockKey }) => {
  const { setEditMode, editorState, setEditorState } = React.useContext(
    TextContext
  );
  const widthInputRef = React.useRef<HTMLInputElement>(null);
  const [opened, setOpened] = React.useState(false);
  const contentState = editorState.getCurrentContent();
  const entityKey = contentState.getBlockForKey(blockKey).getEntityAt(0);
  const data = contentState.getEntity(entityKey).getData();
  const [size, setSize] = React.useState({
    width: data.width || 100,
  });

  React.useEffect(() => {
    if (opened && widthInputRef.current) {
      setEditMode(false);
      widthInputRef.current.focus();
    }
  }, [opened, setEditMode]);

  const openHandler = (): void => {
    setOpened(true);
  };

  const closeHandler = () => {
    setOpened(false);
    setEditMode(true);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSize((prevSize) => ({ ...prevSize, [e.target.name]: +e.target.value }));
  };

  const changeSizeHandler = () => {
    setEditMode(true);
    setOpened(false);
    const newEditorState = changeBlockData(editorState, blockKey, size);
    setEditorState(
      EditorState.forceSelection(newEditorState, newEditorState.getSelection())
    );
  };

  return (
    <>
      <Button onClick={openHandler}>
        <img src={icon} alt="" />
      </Button>
      {opened && (
        <div
          className={styles.wrapper}
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
        >
          <OutsideClickHandler onOutsideClick={closeHandler}>
            <div className={styles.formTitle}>Change Size (%)</div>
            <input
              value={size.width}
              name="width"
              onChange={onChangeHandler}
              ref={widthInputRef}
              autoComplete="off"
              min={1}
              max={100}
            />
            <div className={styles.buttons}>
              <Button small onClick={closeHandler}>
                Cancel
              </Button>
              <Button
                small
                onClick={changeSizeHandler}
                className={styles.changeButton}
              >
                Change
              </Button>
            </div>
          </OutsideClickHandler>
        </div>
      )}
    </>
  );
};

export default ChangeSize;
