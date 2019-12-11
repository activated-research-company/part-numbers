const frontOrBackInlet = require('../questions/installation-position/answers/front-or-back-inlet');
const existingCable = require('../questions/temperature-control/answers/existing-cable');

const part = {
  number: 'PA-EXT-A12',
  applies: () => frontOrBackInlet.isSelected && existingCable.isSelected,
};

module.exports = part;
