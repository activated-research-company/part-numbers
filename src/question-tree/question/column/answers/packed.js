const thermoGc = require('../../gc/answers/thermo');

const answer = {
  text: 'Packed',
  isValid: () => !thermoGc.isSelected,
};

module.exports = answer;
