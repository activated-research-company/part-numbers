const frontOrBackDetector = require('../question-tree/question/installation-position/answers/front-or-back-detector');
const valveBox = require('../question-tree/question/installation-position/answers/valve-box');
const packed = require('../question-tree/question/column/answers/packed');

const part = {
  number: 'PA-RRT-PT1',
  applies: () => (frontOrBackDetector.isSelected || valveBox.isSelected) && packed.isSelected,
};

module.exports = part;
