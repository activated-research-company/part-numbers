const answerDecorator = require('../answer-decorator/answer-decorator');

module.exports = {
  decorate: (question) => {
    const decoratedQuestion = question;
    Object.defineProperty(decoratedQuestion, 'answers', {
      get: () => decoratedQuestion.allAnswers.filter((answer) => {
        return !answer.isValid || answer.isValid();
      }),
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
  }
};
