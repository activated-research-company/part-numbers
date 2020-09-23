const eventEmitter = require('../event-emitter/event-emitter');

function answerDecorator() {
  function decorate(answer) {
    const decoratedAnswer = answer;
    decoratedAnswer.isSelected = false;
    decoratedAnswer.select = () => {
      decoratedAnswer.isSelected = true;
      eventEmitter.emit('answerselected', decoratedAnswer);
    };
    decoratedAnswer.deselect = () => {
      decoratedAnswer.isSelected = false;
      eventEmitter.emit('answerdeselected', decoratedAnswer);
    };
  }

  return {
    decorate,
  };
}

module.exports = answerDecorator;
