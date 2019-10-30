const a6890 = require('../question-tree/question/gc/answers/agilent-6890');
const frontOrBackDetector = require('../question-tree/question/installation-position/answers/front-or-back-detector');
const valveBox = require('../question-tree/question/installation-position/answers/valve-box');
const auxillaryDetector = require('../question-tree/question/installation-position/answers/auxillary-detector');
const capillary = require('../question-tree/question/column/answers/capillary');

const part = {
  number: 'PA-SUB-42D',
  applies: () => (frontOrBackDetector.isSelected || valveBox.isSelected || (auxillaryDetector.isSelected && !a6890.isSelected)) && capillary.isSelected,
};

module.exports = part;
