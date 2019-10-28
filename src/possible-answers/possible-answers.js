const m = require('mithril');
const state = require('../state/state');
const possibleAnswer = require('../possible-answer/possible-answer');

function possibleAnswers() {
  function getPossibleAnswers() {
    const answers = [];
    state.question.answers.forEach((answer) => {
      answers.push(m('.w-75.mb3', m(possibleAnswer, { answer })));
    });
    return answers;
  }

  return {
    view: () => m('div', getPossibleAnswers()),
  };
}

module.exports = possibleAnswers;
