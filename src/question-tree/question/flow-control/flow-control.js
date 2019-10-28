const answers = require('./answers/answers');
const installationPosition = require('../installation-position/installation-position');
const gc = require('../gc/gc');
const thermo = require('../gc/answers/thermo');

const question = {
  title: "Flow Control",
  text: "What type of flow control will be used?",
  allAnswers: answers,
  isValid: function() {
    return !this.answer && (installationPosition.answer || gc.answer === thermo);
  }
};

module.exports = question;
