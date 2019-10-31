function questionService(questions) {
  function questionIsValid(question) {
    return question.isValid();
  }

  function getCurrentQuestion() {
    return questions.find(questionIsValid);
  }

  function setNextQuestion(nextQuestion) {
    let foundQuestion = false;
    questions.forEach((question) => {
      if (question === nextQuestion) { foundQuestion = true; }
      if (foundQuestion && question.answer) {
        question.clearAnswer();
      }
    });
  }

  return {
    questions,
    get question() {
      return getCurrentQuestion();
    },
    goToQuestion: setNextQuestion,
  };
}

module.exports = questionService;
