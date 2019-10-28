const frontOrBackInlet = require('../question-tree/question/installation-position/answers/front-or-back-inlet');
const auxillaryDetector = require('../question-tree/question/installation-position/answers/auxillary-detector');
const packed = require('../question-tree/question/column/answers/packed');

const part = {
  number: 'PA-RRT-PT2',
  applies: () => (auxillaryDetector.isSelected || frontOrBackInlet.isSelected) && packed.isSelected,
};

module.exports = part;
