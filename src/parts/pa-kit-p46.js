const frontOrBackInlet = require('../questions/installation-position/answers/front-or-back-inlet');
const a6890 = require('../questions/gc/answers/agilent-6890');
const auxillaryDetector = require('../questions/installation-position/answers/auxillary-detector');
const packed = require('../questions/column/answers/packed');

const part = {
  number: 'PA-KIT-P46',
  applies: () => (frontOrBackInlet.isSelected || (a6890.isSelected && auxillaryDetector.isSelected)) && packed.isSelected,
};

module.exports = part;
