const a6890 = require('../question-tree/question/gc/answers/agilent-6890');
const thermoGc = require('../question-tree/question/gc/answers/thermo');
const otherGc = require('../question-tree/question/gc/answers/other-gc');

const part = {
  number: 'PA-HTR-CTR',
  applies: () => a6890.isSelected || thermoGc.isSelected || otherGc.isSelected,
};

module.exports = part;
