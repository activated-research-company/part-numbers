const thermoEnclosure = require('../question-tree/question/installation-position/answers/thermo');
const capillary = require('../question-tree/question/column/answers/capillary');

const part = {
  number: 'PA-KIT-THR',
  applies: () => thermoEnclosure.isSelected && capillary.isSelected,
};

module.exports = part;
