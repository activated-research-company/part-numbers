function askQuestion(m, possibleAnswers, questionService) {
  return {
    view: () => m('.relative.pl3.pt2.h-100',
      [
        m('.f4.b.mb3', questionService.question.text),
        questionService.question.help ? m('.f7.mb3.i', questionService.question.help) : null,
        m(possibleAnswers, { question: questionService.question }),
        m('.f6.bottom-1.absolute', [
          m('.pb1', 'Please contact us if you have any questions.'),
          m('.flex.pb1', [
            m('.w-20', 'email:'),
            m('a', { href: 'mailto: contact@activatedresearch.com' }, 'contact@activatedresearch.com'),
          ]),
          m('.flex', [
            m('.w-20', 'phone:'),
            m('a', { href: 'tel:+1612-787-2721' }, '(612) 787-2721'),
          ]),
        ]),
      ],
    ),
  };
}

module.exports = askQuestion;
