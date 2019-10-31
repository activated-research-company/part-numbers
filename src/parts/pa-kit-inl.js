const frontOrBackInlet = require('../questions/installation-position/answers/front-or-back-inlet');
const auxillaryDetector = require('../questions/installation-position/answers/auxillary-detector');
const a6890 = require('../questions/gc/answers/agilent-6890');
const capillary = require('../questions/column/answers/capillary');

const part = {
  number: 'PA-KIT-INL',
  applies: () => (frontOrBackInlet.isSelected || (auxillaryDetector.isSelected && a6890.isSelected)) && capillary.isSelected,
};

module.exports = part;
