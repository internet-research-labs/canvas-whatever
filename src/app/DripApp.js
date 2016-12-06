import App from './App.js';
import Line from '../Line.js';

function random_between(low, high) {
  return (high-low)*Math.random() + low;
}

export default class DripApp extends App {
  constructor(params) {
    super(params);
    this.id = params.id;
    this.el = document.getElementById(this.id);
    this.width = this.el.width;
    this.height = this.el.height;
    this.ctx = this.el.getContext('2d');
    this.lines = [];
  }

  setup() {
    for (var i=0; i < 5; i++) {
      this.lines.unshift(new Line(
        300+40*i,
        500+80*i+20*Math.random(),
        40+30+40*i + random_between(-30, 80),
        450 + random_between(-100, 100)
      ));
    }
  }

  update(params) {
  }

  clear() {
    var ctx = this.ctx;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.width, this.height);
  }

  draw() {
    this.clear();
    var ctx = this.ctx;
    var width = this.width;
    ctx.imageSmoothingEnabled = true;
    this.lines.forEach(function (val) {
      val.draw(ctx, width);
    });
  }
}
