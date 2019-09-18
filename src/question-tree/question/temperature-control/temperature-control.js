const answers = require('./answers/answers')
const column = require('../column/column');

const question = {
  title: "Temperature Control",
  text: "What type of temperature control will be used?",
  allAnswers: answers,
  isValid: function() {
    return !this.answer && column.answer;
  },
};

module.exports = question;
