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
function TriangleClipGrid(x, y, rad) {
  this.x = x;
  this.y = y;
  this.dx = this.rad;
  this.dy = this.rad;
  this.dots = [];
  this.rad = rad;

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
TriangleClipGrid.prototype.get = function (i, j) {
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
};

TriangleClipGrid.prototype.setup = function () {
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

  var img = new Image();
  img.src = 'img/wave-3.jpg';

  this.grid = [
    new TriangleClip(p1.x, p1.y, this.rad, img, 'black', -Math.PI/2.),
//  new TriangleClip(p2.x, p2.y, this.rad, img, 'cyan', Math.PI/2.),
//  new TriangleClip(p3.x, p3.y, this.rad, img, 'magenta', -Math.PI/2.),
//  new TriangleClip(p4.x, p4.y, this.rad, img, 'gray', Math.PI/2.),
//  new TriangleClip(p5.x, p5.y, this.rad, img, 'pink', -Math.PI/2.),

//  new TriangleClip(q1.x, q1.y, this.rad, img, 'black', Math.PI/2.),
//  new TriangleClip(q2.x, q2.y, this.rad, img, 'red', -Math.PI/2.),
//  new TriangleClip(q3.x, q3.y, this.rad, img, 'magenta', Math.PI/2.),
//  new TriangleClip(q4.x, q4.y, this.rad, img, 'red', -Math.PI/2.),
//  new TriangleClip(q5.x, q5.y, this.rad, img, 'pink', Math.PI/2.),

//  new TriangleClip(r2.x, r2.y, this.rad, img, 'yellow', Math.PI/2.),
//  new TriangleClip(s2.x, s2.y, this.rad, img, 'blue', -Math.PI/2.),
  ];
}

TriangleClipGrid.prototype.draw = function (ctx) {
  var self = this;
  ctx.save();
    self.grid.forEach(function (tri, i) {
      tri.draw(ctx);
    });
  ctx.restore();
}
