const a6890 = require('../question-tree/question/gc/answers/agilent-6890');
const a7890 = require('../question-tree/question/gc/answers/agilent-7890');
const a8890 = require('../question-tree/question/gc/answers/agilent-8890');
const frontOrBackInlet = require('../question-tree/question/installation-position/answers/front-or-back-inlet');
const packed = require('../question-tree/question/column/answers/packed');

const part = {
  number: 'PA-RRT-PT2',
  applies: () => (a6890.isSelected || a7890.isSelected || a8890.isSelected) && frontOrBackInlet.isSelected && packed.isSelected,
};

module.exports = part;
