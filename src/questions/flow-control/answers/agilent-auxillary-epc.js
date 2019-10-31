const a6890 = require('../../gc/answers/agilent-6890');
const a7890 = require('../../gc/answers/agilent-7890');
const a8890 = require('../../gc/answers/agilent-8890');

const answer = {
  text: 'Agilent Aux EPC with two open channels and correct frits available on GC',
  isValid: () => a6890.isSelected || a7890.isSelected || a8890.isSelected,
};

module.exports = answer;
