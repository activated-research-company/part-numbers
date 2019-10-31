function question(column) {
  function isValid() {
    return !this.answer && column.answer;
  }

  return {
    title: 'Temperature Control',
    text: 'What type of temperature control will be used?',
    isValid,
  };
}

module.exports = question;
