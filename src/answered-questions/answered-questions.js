function answeredQuestions(m, answeredQuestion, questionService) {
  function getAnsweredQuestions() {
    const questions = [];
    questionService.questions.forEach((question) => {
      if (question.answer) {
        questions.push(m(answeredQuestion, { question, questionService }));
      }
    });
    return questions;
  }

  return {
    view: () => m('.pl3.pr3.pb3.h-100', getAnsweredQuestions()),
  };
}

module.exports = answeredQuestions;
