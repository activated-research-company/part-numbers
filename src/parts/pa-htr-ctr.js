const a6890 = require('../questions/gc/answers/agilent-6890');
const thermoGc = require('../questions/gc/answers/thermo');

const part = {
  number: 'PA-HTR-CTR',
  applies: () => a6890.isSelected || thermoGc.isSelected,
};

module.exports = part;
