const frontOrBackInlet = require('../questions/installation-position/answers/front-or-back-inlet');
const a6890 = require('../questions/gc/answers/agilent-6890');
const auxillaryDetector = require('../questions/installation-position/answers/auxillary-detector');
const capillary = require('../questions/column/answers/capillary');

const part = {
  number: 'PA-SUB-42Z',
  applies: () => (frontOrBackInlet.isSelected || (a6890.isSelected && auxillaryDetector.isSelected)) && capillary.isSelected,
};

module.exports = part;
