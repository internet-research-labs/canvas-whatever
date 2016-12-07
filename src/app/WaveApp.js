import App from './App.js';
import Grid from '../Grid.js';

export default class WaveApp extends App {
  constructor(params) {
    super(params);
    this.id = params.id;
  }

  setup() {
    this.el = document.getElementById(this.id);
    this.width = this.el.width;
    this.height = this.el.height;
    this.ctx = this.el.getContext('2d');
    this.grid3 = new Grid(this.el, 6, 6, 'red');
    this.grid4 = new Grid(this.el, 6, 6, 'blue');
  }

  update(params) {
  }

  draw() {
    var ctx = this.ctx;
    this.clear();
    ctx.save();
    ctx.globalCompositeOperation = 'darken';
    this.grid3.draw(ctx);
    this.grid4.draw(ctx);
    ctx.restore();
  }

  clear() {
    var ctx = this.ctx;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, this.width, this.height);
  }
}
