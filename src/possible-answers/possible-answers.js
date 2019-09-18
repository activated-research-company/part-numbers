const m = require('mithril');
const state = require('../state/state');
const possibleAnswer = require('../possible-answer/possible-answer');

function possibleAnswers() {
  function getPossibleAnswers() {
    const possibleAnswers = [];
    state.question.answers.forEach(answer => {
      possibleAnswers.push(m(possibleAnswer, { answer }));
    });
    return possibleAnswers;
  }

  return {
    view: () => m('div', getPossibleAnswers()),
  };
}

module.exports = possibleAnswers;
