import Tri from './Tri.js';

export default class TriGrid {
  constructor(x, y, rad, size, color, theta) {
    this.theta = theta;
    this.x = x;
    this.y = y;
    this.dx = this.rad;
    this.dy = this.rad;
    this.dots = [];
    this.size = size;
    this.rad = rad;
    this.col = color;
    this.dx = 1.73/2. * this.rad;
    this.dy = this.rad/2.;

    // Final
    this.setup();
  }

  get(i, j) {

    var row = Math.floor(i / 2);

    var x = j * this.dx;
    var y = (4*i-2*row) * this.dy;

    if (i % 2 == 0 && j % 2 == 0) {
      y += this.dy;
    } else if (j % 2 == 0) {
      y -= this.dy;
    }

    return {
      'x': Math.round(x),
      'y': Math.round(y),
    };
  }

  setup () {
    var p1 = this.get(1, 1);
    var p2 = this.get(2, 1);
    var p3 = this.get(3, 1);
    var p4 = this.get(4, 1);
    var p5 = this.get(5, 1);

    var q1 = this.get(1, 2);
    var q2 = this.get(2, 2);
    var q3 = this.get(3, 2);
    var q4 = this.get(4, 2);
    var q5 = this.get(5, 2);

    var r2 = this.get(2, 3);
    var s2 = this.get(2, 4);

    this.grid = [
      new Tri(p1.x, p1.y, this.rad, 'black', -Math.PI/2.),
      new Tri(p2.x, p2.y, this.rad, 'cyan', Math.PI/2.),
      new Tri(p3.x, p3.y, this.rad, 'magenta', -Math.PI/2.),
      new Tri(p4.x, p4.y, this.rad, 'gray', Math.PI/2.),
      new Tri(p5.x, p5.y, this.rad, 'pink', -Math.PI/2.),

      new Tri(q1.x, q1.y, this.rad, 'black', Math.PI/2.),
      new Tri(q2.x, q2.y, this.rad, 'red', -Math.PI/2.),
      new Tri(q3.x, q3.y, this.rad, 'magenta', Math.PI/2.),
      new Tri(q4.x, q4.y, this.rad, 'red', -Math.PI/2.),
      new Tri(q5.x, q5.y, this.rad, 'pink', Math.PI/2.),

      new Tri(r2.x, r2.y, this.rad, 'yellow', Math.PI/2.),
      new Tri(s2.x, s2.y, this.rad, 'blue', -Math.PI/2.),
    ];
  }

  draw(ctx) {
    var self = this;
    ctx.save();
    self.grid.forEach(function (tri, i) {
      tri.draw(ctx);
    });
    ctx.restore();
  }
}
