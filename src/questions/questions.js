const questionDecorator = require('../question-decorator/question-decorator');
const gc = require('./gc/gc');
const specifyGc = require('./specify-gc/specify-gc');
const installationPosition = require('./installation-position/installation-position');
const specifyInstallationPosition = require('./specify-installation-position/specify-installation-position');
const flowControl = require('./flow-control/flow-control');
const column = require('./column/column');
const temperatureControl = require('./temperature-control/temperature-control');

const questions = [
  gc,
  specifyGc,
  installationPosition,
  specifyInstallationPosition,
  flowControl,
  column,
  temperatureControl,
]

questions.forEach((question) => {
  questionDecorator.decorate(question);
});

module.exports = questions;
