const auxillaryDetector = require('../questions/installation-position/answers/auxillary-detector');
const existingCable = require('../questions/temperature-control/answers/existing-cable');

const part = {
  number: 'PA-EXT-A13',
  applies: () => auxillaryDetector.isSelected && existingCable.isSelected,
};

module.exports = part;
