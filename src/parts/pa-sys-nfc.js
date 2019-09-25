const agilentAuxillaryEpc = require ('../question-tree/question/flow-control/answers/agilent-auxillary-epc')

const part = {
  number: 'PA-SYS-NFC',
  applies: () => agilentAuxillaryEpc.isSelected,
};

module.exports = part;
