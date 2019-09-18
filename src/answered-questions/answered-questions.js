const m = require('mithril');
const state = require('../state/state');
const answeredQuestion = require('../answered-question/answered-question');

function answeredQuestions() {
  function getAnsweredQuestions() {
    const answeredQuestions = [];
    state.questions.forEach((question) => {
      if(question.answer) {
        answeredQuestions.push(m(answeredQuestion, { question }));
      }
    });
    return answeredQuestions;
  }

  return {
    view: () => m('div.pl3.pr3.pb3.h-100', getAnsweredQuestions()),
  };
}

module.exports = answeredQuestions;
