const thermoGc = require('../questions/gc/answers/thermo');
const thermoEnclosure = require('../questions/installation-position/answers/thermo');
const packed = require('../questions/column/answers/packed');

const part = {
  number: '<THERMO PACKED P/N>',
  applies: () => thermoGc.isSelected && thermoEnclosure.isSelected && packed.isSelected,
};

module.exports = part;
