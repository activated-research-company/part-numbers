function question() {
  function isValid() {
    return !this.answer;
  }

  return {
    title: 'GC Type',
    text: 'What type of GC will you be using?',
    isValid,
  };
}

module.exports = question;
