const a6890 = require('../questions/gc/answers/agilent-6890');
const thermoGc = require('../questions/gc/answers/thermo');
const shimdazuGc = require('../questions/gc/answers/shimdazu-2010-or-2030');

const part = {
  number: 'PA-HTR-CTR',
  applies: () => a6890.isSelected || thermoGc.isSelected || shimdazuGc,
};

module.exports = part;
