const a7890 = require('../question-tree/question/gc/answers/agilent-7890');
const frontOrBackDetector = require('../question-tree/question/installation-position/answers/front-or-back-detector');
const capillary = require('../question-tree/question/column/answers/capillary');

const part = {
  number: 'PA-SUB-42D',
  applies: () => a7890.isSelected &&  frontOrBackDetector.isSelected && capillary.isSelected,
};

module.exports = part;
