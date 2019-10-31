const existingCable = require('./existing-cable');
const noExistingCable = require('./no-existing-cable');
const arcTemperatureController = require('./arc-temperature-controller');

module.exports = [
  existingCable,
  noExistingCable,
  arcTemperatureController,
]
