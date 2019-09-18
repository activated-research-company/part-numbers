const answerDecorator = require('../answer-decorator/answer-decorator');

module.exports = {
  decorate: (question) => {
    Object.defineProperty(question, 'answers', {
      get: function() {
        return question.allAnswers.filter(answer => !answer.isValid || answer.isValid());
      },
    });
    question.allAnswers.forEach((answer) => { answerDecorator.decorate(answer); });
  }
};
