function questionService(questions) {
  function questionHasNotBeenAnswered(question) {
    return !question.answer;
  }

  function getCurrentQuestion() {
    return questions.find(questionHasNotBeenAnswered);
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
