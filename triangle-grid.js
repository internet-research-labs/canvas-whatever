function rgba (r, g, b, a) {
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

function randomRGB() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var a = 1;
  return rgba(r, g, b, a);
}
function Tri(x, y, rad, color, theta, up) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.color = color;
  this.theta = theta;
  this.up = up;
}

Tri.prototype.draw = function (ctx) {
  var sig = this.up ? -1 : +1;
  var t = this.theta;

  ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.color;

    ctx.moveTo(
      Math.round(this.x + this.rad * Math.cos(t)),
      Math.round(this.y + this.rad * Math.sin(t))
    );

    for (var i=1; i < 3; i++) {
      var theta = i * 2 * Math.PI / 3;
      var u = this.x + sig * this.rad * Math.cos(theta + t);
      var v = this.y + sig * this.rad * Math.sin(theta + t);
      u = Math.round(u);
      v = Math.round(v);
      ctx.lineTo(u, v);
    }

    ctx.closePath();
    ctx.fill();

    var d = 1.73/2. * this.rad;
//  var w = 1.73*this.rad;
//  var h = 1.5*this.rad;
//  var x = this.x - w/2.;
//  var y = this.y - this.rad;
//  ctx.beginPath();
//  ctx.strokeStyle = 'black';
//  ctx.rect(x, y, w, h);
//  ctx.stroke();

//  ctx.beginPath();
//  ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
//  ctx.stroke();
  ctx.restore();
}

function TriGrid(x, y, rad, size, color, theta) {
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

TriGrid.prototype.get = function (i, j) {

  var row = Math.floor(i / 2);

  var x = j * this.dx;
  var y = (4*i-2*row) * this.dy;

  if (i % 2 == 0 && j % 2 == 0) {
    y += this.dy;
  } else if (j % 2 == 0) {
    y -= this.dy;
  }

  return {'x': x, 'y': y};
};

TriGrid.prototype.setup = function () {
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

TriGrid.prototype.draw = function (ctx) {
  var self = this;
  ctx.save();
    self.grid.forEach(function (tri, i) {
      tri.draw(ctx);
    });
  ctx.restore();
}

function CircleApp(id) {
  this.id = id;
}

CircleApp.prototype.setup = function () {
  this.el = document.getElementById(this.id);
  this.width = this.el.width;
  this.height = this.el.height;
  this.ctx = this.el.getContext('2d');
  this.grid = new TriGrid(4, 4, 60, 60, 'red');
  this.setupDots();
};

CircleApp.prototype.setupDots = function () {
  var x = Math.floor(this.width * Math.random());
  var y = Math.floor(this.width * Math.random());
  var size = 10;

  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var a = 1;
  var rgb = rgba(r, g, b, a);
};

CircleApp.prototype.update = function () {
};

CircleApp.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  ctx.save();
    ctx.globalCompositeOperation = 'darken';
    this.grid.draw(ctx);
  ctx.restore();
};

CircleApp.prototype.clear = function () {
  var ctx = this.ctx;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, this.width, this.height);
};

~function () {
  function makeAndRender(id) {
    var a = new CircleApp(id);
    a.setup();
    a.update();
    a.draw();
  }

  var ids = [
    'triangles-1',
  ];

  function refresh() {
    ids.forEach(function (val) {
      makeAndRender(val);
    });
  }

  var i = 0;
  ~function loop () {
    refresh();
    i++;
    setTimeout(loop, 10000);
  }();
}();
