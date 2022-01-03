import React, { useContext, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { TableContext } from "../../../../duck/context";
import { answersStateActions } from "../../../../duck/actions";
import { TeacherAnswer } from "./components";
import { getCurrentAnswer } from "./duck/selectors";
import styles from "./Answer.module.css";

interface AnswerProps {
  rowId: number;
  colId: number;
  background?: string;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Answer: React.FC<AnswerProps> = ({
  editMode,
  setEditMode,
  rowId,
  colId,
}) => {
  const { answersState, dispatchAnswersState, teacherMode } = useContext(
    TableContext
  );
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [answer, setAnswer] = React.useState<string>(
    getCurrentAnswer(answersState, rowId, colId)?.studentAnswer || ""
  );

  React.useEffect(() => {
    if (textAreaRef.current && editMode) {
      textAreaRef.current.focus();
    }
  }, [editMode]);

  const outsideHandler = () => {
    if (editMode && textAreaRef.current) {
      dispatchAnswersState(
        answersStateActions.setStudentAnswer({
          rowId,
          colId,
          answer: textAreaRef.current.value,
        })
      );
      setEditMode(false);
    }
  };

  const onChangeHandler = (e: any) => {
    setAnswer(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {teacherMode && <TeacherAnswer colId={colId} rowId={rowId} />}
      <OutsideClickHandler onOutsideClick={outsideHandler}>
        {editMode ? (
          <textarea
            ref={textAreaRef}
            defaultValue={answer}
            onChange={onChangeHandler}
            className={styles.answer}
          />
        ) : (
          <div className={styles.text}>{answer}</div>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default Answer;
