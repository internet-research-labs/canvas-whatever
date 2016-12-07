export default class Composed {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.setup();
  }

  setup() {
    this.a.setup();
    this.b.setup();
  }

  draw(ctx) {
    this.a.draw(ctx);
    this.b.draw(ctx);
  }
}
