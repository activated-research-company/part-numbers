const answers = require('./answers/answers');
const gc = require('../gc/gc');

const question = {
  title: "Installation Position",
  text: "Where will the Polyarc be installed?",
  allAnswers: answers,
  isValid: function() {
    return !this.answer && gc.answer;
  }
};

module.exports = question;
