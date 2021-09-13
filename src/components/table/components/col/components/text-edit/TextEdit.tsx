import React, {useRef} from "react";
import { setEditableCol, updateColContent } from "../../../../duck/actions";
import { TableContext } from "../../../../duck/context";
import styles from "./TextEdit.module.css";

interface TextEditType {
  value: string;
  rowId: number;
  colId: number;
}

const TextEdit: React.FC<TextEditType> = ({ value, colId, rowId }) => {
  const { dispatch } = React.useContext(TableContext);
  const inputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const editBlurHandler = (e: any) => {
    dispatch(updateColContent({ rowId, colId, content: e.target.value }));
    dispatch(setEditableCol({ editableCol: 0 }));
  };

  return (
    <input
      ref={inputRef}
      defaultValue={value}
      onBlur={editBlurHandler}
      className={styles.wrapper}
    />
  );
};

export default TextEdit;
