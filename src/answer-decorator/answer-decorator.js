const eventEmitter = require('../event-emitter/event-emitter');

module.exports = {
  decorate: (answer) => {
    answer.select = function() {
      this.isSelected = true;
      eventEmitter.emit("answerSelected");
    }
  }
}