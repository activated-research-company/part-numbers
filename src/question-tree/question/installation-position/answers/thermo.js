const thermo = require('../../gc/answers/thermo');

const answer = {
  text: 'Detector Position',
  isValid: () => thermo.isSelected,
};

module.exports = answer;
