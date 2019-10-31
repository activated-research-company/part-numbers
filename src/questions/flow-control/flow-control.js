function question(installationPosition) {
  function isValid() {
    return !this.answer && installationPosition.answer;
  }

  return {
    title: 'Flow Control',
    text: 'What type of flow control will be used?',
    isValid,
  };
}

module.exports = question;
