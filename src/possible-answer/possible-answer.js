const m = require('mithril');

function possibleAnswer() {
  function getPossibleAnswer(question, answer) {
    if (!answer.input) {
      return m('a.db.pointer.pa1', { onclick: () => { question.setAnswer(answer); } }, answer.text);
    }
    return m('.pa1.flex', [
      m('textarea.w-80', {
        value: answer.text,
        rows: 4,
        oninput: (event) => {
          answer.text = event.target.value;
        },
      }),
      m('.tc.w-20.pointer', { onclick: () => { question.setAnswer(answer); } }, 'Submit'),
    ]);
  }

  return {
    view: ({ attrs: { question, answer } }) => m('.no-select.shadow-3.f6', getPossibleAnswer(question, answer)),
  };
}

module.exports = possibleAnswer;
