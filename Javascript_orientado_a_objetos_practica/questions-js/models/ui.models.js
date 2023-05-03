export class UI {
  static instance;

  constructor() {}

  /**
   *
   * @returns {UI} returned UI instance
   */
  static getInstance() {
    if (!UI.instance) UI.instance = new UI();

    return UI.instance;
  }

  /**
   *
   * @param {string} text question to render
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string[]} choices the choices of the question
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = `button btn`;
      button.addEventListener("click", () => callback(choices[i]));

      choicesContainer.append(button);
    }
  }

  /**
   *
   * @param {number} score the total score
   */
  showScores(score) {
    const quizEndHTML = `
        <h1>Resultado</h1>
        <h2 class="points"> Tu Puntaje: ${score}</h2>
    `;

    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
  }

  /**
   *
   * @param {number} currentIndex the current index of the quiz
   * @param {number} total total questions
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
  }
}
