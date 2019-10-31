const answerDecorator = require('../answer-decorator/answer-decorator');

module.exports = {
  decorate: (question, answers) => {
    const decoratedQuestion = question;
    if (answers) {
      decoratedQuestion.allAnswers = Object.values(answers);
      Object.assign(decoratedQuestion, answers);
    }
    Object.defineProperty(decoratedQuestion, 'answers', {
      get: () => decoratedQuestion.allAnswers.filter((answer) => !answer.isValid || answer.isValid()),
    });
    decoratedQuestion.setAnswer = (answer) => {
      decoratedQuestion.answer = answer;
      answer.select();
    };
    decoratedQuestion.clearAnswer = () => {
      decoratedQuestion.answer.deselect();
      decoratedQuestion.answer = null;
    };
    decoratedQuestion.allAnswers.forEach((answer) => { answerDecorator.decorate(answer); });
  },
};
