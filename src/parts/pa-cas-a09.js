const noExistingCable = require ('../question-tree/question/temperature-control/answers/no-existing-cable');

const part = {
  number: 'PA-CAS-A09',
  applies: () => noExistingCable.isSelected,
};

module.exports = part;
