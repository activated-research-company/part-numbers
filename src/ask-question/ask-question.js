function askQuestion(m, possibleAnswers, questionService) {
  return {
    view: () => m('div.relative.pl3.pt2.h-100',
      [
        m('div.f4.b.mb3', questionService.question.text),
        m(possibleAnswers, { question: questionService.question }),
        m('div.f6.bottom-1.absolute', [
          m('div.pb1', 'Please contact us if you have any questions.'),
          m('div.flex.pb1', [
            m('div.w-20', 'email:'),
            m('a', { href: 'mailto: contact@activatedresearch.com' }, 'contact@activatedresearch.com'),
          ]),
          m('div.flex', [
            m('div.w-20', 'phone:'),
            m('a', { href: 'tel:+1612-787-2721' }, '(612) 787-2721'),
          ]),
        ]),
      ],
    ),
  };
}

module.exports = askQuestion;
