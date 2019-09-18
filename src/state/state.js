const eventEmitter = require('../event-emitter/event-emitter');
const questions = require('../question-tree/question/questions');

const state = {
  get question() {
    return this.questions.find(question => question.isValid());
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
  },
  tryToAutomaticallyAnswerTheNextQuestion: function() {
    let keepGoing = true;
    questions.forEach((question) => {
      if (keepGoing && question.isValid()) {
        if (question.answers.length === 1 && !question.answers[0].input) {
          question.answer = question.answers[0];
          question.answer.isSelected = true;
          keepGoing = false;
        }
      }
    });
  }
};

eventEmitter.on('answerSelected', () => state.tryToAutomaticallyAnswerTheNextQuestion());

module.exports = state;
