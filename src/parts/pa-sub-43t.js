const thermoGc = require('../questions/gc/answers/thermo');
const thermoEnclosure = require('../questions/installation-position/answers/thermo');
const capillary = require('../questions/column/answers/capillary');

const part = {
  number: 'PA-SUB-43T',
  applies: () => thermoGc.isSelected && thermoEnclosure.isSelected && capillary.isSelected,
};

module.exports = part;
