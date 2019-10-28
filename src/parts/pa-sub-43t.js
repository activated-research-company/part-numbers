const thermoGc = require('../question-tree/question/gc/answers/thermo');
const thermoEnclosure = require('../question-tree/question/installation-position/answers/thermo');
const capillary = require('../question-tree/question/column/answers/capillary');

const part = {
  number: 'PA-SUB-43T',
  applies: () => thermoGc.isSelected && thermoEnclosure.isSelected && capillary.isSelected,
};

module.exports = part;
