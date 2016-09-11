function Dot(x, y, rad, color) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.col = color;
}

Dot.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.fillStyle = this.col;
  ctx.lineWidth = "1";
  ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
  ctx.fill();
}

function Grid(x, y, rad, size, color, theta) {
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

Grid.prototype.setup = function () {
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
      self.dots[i][j] = new Dot(x, y, self.rad, this.col);
    }
  }
}

Grid.prototype.draw = function (ctx) {
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

  this.grid1 = new Grid(x, y, size, 29, 'rgba(255, 0, 0, 1)', 0);
  this.grid2 = new Grid(x, y, size, 29, 'rgba(0, 200, 255, 1)', theta2);
};

CircleApp.prototype.update = function () {
};

CircleApp.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  ctx.save();
    ctx.globalCompositeOperation = 'darken';
    this.grid1.draw(ctx);
    this.grid2.draw(ctx);
  ctx.restore();
};

CircleApp.prototype.clear = function () {
  var ctx = this.ctx;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, this.width, this.height);
};
