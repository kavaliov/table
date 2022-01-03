import React from "react";
import { AnswerModal } from "./components";
import styles from "./SetAnswer.module.css";

interface SetAnswerType {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const SetAnswer: React.FC<SetAnswerType> = ({ setOpened }) => {
  const [answerOpened, setAnswerOpened] = React.useState<boolean>(false);

  const openModalHandler = (): void => {
    setAnswerOpened(true);
  };

  const closeAnswer = (): void => {
    setOpened(false);
    setAnswerOpened(false);
  }

  return (
    <li className={styles.container}>
      <button onClick={openModalHandler} className={styles.wrapper}>
        Set Answer
      </button>
      {answerOpened && <AnswerModal closeAnswer={closeAnswer} />}
    </li>
  );
};

export default SetAnswer;
