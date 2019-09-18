const m = require('mithril');
const state = require('../state/state');
const possibleAnswers = require('../possible-answers/possible-answers');

function askQuestion() {
  return {
    view: () => m('div.pl3.pt2.h-100',
      [
        m('div.f4.b.mb3', state.question.text), // TODO make this a component
        m(possibleAnswers),
      ],
    ),
  };
}

module.exports = askQuestion;
