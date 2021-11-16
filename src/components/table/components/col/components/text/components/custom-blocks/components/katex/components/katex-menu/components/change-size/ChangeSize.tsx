import React, { ChangeEvent } from "react";
import { EditorState } from "draft-js";
import { changeBlockData } from "../../../../../../duck/operations";
import { TextContext } from "../../../../../../../../duck/context";
import { SIZES } from "./duck/constants";
import styles from "./ChangeSize.module.css";

interface ChangeSizeProps {
  blockKey: string;
}

const ChangeSize: React.FC<ChangeSizeProps> = ({ blockKey }) => {
  const { editorState, setEditorState } = React.useContext(TextContext);
  const contentState = editorState.getCurrentContent();
  const entityKey = contentState.getBlockForKey(blockKey).getEntityAt(0);
  const data = contentState.getEntity(entityKey).getData();
  const [size, setSize] = React.useState(data.size);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
    const newEditorState = changeBlockData(editorState, blockKey, {
      size: e.target.value,
    });
    setEditorState(
      EditorState.forceSelection(newEditorState, newEditorState.getSelection())
    );
  };

  return (
    <select value={size} onChange={onChangeHandler} className={styles.select}>
      {SIZES.map((size) => (
        <option key={size.value} value={size.value}>
          {size.label}
        </option>
      ))}
    </select>
  );
};

export default ChangeSize;
