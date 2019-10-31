function button(m) {
  return {
    view: ({ children, attrs: { onclick } }) => {
      return m('.no-select.shadow-3.f6', m('a.db.pointer.pa1', { onclick }, children));
    },
  };
}

module.exports = button;
