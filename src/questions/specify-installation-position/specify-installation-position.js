const other = require('../installation-position/answers/other');

const question = {
  title: 'Specify Install Position',
  text: 'Please specify the installation position you will be using:',
  allAnswers: [
    {
      input: true,
    }
  ],
  isValid: function() {
    return !this.answer && other.isSelected
  },
};

module.exports = question;
