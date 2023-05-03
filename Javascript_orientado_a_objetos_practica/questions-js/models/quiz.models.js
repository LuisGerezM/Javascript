// @ts-check

import { Question } from "./question.models.js";

export class Quiz {
  score = 0;
  questionIndex = 0;
  static instance;

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Quiz} returned UI instance
   */
  static getInstance(questions) {
    if (!Quiz.instance) Quiz.instance = new Quiz(questions);

    return Quiz.instance;
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  /**
   *
   * @param {string} answer some text
   */
  guess(answer) {
    if (this.getQuestionIndex().trueAnswer(answer)) {
      this.score++;
    }

    this.questionIndex++;
  }

  /**
   *
   * @returns {boolean} isEnded will return true when finished
   */
  isEnded() {
    return this.questions.length === this.questionIndex;
  }
}
