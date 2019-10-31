const frontOrBackInlet = require('../questions/installation-position/answers/front-or-back-inlet');
const a6890 = require('../questions/gc/answers/agilent-6890');
const auxillaryDetector = require('../questions/installation-position/answers/auxillary-detector');
const packed = require('../questions/column/answers/packed');

const part = {
  number: 'PA-RRT-PT2',
  applies: () => ((a6890.isSelected && auxillaryDetector.isSelected) || frontOrBackInlet.isSelected) && packed.isSelected,
};

module.exports = part;
