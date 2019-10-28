const frontOrBackInlet = require('../question-tree/question/installation-position/answers/front-or-back-inlet');
const packed = require('../question-tree/question/column/answers/packed');

const part = {
  number: 'PA-KIT-P46',
  applies: () => frontOrBackInlet.isSelected && packed.isSelected,
};

module.exports = part;
