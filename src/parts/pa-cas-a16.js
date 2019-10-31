const fontOrBackInlet = require('../questions/installation-position/answers/front-or-back-inlet');
const auxillaryDetector = require('../questions/installation-position/answers/auxillary-detector');
const noExistingCable = require('../questions/temperature-control/answers/no-existing-cable');

const part = {
  number: 'PA-CAS-A16',
  applies: () => noExistingCable.isSelected && (fontOrBackInlet.isSelected || auxillaryDetector.isSelected),
};

module.exports = part;
