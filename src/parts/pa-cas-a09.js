const fontOrBackDetector = require('../question-tree/question/installation-position/answers/front-or-back-detector')
const noExistingCable = require('../question-tree/question/temperature-control/answers/no-existing-cable');

const part = {
  number: 'PA-CAS-A09',
  applies: () => noExistingCable.isSelected && fontOrBackDetector.isSelected,
};

module.exports = part;
