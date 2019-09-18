const a5890 = require('../../gc/answer/agilent-5890');
const a6890 = require('../../gc/answer/agilent-6890');
const a7890 = require('../../gc/answer/agilent-7890');
const a8890 = require('../../gc/answer/agilent-8890');

const answer = {
  text: "Valve Box",
  isValid: () => a5890.isSelected || a6890.isSelected || a7890.isSelected || a8890.isSelected,
};

module.exports = answer;
