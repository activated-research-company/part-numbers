const m = require('mithril');

function answeredQuestion() {
  return {
    view: ({ attrs: { question, questionService } }) => m('.fade-in.pt1', [
      m('.f7.mt2.mb2.b.shadow-3', m('a.db.pointer.pa1.no-select', { onclick: () => { questionService.goToQuestion(question); } }, question.title)),
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
