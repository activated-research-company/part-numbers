const shimadzuInlet = require('../questions/installation-position/answers/shimadzu-inlet');
const capillary = require('../questions/column/answers/capillary');

const part = {
  number: 'PA-SUB-43S',
  applies: () => shimadzuInlet.isSelected && capillary.isSelected,
};

module.exports = part;
