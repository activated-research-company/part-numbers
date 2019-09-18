const m = require('mithril');
const state = require('../state/state');

function possibleAnswer() {
  function getPossibleAnswer(answer) {
    if (!answer.input) {
      return m('a.db.pointer.pa1', { onclick: () => { answerSelected(answer) } }, answer.text);
    } else {
      return m('div.pa1.flex',
        [
          m('textarea.w-80',
            {
              value: answer.text,
              rows: 4,
              oninput: (event) => { answer.text = event.target.value }
            }
          ),
          m('div.tc.w-20.pointer', { onclick: () => { answerSelected(answer); } }, 'Submit'),
        ]
      );
    }
  }
  
  function answerSelected(answer) {
    answer.select();
    state.question.answer = answer;
  }

  return {
    view: (vnode) => m('div.w-80.shadow-3.mb4.f3.no-select', getPossibleAnswer(vnode.attrs.answer)),
  };
}

module.exports = possibleAnswer;
