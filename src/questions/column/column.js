function question(flowControl) {
  function isValid() {
    return !this.answer && flowControl.answer;
  }

  return {
    title: 'Column Type',
    text: 'What type of column will be used?',
    isValid,
  };
}

module.exports = question;
