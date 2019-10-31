const thermoEnclosure = require('../questions/installation-position/answers/thermo');
const capillary = require('../questions/column/answers/capillary');

const part = {
  number: 'PA-KIT-THR',
  applies: () => thermoEnclosure.isSelected && capillary.isSelected,
};

module.exports = part;
