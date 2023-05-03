// @ts-check

import { renderPage } from "./app.js";
import { questions } from "./data/questions.data.js";
import { Quiz } from "./models/quiz.models.js";
import { UI } from "./models/ui.models.js";

function main() {
  const quiz = Quiz.getInstance(questions);
  const ui = UI.getInstance();
  renderPage(quiz, ui);
}

main();
