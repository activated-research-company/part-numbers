const a7890 = require('../../gc/answers/agilent-7890');
const a8890 = require('../../gc/answers/agilent-8890');

const answer = {
  text: 'Existing cable assembly with A1 or A2 available',
  isValid: () => a7890.isSelected || a8890.isSelected,
};

module.exports = answer;
