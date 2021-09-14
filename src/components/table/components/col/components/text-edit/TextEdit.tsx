import React, { useRef } from "react";
import { updateColContent } from "../../../../duck/actions";
import { TableContext } from "../../../../duck/context";
import styles from "./TextEdit.module.css";

interface TextEditType {
  value: string;
  rowId: number;
  colId: number;
  background?: string;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextEdit: React.FC<TextEditType> = ({
  value,
  colId,
  rowId,
  background,
  setEditMode,
}) => {
  const { dispatch } = React.useContext(TableContext);
  const inputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const editHandler = (e: any) => {
    dispatch(updateColContent({ rowId, colId, content: e.target.value }));
    setEditMode(false);
  };

  const keyDownHandler = (e: any) => {
    if (e.code === "Enter") {
      editHandler(e);
    }
  };

  return (
    <input
      ref={inputRef}
      defaultValue={value}
      onBlur={editHandler}
      onKeyDown={keyDownHandler}
      className={styles.wrapper}
      style={{ background }}
    />
  );
};

export default TextEdit;
