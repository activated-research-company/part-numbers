const valveBox = require('../questions/installation-position/answers/valve-box');
const noExistingCable = require('../questions/temperature-control/answers/no-existing-cable');

const part = {
  number: 'PA-CAS-A12',
  applies: () => noExistingCable.isSelected && valveBox.isSelected,
};

module.exports = part;
