import React, { ChangeEvent } from "react";
import { AtomicBlockUtils, EditorState } from "draft-js";
import classNames from "classnames";
import Button from "../../../../../../../button";
import { TextContext } from "../../../../duck/context";
import icon from "./function.svg";
import styles from "./InsertKatex.module.css";

interface InsertKatexProps {}

const InsertKatex: React.FC<InsertKatexProps> = () => {
  const { editorState, setEditorState } = React.useContext(TextContext);
  const [opened, setOpened] = React.useState(false);
  const [expression, setExpression] = React.useState<string>(
    String.raw`c = \pm\sqrt{a^2 + b^2}`
  );

  const clickHandler = () => {
    setOpened(!opened);
  };

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setExpression(String.raw`${e.target.value}`);
  };

  const cancelHandler = () => {
    setOpened(false);
  };

  const insertHandler = () => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "KATEX",
      "IMMUTABLE",
      { expression, size: "size1" }
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    setEditorState(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
    );

    setOpened(false);
    setExpression("");
  };

  return (
    <>
      <Button small onClick={clickHandler}>
        <img src={icon} alt="" />
      </Button>
      <div className={classNames(styles.wrapper, { [styles.opened]: opened })}>
        Type an expression
        <textarea
          value={expression}
          onChange={changeHandler}
          className={styles.textarea}
        />
        <div className={styles.buttons}>
          <Button small onClick={cancelHandler}>
            Cancel
          </Button>
          <Button small onClick={insertHandler} className={styles.insertButton}>
            Insert
          </Button>
        </div>
      </div>
    </>
  );
};

export default InsertKatex;
