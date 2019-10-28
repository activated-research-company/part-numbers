const a6890 = require('../question-tree/question/gc/answers/agilent-6890');
const a7890 = require('../question-tree/question/gc/answers/agilent-7890');
const frontOrBackDetector = require('../question-tree/question/installation-position/answers/front-or-back-detector');
const valveBox = require('../question-tree/question/installation-position/answers/valve-box');
const capillary = require('../question-tree/question/column/answers/capillary');

const part = {
  number: 'PA-SUB-42D',
  applies: () => (a6890.isSelected || a7890.isSelected) && (frontOrBackDetector.isSelected || valveBox.isSelected) && capillary.isSelected,
};

module.exports = part;
