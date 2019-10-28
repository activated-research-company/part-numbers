const frontOrBackInlet = require('../question-tree/question/installation-position/answers/front-or-back-inlet');
const auxillaryDetector = require('../question-tree/question/installation-position/answers/auxillary-detector');
const capillary = require('../question-tree/question/column/answers/capillary');

const part = {
  number: 'PA-SUB-42Z',
  applies: () => (frontOrBackInlet.isSelected || auxillaryDetector.isSelected) && capillary.isSelected,
};

module.exports = part;
