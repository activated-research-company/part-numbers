const fontOrBackDetector = require('../questions/installation-position/answers/front-or-back-detector');
const noExistingCable = require('../questions/temperature-control/answers/no-existing-cable');

const part = {
  number: 'PA-CAS-A09',
  applies: () => noExistingCable.isSelected && fontOrBackDetector.isSelected,
};

module.exports = part;
