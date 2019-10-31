function question(gcType) {
  function isValid() {
    return !this.answer && gcType.otherGc.isSelected;
  }

  return {
    title: 'Specify GC Type',
    text: 'Please specify the GC you will be using:',
    allAnswers: [
      {
        input: true,
      },
    ],
    isValid,
  };
}

module.exports = question;
