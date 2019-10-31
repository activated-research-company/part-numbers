const other = require('../../gc/answers/other-gc');

const answer = {
  text: 'Other',
  isValid: () => other.isSelected,
};

module.exports = answer;
