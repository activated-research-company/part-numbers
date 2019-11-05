const answerDecorator = require('../answer-decorator/answer-decorator')();
const questionDecorator = require('../question-decorator/question-decorator')(answerDecorator);
const gc = require('./gc/gc')();
const gcTypeAnswers = require('./gc/answers/answers');
const installationPosition = require('./installation-position/installation-position')();
const installationPositionAnswers = require('./installation-position/answers/answers');
const flowControl = require('./flow-control/flow-control')();
const flowControlAnswers = require('./flow-control/answers/answers');
const column = require('./column/column')();
const columnAnswers = require('./column/answers/answers');
const temperatureControl = require('./temperature-control/temperature-control')();
const temperatureControlAnswers = require('./temperature-control/answers/answers');

questionDecorator
  .decorate(gc, gcTypeAnswers)
  .decorate(installationPosition, installationPositionAnswers)
  .decorate(flowControl, flowControlAnswers)
  .decorate(column, columnAnswers)
  .decorate(temperatureControl, temperatureControlAnswers);

module.exports = [
  gc,
  installationPosition,
  flowControl,
  column,
  temperatureControl,
];
