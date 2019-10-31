require('../node_modules/tachyons/css/tachyons.min.css');
require('./index.css');

const m = require('mithril');
const layout = require('./layout/layout')();
const questions = require('./questions/questions');
const questionService = require('./question-service/question-service')(questions);
const answeredQuestion = require('./answered-question/answered-question');
const answeredQuestions = require('./answered-questions/answered-questions')(m, answeredQuestion, questionService);
const possibleAnswers = require('./possible-answers/possible-answers');
const askQuestion = require('./ask-question/ask-question')(m, possibleAnswers, questionService);
const partNumbers = require('./part-numbers/part-numbers');
const home = require('./home/home')(m, questionService, answeredQuestions, askQuestion, partNumbers);

m.route(document.body, '/', {
  '/': {
    view: () => m(layout, m(home)),
  },
});
