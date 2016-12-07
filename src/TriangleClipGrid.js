import TriangleClip from './TriangleClip.js';
/**
 * Construct a grid where xy-coordinates correspond to triangles instead of squares
 * --------------------------------------
 * \1,1 /\1,3 /\
 *  \  /  \  /  \
 *   \/1,2 \/1,4 \
 *  ---------------
 *   /\2,2 /\    /
 *  /  \  /  \  /
 *   2,1\/    \/
 *  ---------------
 */
export default class TriangleClipGrid {
  constructor(x, y, rad, image) {
    this.x = x;
    this.y = y;
    this.dx = this.rad;
    this.dy = this.rad;
    this.dots = [];
    this.rad = rad;
    this.image = image;

    // This is probably round-off too much, and creating
    // a slight overlap along the edges of the triangles
    this.dx = 1.73/2. * this.rad;
    this.dy = this.rad/2.;

    // Final
    this.setup();
  }

  /**
   *
   */
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

  setup() {
    let img = this.image;
    this.grid = [];

    for (var i=0; i < 20; i++) {
      for (var j=0; j < 20; j++) {
        var sig = (i+j) % 2 ? 1 : -1;
        var theta = sig * Math.PI/2.;
        var p = this.get(i, j);
        this.grid.push(new TriangleClip(p.x, p.y, this.rad, img, 'black', theta));
      }
    }

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
