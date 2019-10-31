function home(
  m,
  questionService,
  answeredQuestions,
  askQuestion,
  partNumbers,
) {
  return {
    view: () => [
      m('.w-30.bg-moon-gray', m(answeredQuestions)),
      m('.w-70.bg-white.center', m(questionService.question ? askQuestion : partNumbers)),
    ],
  };
}

module.exports = home;
