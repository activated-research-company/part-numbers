const agilentAuxillaryEpc = require('../questions/flow-control/answers/agilent-auxillary-epc');

const part = {
  number: 'PA-SYS-NFC',
  applies: () => agilentAuxillaryEpc.isSelected,
};

module.exports = part;
