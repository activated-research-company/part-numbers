const fontOrBackInlet = require('../question-tree/question/installation-position/answers/front-or-back-inlet');
const auxillaryDetector = require('../question-tree/question/installation-position/answers/auxillary-detector');
const noExistingCable = require('../question-tree/question/temperature-control/answers/no-existing-cable');

const part = {
  number: 'PA-CAS-A16',
  applies: () => noExistingCable.isSelected && (fontOrBackInlet.isSelected || auxillaryDetector.isSelected),
};

module.exports = part;
