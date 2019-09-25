const arcEfc = require ('../question-tree/question/flow-control/answers/arc-efc');
const arcMfc = require ('../question-tree/question/flow-control/answers/arc-mfc');

const part = {
  number: 'PA-KIT-FCM',
  applies: () => arcEfc.isSelected || arcMfc.isSelected,
};

module.exports = part;
