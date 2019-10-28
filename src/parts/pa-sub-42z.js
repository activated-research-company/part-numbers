const frontOrBackInlet = require('../question-tree/question/installation-position/answers/front-or-back-inlet');
const capillary = require('../question-tree/question/column/answers/capillary');

const part = {
  number: 'PA-SUB-42Z',
  applies: () => frontOrBackInlet.isSelected && capillary.isSelected,
};

module.exports = part;
