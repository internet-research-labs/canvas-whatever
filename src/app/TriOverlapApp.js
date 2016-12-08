import App from './App.js';

class Tri {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
  }

  randomEdge() {
    var randomAngle = Math.random() * 2 * Math.PI;
    return [
      this.x + this.rad * Math.cos(randomAngle),
      this.y + this.rad * Math.sin(randomAngle),
    ];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = 'cyan';
    ctx.lineWidth = "1";

    ctx.moveTo(
      this.x + this.rad,
      this.y
    );

    for (var i=1; i < 3; i++) {
      var theta = i * 2 * Math.PI / 3;
      var u = this.x + this.rad * Math.cos(theta);
      var v = this.y + this.rad * Math.sin(theta);
      ctx.lineTo(u, v);
    }

    ctx.closePath();
    ctx.stroke();
  }
}

export default class TriangleOverlapApp extends App {
  constructor(params) {
    super(params);
    this.id = params.id;
  }

  addOverlap() {
    if (!this.overlaps) {
      this.overlaps = [new Tri(150, 150, 30)];
      return;
    }

    var newPos = this.overlaps.slice(-1)[0].randomEdge();
    var rad = 10 + Math.random() * 10;

    this.overlaps.push(new Tri(newPos[0], newPos[1], rad));
  }

  setup() {
    this.el = document.getElementById(this.id);
    this.width = this.el.width;
    this.height = this.el.height;
    this.ctx = this.el.getContext('2d');

    for (var i=0; i<4000; i++) {
      this.addOverlap();
    }
  }

  update() {
  }

  draw() {
    var ctx = this.ctx;
    this.clear();
    this.overlaps.forEach(function (val) {
      val.draw(ctx);
    });
  }

  clear() {
    var ctx = this.ctx;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.width, this.height);
  }
}
