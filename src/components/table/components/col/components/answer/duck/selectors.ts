import { Answer, AnswersState } from "../../../../../duck/types";

export const getCurrentAnswer = (
  answers: AnswersState,
  rowId: number,
  colId: number
): Answer =>
  answers.filter(
    (itemAnswer: Answer) =>
      itemAnswer.rowId === rowId && itemAnswer.colId === colId
  )[0];
