const thermo = require('../../gc/answers/thermo');

const answer = {
  text: 'Detector',
  isValid: () => thermo.isSelected,
};

module.exports = answer;
