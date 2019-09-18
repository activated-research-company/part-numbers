const m = require('mithril');
const answeredQuestions = require('../answered-questions/answered-questions');
const askQuestion = require('../ask-question/ask-question');

function home() {
  return {
    view: () => m('div.bg',
      m('div.container.ma-auto.flex',
        [
          m('div.w-30.mt-5p.bg-moon-gray.o-90.shadow-3', m(answeredQuestions)),
          m('div.w-70.mt-5p.bg-white.o-90.center.shadow-3', m(askQuestion)),
        ],
      ),
    ),
  };
}

module.exports = home;
