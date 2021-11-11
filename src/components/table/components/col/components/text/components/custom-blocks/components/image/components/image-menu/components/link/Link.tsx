import React, { ChangeEvent } from "react";
import { EditorState } from "draft-js";
import Button from "../../../../../../../../../../../button";
import { TextContext } from "../../../../../../../../duck/context";
import { changeBlockData } from "../../../../../../duck/operations";
import icon from "./link.svg";
import styles from "./Link.module.css";

interface LinkType {
  blockKey: string;
}

const Link: React.FC<LinkType> = ({ blockKey }) => {
  const { setEditMode, editorState, setEditorState } = React.useContext(
    TextContext
  );
  const [opened, setOpened] = React.useState(false);
  const hrefInputRef = React.useRef<HTMLInputElement>(null);
  const contentState = editorState.getCurrentContent();
  const entityKey = contentState.getBlockForKey(blockKey).getEntityAt(0);
  const data = contentState.getEntity(entityKey).getData();
  const [href, setHref] = React.useState(data.href);

  React.useEffect(() => {
    if (opened && hrefInputRef.current) {
      setEditMode(false);
      hrefInputRef.current.focus();
    }
  }, [opened, setEditMode]);

  const clickHandler = (): void => {
    setOpened(true);
    setEditMode(true);
  };

  const closeHandler = (): void => {
    setOpened(false);
    setEditMode(false);
  };

  const setLinkHandler = (): void => {
    setEditMode(true);
    setOpened(false);
    const newEditorState = changeBlockData(editorState, blockKey, { href });
    setEditorState(
      EditorState.forceSelection(newEditorState, newEditorState.getSelection())
    );
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setHref(e.target.value);
  };

  return (
    <>
      <Button onClick={clickHandler}>
        <img src={icon} alt="" />
      </Button>
      {opened && (
        <div className={styles.wrapper}>
          <input
            ref={hrefInputRef}
            value={href}
            onChange={onChangeHandler}
            autoComplete="off"
          />
          <div className={styles.buttons}>
            <Button small onClick={closeHandler}>
              Cancel
            </Button>
            <Button
              small
              onClick={setLinkHandler}
              className={styles.changeButton}
            >
              Add Link
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Link;
