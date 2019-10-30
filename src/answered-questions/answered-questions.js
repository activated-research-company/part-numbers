const m = require('mithril');
const state = require('../state/state');
const answeredQuestion = require('../answered-question/answered-question');

function answeredQuestions() {
  function getAnsweredQuestions() {
    const questions = [];
    state.questions.forEach((question) => {
      if (question.answer) {
        questions.push(m(answeredQuestion, { question }));
      }
    });
    return questions;
  }

  return {
    view: () => m('div.pl3.pr3.pb3.h-100', getAnsweredQuestions()),
  };
}

module.exports = answeredQuestions;
