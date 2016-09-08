class App {
  constructor () {
    throw new Error('Calling empty constructor');
  };

  setup (params) {
    throw new Error('Calling empty setup function');
  };

  update (params) {
    throw new Error('Calling empty update function');
  };

  draw (ctx) {
    throw new Error('Calling empty draw function');
  };
}

export {App};
