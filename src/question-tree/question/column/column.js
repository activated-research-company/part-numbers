const capillary = require('./answers/capillary');
const packed = require('./answers/packed');
const flowControl = require('../flow-control/flow-control');

const question = {
  title: "Column Type",
  text: "What type of column will be used?",
  allAnswers: [
    capillary,
    packed,
  ],
  isValid: function() {
    return !this.answer && flowControl.answer;
  },
};

module.exports = question;
