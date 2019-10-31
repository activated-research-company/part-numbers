function layout(m) {
  return {
    view: ({ children }) => m('.bg.flex', m('.container.flex.mt-5p.ma-auto.o-90.shadow-3', children)),
  };
}

module.exports = layout;
