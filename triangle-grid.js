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
function Tri(x, y, rad, color, theta) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.color = color;
  this.theta = theta;
}

Tri.prototype.draw = function (ctx) {
  ctx.save();
    ctx.beginPath();
    ctx.fillStyle = randomRGB();

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
    ctx.fill();
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
  this.setup();
  // this.center_dot = new Dot(this.x, this.y, this.rad, 'white');
}



TriGrid.prototype.setup = function () {
  var self = this;
  var rows_x = 2*this.size+1;
  var rows_y = 2*this.size+1;

  self.dots = new Array(rows_y);

  for (var i=0; i < self.dots.length; i++) {
    self.dots[i] = new Array(rows_x);
  }

  var center = [this.x, this.y];

  for (var i=0; i < self.dots.length; i++) {
    var row = self.dots[i];
    for (var j=0; j < row.length; j++) {

      var u = i - this.size;
      var v = j - this.size;
      var dxy = 2*this.rad+10;

      if (j % 2 == 1) {
        u += 0.5;
      }

      var x = u*dxy;
      var y = v*dxy;
      var t = this.theta;

      x = x*Math.cos(t) - y*Math.sin(t);
      y = x*Math.sin(t) + y*Math.cos(t);

      x += this.x;
      y += this.y;
      self.dots[i][j] = new Tri(x, y, self.rad, this.col);
    }
  }
}

TriGrid.prototype.draw = function (ctx) {
  var self = this;
  ctx.save();
    self.dots.forEach(function (row, i) {
      row.forEach(function (dot, j) {
        dot.draw(ctx);
      });
    });
    // self.center_dot.draw(ctx);
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
  this.setupDots();
};

CircleApp.prototype.setupDots = function () {
  var x = Math.floor(this.width * Math.random());
  var y = Math.floor(this.width * Math.random());
  var size = Math.floor(15+30 * Math.random());
  var theta2 = Math.random() * Math.PI/20 - Math.PI/20;

  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var a = 1;
  var rgb = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

  this.grid1 = new TriGrid(x, y, size, 29, rgb, 0);
  //Trithis.grid2 = new TriGrid(x, y, size, 29, 'rgba(0, 200, 255, 1)', theta2);
};

CircleApp.prototype.update = function () {
};

CircleApp.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  ctx.save();
    ctx.globalCompositeOperation = 'darken';
    this.grid1.draw(ctx);
    // this.grid2.draw(ctx);
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
    'triangle-grid-1',
    'triangle-grid-2',
    'triangle-grid-3',
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
