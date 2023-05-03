// @ts-check

import { Quiz } from "./models/quiz.models";
import { UI } from "./models/ui.models";

/**
 *
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui ui object
 */
export const renderPage = (quiz, ui) => {
  ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
  if (quiz.isEnded()) ui.showScores(quiz.score);
  else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
  }
};
