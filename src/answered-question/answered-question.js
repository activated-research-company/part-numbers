const m = require('mithril');
const state = require('../state/state');

function answeredQuestion() {
  return {
    view: (vnode) => [
      m('div.f7.mt2.mb2.b.shadow-3', m('a.db.pointer.pa1.no-select', { onclick: () => { state.goToQuestion(vnode.attrs.question) } }, vnode.attrs.question.title)),
      m('div.f7', vnode.attrs.question.answer ? vnode.attrs.question.answer.text : ""),
    ],
  };
}

module.exports = answeredQuestion;
