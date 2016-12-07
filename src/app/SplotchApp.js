import App from './App.js';

class Splotch {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.r = size;
    this.dots = [];
    this.addEdge();
    this.addEdge();
    this.addEdge();
    this.addEdge();
  }

  addEdge() {
    var lastDot = this.dots.slice(-1);
    lastDot = lastDot.length ? lastDot[0] : false;

    if (!lastDot) {
      this.dots = [{x: this.x, y: this.y, r:this.r/3}];
    } else {
      var randomAngle = Math.random() * 2 * Math.PI;
      this.dots.push({
        x: lastDot.x + lastDot.r * Math.cos(randomAngle),
        y: lastDot.y + lastDot.r * Math.sin(randomAngle),
        r: this.r/3.,
      });
    }
  }

  update() {
  }

  draw(ctx, callback) {
    var self = this;
    var colors = ['cyan', 'yellow', 'magenta'];
    var i = 0;
    this.dots.forEach(function (dot) {
      ctx.save();

      ctx.globalCompositeOperation = 'lighter';
      i++;
      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.r, 0, 2*Math.PI);
      ctx.fill();
      ctx.restore();

      if (callback) {
        callback.call(self, ctx);
      }
    });
  }

  nudged(dx, dy, dr) {
    return new Splotch(this.x + dx, this.y + dy, this.r + dr);
  }
}

export default class SplotchApp extends App {

  constructor(params) {
    super(params);
    this.id = params.id;
  }

  setup() {
    this.el = document.getElementById(this.id);
    this.width = this.el.width;
    this.height = this.el.height;
    this.ctx = this.el.getContext('2d');
    this.splotches = [];

    for (var i=0; i < 100; i++) {
      var x = Math.random() * this.width;
      var y = Math.random() * this.height;
      var r = 10 + Math.random() * 20;
      this.splotches.push(new Splotch(x, y, r));
    }
  }

  update() {
  }

  draw() {
    var ctx = this.ctx;
    this.clear();
    this.splotches.forEach(function (s) {
      s.draw(ctx);
    });
  }

  clear() {
    var ctx = this.ctx;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.width, this.height);
  }
}
