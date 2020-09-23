const shimadzu2010Or2030 = require('../../gc/answers/shimdazu-2010-or-2030');

const answer = {
  text: 'Inlet Position',
  isValid: () => shimadzu2010Or2030.isSelected,
};

module.exports = answer;
