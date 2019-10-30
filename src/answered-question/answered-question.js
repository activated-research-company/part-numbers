const m = require('mithril');
const state = require('../state/state');

function answeredQuestion() {
  return {
    view: ({ attrs: { question }}) => m('.fade-in.pt1', [
      m('.f7.mt2.mb2.b.shadow-3', m('a.db.pointer.pa1.no-select', { onclick: () => { state.goToQuestion(question) } }, question.title)),
      m('.f7', question.answer ? question.answer.text : ''),
    ]),
    onbeforeremove: ({ dom }) => {
      dom.classList.add('fade-out');
      return new Promise((resolve) => {
        dom.addEventListener('animationend', resolve);
      });
    }
  };
}

module.exports = answeredQuestion;
