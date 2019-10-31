require('../node_modules/tachyons/css/tachyons.min.css');
require('./index.css');

const m = require('mithril');
const layout = require('./layout/layout')(m);
const questions = require('./questions/questions');
const questionService = require('./question-service/question-service')(questions);
const answeredQuestion = require('./answered-question/answered-question')(m, questionService);
const answeredQuestions = require('./answered-questions/answered-questions')(m, answeredQuestion, questionService);
const possibleAnswer = require('./possible-answer/possible-answer')(m);
const possibleAnswers = require('./possible-answers/possible-answers')(m, possibleAnswer);
const askQuestion = require('./ask-question/ask-question')(m, possibleAnswers, questionService);
const button = require('./button/button')(m);
const parts = require('./parts/parts');
const partNumbers = require('./part-numbers/part-numbers')(m, button, parts);
const home = require('./home/home')(m, questionService, answeredQuestions, askQuestion, partNumbers);

m.route(document.body, '/', {
  '/': {
    view: () => m(layout, m(home)),
  },
});
