const eventEmitter = require('../event-emitter/event-emitter');

module.exports = {
  decorate: (answer) => {
    const decoratedAnswer = answer;
    decoratedAnswer.select = () => {
      decoratedAnswer.isSelected = true;
      eventEmitter.emit('answerselected', decoratedAnswer);
    };
  },
};
