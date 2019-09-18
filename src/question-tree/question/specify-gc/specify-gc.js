const otherGc = require('../gc/answer/other-gc');

const question = {
  title: "Specify GC Type",
  text: "Please specify the GC you will be using:",
  allAnswers: [
    {
      input: true,
    }
  ],
  isValid: function() {
    return !this.answer && otherGc.isSelected
  },
};

module.exports = question;
