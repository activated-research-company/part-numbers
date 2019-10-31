const thermo = require('../../gc/answers/thermo');

const answer = {
  text: 'Other',
  isValid: () => !thermo.isSelected,
};

module.exports = answer;
