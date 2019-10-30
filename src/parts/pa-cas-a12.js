const valveBox = require('../question-tree/question/installation-position/answers/valve-box')
const noExistingCable = require('../question-tree/question/temperature-control/answers/no-existing-cable');

const part = {
  number: 'PA-CAS-A12',
  applies: () => noExistingCable.isSelected && valveBox.isSelected,
};

module.exports = part;
