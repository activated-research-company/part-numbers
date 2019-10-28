const thermoGc = require('../question-tree/question/gc/answers/thermo');
const thermoEnclosure = require('../question-tree/question/installation-position/answers/thermo');
const packed = require('../question-tree/question/column/answers/packed');

const part = {
  number: '<THERMO PACKED P/N>',
  applies: () => thermoGc.isSelected && thermoEnclosure.isSelected && packed.isSelected,
};

module.exports = part;
