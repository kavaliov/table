import React from "react";
import { TableContext } from "../../../../../../duck/context";
import Button from "../../../../../button";
import icon from "./assets/info-circle.svg";
import styles from "./TeacherAnswer.module.css";
import { getCurrentAnswer } from "../../duck/selectors";

interface TeacherAnswerProps {
  colId: number;
  rowId: number;
}

const TeacherAnswer: React.FC<TeacherAnswerProps> = ({ colId, rowId }) => {
  const { answersState } = React.useContext(TableContext);
  const [answer, setAnswer] = React.useState<string>("");
  const [opened, setOpened] = React.useState<boolean>(false);

  React.useEffect(() => {
    setAnswer(
      getCurrentAnswer(answersState, rowId, colId)?.teacherAnswer || ""
    );
  }, [answersState, rowId, colId]);

  const showAnswerHandler = (): void => {
    setOpened(!opened);
  };

  if (!answer) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      {opened && <div className={styles.answerWrapper}>{answer}</div>}
      <Button active={opened} small onClick={showAnswerHandler}>
        <img src={icon} alt="" />
      </Button>
    </div>
  );
};

export default TeacherAnswer;
