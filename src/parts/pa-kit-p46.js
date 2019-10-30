const frontOrBackInlet = require('../question-tree/question/installation-position/answers/front-or-back-inlet');
const a6890 = require('../question-tree/question/gc/answers/agilent-6890');
const auxillaryDetector = require('../question-tree/question/installation-position/answers/auxillary-detector');
const packed = require('../question-tree/question/column/answers/packed');

const part = {
  number: 'PA-KIT-P46',
  applies: () => (frontOrBackInlet.isSelected || (a6890.isSelected && auxillaryDetector.isSelected)) && packed.isSelected,
};

module.exports = part;
