function questionDecorator(answerDecorator) {
  function decorate(question, answers) {
    const decoratedQuestion = question;

    decoratedQuestion.allAnswers = Object.values(answers);

    Object.assign(decoratedQuestion, answers);

    const answerIsValid = (answer) => !answer.isValid || answer.isValid();

    Object.defineProperty(decoratedQuestion, 'answers', {
      get: () => decoratedQuestion.allAnswers.filter(answerIsValid),
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
    return this;
  }

  return {
    decorate,
  };
}

module.exports = questionDecorator;
