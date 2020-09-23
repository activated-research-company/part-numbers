const arcEfc = require('../questions/flow-control/answers/arc-efc');
const arcMfc = require('../questions/flow-control/answers/arc-mfc');

const part = {
  number: 'PA-KIT-FCM',
  applies: () => arcEfc.isSelected || arcMfc.isSelected,
};

module.exports = part;
