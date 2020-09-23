const shimadzuInlet = require('../questions/installation-position/answers/shimadzu-inlet');
const packed = require('../questions/column/answers/packed');

const part = {
  number: 'PA-RRT-PT4',
  applies: () => shimadzuInlet.isSelected && packed.isSelected,
};

module.exports = part;
