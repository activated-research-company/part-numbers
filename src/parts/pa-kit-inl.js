const frontOrBackInlet = require('../question-tree/question/installation-position/answers/front-or-back-inlet');
const auxillaryDetector = require('../question-tree/question/installation-position/answers/auxillary-detector');
const a6890 = require('../question-tree/question/gc/answers/agilent-6890');
const capillary = require('../question-tree/question/column/answers/capillary');

const part = {
  number: 'PA-KIT-INL',
  applies: () => (frontOrBackInlet.isSelected || (auxillaryDetector.isSelected && a6890.isSelected)) && capillary.isSelected,
};

module.exports = part;
