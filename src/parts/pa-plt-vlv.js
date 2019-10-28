const valveBox = require('../question-tree/question/installation-position/answers/valve-box');

const part = {
  number: 'PA-PLT-VLV',
  applies: () => valveBox.isSelected,
};

module.exports = part;
