export default class App {
  constructor(params) {
  };

  setup(params) {
    throw new Error('Calling empty setup function');
  };

  update(params) {
    throw new Error('Calling empty update function');
  };

  draw() {
    throw new Error('Calling empty draw function');
  };

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(this.loop.bind(this));
  }
}
