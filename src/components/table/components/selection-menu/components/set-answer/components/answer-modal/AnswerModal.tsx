import React from "react";
import Button from "../../../../../button";
import { TableContext } from "../../../../../../duck/context";
import { answersStateActions } from "../../../../../../duck/actions";
import styles from "./AnswerModal.module.css";

interface AnswerModalProps {
  closeAnswer: () => void;
}

const AnswerModal: React.FC<AnswerModalProps> = ({ closeAnswer }) => {
  const { dispatchAnswersState, tableState } = React.useContext(TableContext);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const setAnswerHandler = () => {
    const colPosition = tableState.selectionState.start;

    if (colPosition && textareaRef.current) {
      dispatchAnswersState(
        answersStateActions.setTeacherAnswer({
          colId: colPosition.colId,
          rowId: colPosition.rowId,
          answer: textareaRef.current.value,
        })
      );
      closeAnswer();
    }
  };

  return (
    <div className={styles.wrapper}>
      <textarea ref={textareaRef} className={styles.textarea} />
      <Button onClick={setAnswerHandler}>Set answer</Button>
    </div>
  );
};

export default AnswerModal;
