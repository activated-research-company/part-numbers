const m = require('mithril');
const possibleAnswer = require('../possible-answer/possible-answer');

function possibleAnswers() {
  function getPossibleAnswers(question) {
    const answers = [];
    question.answers.forEach((answer) => {
      answers.push(m('.w-75.mb3', m(possibleAnswer, { question, answer })));
    });
    return answers;
  }

  return {
    view: ({ attrs: { question } }) => m('div', getPossibleAnswers(question)),
  };
}

module.exports = possibleAnswers;
