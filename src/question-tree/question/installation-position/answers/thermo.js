const thermo = require('../../gc/answers/thermo');

const answer = {
  text: 'Thermo',
  isValid: () => thermo.isSelected,
};

module.exports = answer;
