const answers = require('./answers/answers');
const installationPosition = require('../installation-position/installation-position');

const question = {
  title: "Flow Control",
  text: "What type of flow control will be used?",
  allAnswers: answers,
  isValid: function() {
    return !this.answer && installationPosition.answer;
  }
};

module.exports = question;
