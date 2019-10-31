function question(gc) {
  function isValid() {
    return !this.answer && gc.answer;
  }

  return {
    title: 'Installation Position',
    text: 'Where will the Polyarc be installed?',
    help: 'Note: The Polyarc requires an open position on the GC that has access to the GC oven. Please indicate which position you have available for the installation.',
    isValid,
  };
}

module.exports = question;
