const questionDecorator = require('../question-decorator/question-decorator');
const gc = require('./gc/gc')();
const gcTypeAnswers = require('./gc/answers/answers');
const specifyGc = require('./specify-gc/specify-gc')(gcTypeAnswers);
const installationPosition = require('./installation-position/installation-position')(gc);
const installationPositionAnswers = require('./installation-position/answers/answers');
const specifyInstallationPosition = require('./specify-installation-position/specify-installation-position');
const flowControl = require('./flow-control/flow-control')(installationPosition);
const flowControlAnswers = require('./flow-control/answers/answers');
const column = require('./column/column')(flowControl);
const columnAnswers = require('./column/answers/answers');
const temperatureControl = require('./temperature-control/temperature-control')(column);
const temperatureControlAnswers = require('./temperature-control/answers/answers');

questionDecorator.decorate(gc, gcTypeAnswers);
questionDecorator.decorate(specifyGc);
questionDecorator.decorate(installationPosition, installationPositionAnswers);
questionDecorator.decorate(specifyInstallationPosition);
questionDecorator.decorate(flowControl, flowControlAnswers);
questionDecorator.decorate(column, columnAnswers);
questionDecorator.decorate(temperatureControl, temperatureControlAnswers);

module.exports = [
  gc,
  specifyGc,
  installationPosition,
  specifyInstallationPosition,
  flowControl,
  column,
  temperatureControl,
];
