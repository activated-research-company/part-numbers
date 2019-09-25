const frontOrBackDetector = require('../question-tree/question/installation-position/answers/front-or-back-detector');
const capillary = require('../question-tree/question/column/answers/capillary');

const part = {
  number: 'PA-KIT-STD',
  applies: () => frontOrBackDetector.isSelected && capillary.isSelected,
};

module.exports = part;
