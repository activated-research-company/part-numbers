const m = require('mithril');
const button = require('../button/button');
const state = require('../state/state');

function possibleAnswer() {
  function selectAnswer(answer) {
    state.question.answer = answer;
    answer.select();
  }

  function getPossibleAnswer(answer) {
    if (!answer.input) {
      return m('a.db.pointer.pa1', { onclick: () => { selectAnswer(answer); } }, answer.text);
    }
    return m('.pa1.flex', [
      m('textarea.w-80', {
        value: answer.text,
        rows: 4,
        oninput: (event) => {
          answer.text = event.target.value
        },
      }),
      m('.tc.w-20.pointer', { onclick: () => { selectAnswer(answer); } }, 'Submit'),
    ]);
  }

  return {
    view: ({ attrs: { answer }}) => m('.no-select.shadow-3.f6', getPossibleAnswer(answer)),
  };
}

module.exports = possibleAnswer;
