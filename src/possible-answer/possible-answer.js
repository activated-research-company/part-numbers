function possibleAnswer(m) {
  function getPossibleAnswer(question, answer) {
    return m('a.db.pointer.pa1', { onclick: () => { question.setAnswer(answer); } }, answer.text);
  }

  return {
    view: ({ attrs: { question, answer } }) => m('.no-select.shadow-3.f6', getPossibleAnswer(question, answer)),
  };
}

module.exports = possibleAnswer;
