const a6890 = require('../questions/gc/answers/agilent-6890');
const thermoGc = require('../questions/gc/answers/thermo');
const shimadzuGc = require('../questions/gc/answers/shimadzu-2010-or-2030');

const part = {
  number: 'PA-HTR-CTR',
  applies: () => a6890.isSelected || thermoGc.isSelected || shimadzuGc.isSelected,
};

module.exports = part;
