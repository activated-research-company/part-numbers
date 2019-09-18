const agilent5890 = require('./answer/agilent-5890');
const agilent6890 = require('./answer/agilent-6890');
const agilent7890 = require('./answer/agilent-7890');
const agilent8890 = require('./answer/agilent-8890');
const otherGc = require('./answer/other-gc');

const question = {
  title: "GC Type",
  text: "What type of GC will you be using?",
  allAnswers: [
    agilent5890,
    agilent6890,
    agilent7890,
    agilent8890,
    otherGc,
  ],
  isValid: function() {
    return !this.answer;
  }
};

module.exports = question;
