const shimadzuInlet = require('../questions/installation-position/answers/shimadzu-inlet');
const capillary = require('../questions/column/answers/capillary');

const part = {
  number: 'PA-KIT-SHZ',
  applies: () => shimadzuInlet && capillary.isSelected,
};

module.exports = part;
