const questions = require('../question-tree/question/questions');

function questionIsValid(question) {
  return question.isValid();
}

const state = {
  get question() {
    return this.questions.find(questionIsValid);
  },
  questions,
  goToQuestion: function(question) {
    let foundQuestion = false;
    this.questions.forEach((q) => {
      if (q === question) { foundQuestion = true; }
      if (foundQuestion && q.answer) {
        q.answer.isSelected = false;
        q.answer = null;
      }
    });
  }
};

module.exports = state;
