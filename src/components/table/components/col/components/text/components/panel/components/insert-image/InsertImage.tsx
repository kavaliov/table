import React from "react";
import icon from "./picture.svg";
import { EditorState, AtomicBlockUtils } from "draft-js";
import Button from "../../../../../../../button";
import { getImageBlob } from "../../../../duck/utils";
import styles from "./InsertImage.module.css";

interface InsertImageType {
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const InsertImage: React.FC<InsertImageType> = ({
  editorState,
  setEditorState,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const changeFileHandler = () => {
    if (inputRef.current) {
      getImageBlob(inputRef.current).then((content) => {
        const contentState = editorState.getCurrentContent();

        const contentStateWithEntity = contentState.createEntity(
          "IMAGE",
          "MUTABLE",
          { src: content }
        );

        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.createWithContent(
          contentStateWithEntity
        );

        setEditorState(
          AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
        );
      });
    }
  };

  const buttonClickHandler = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        onChange={changeFileHandler}
        className={styles.input}
      />
      <Button
        small
        onMouseDown={(e) => e.preventDefault()}
        onClick={buttonClickHandler}
      >
        <img src={icon} alt="" />
      </Button>
    </>
  );
};

export default InsertImage;
