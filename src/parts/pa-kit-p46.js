const frontOrBackInlet = require('../question-tree/question/installation-position/answers/front-or-back-inlet');
const auxillaryDetector = require('../question-tree/question/installation-position/answers/auxillary-detector');
const packed = require('../question-tree/question/column/answers/packed');

const part = {
  number: 'PA-KIT-P46',
  applies: () => (frontOrBackInlet.isSelected || auxillaryDetector.isSelected) && packed.isSelected,
};

module.exports = part;
