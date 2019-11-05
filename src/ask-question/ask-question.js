function askQuestion(m, possibleAnswers, questionService, contact) {
  return {
    view: () => m('.relative.pl3.pt2.h-100',
      [
        m('.f4.b.mb3', questionService.question.text),
        questionService.question.help ? m('.f7.mb3.i', questionService.question.help) : null,
        m(possibleAnswers, { question: questionService.question }),
        m('.f6.bottom-1.absolute', m(contact)),
      ],
    ),
  };
}

module.exports = askQuestion;
