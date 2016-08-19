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
  this.x = x;
  this.y = y;
  this.dx = this.rad;
  this.dy = this.rad;
  this.dots = [];
  this.size = size;
  this.rad = rad;
  this.col = color;
  this.setup();
}

Grid.prototype.setup = function () {
  var self = this;
  var rows_x = 2*this.size;
  var rows_y = 2*this.size;

  self.dots = new Array(rows_y);

  for (var i=0; i < self.dots.length; i++) {
    if (i % 2) {
      self.dots[i] = new Array(rows_x-1);
    } else {
      self.dots[i] = new Array(rows_x);
    }
  }

  var center = [this.x, this.y];

  for (var i=0; i < self.dots.length; i++) {
    var row = self.dots[i];
    for (var j=0; j < row.length; j++) {
      var x = this.x;
      var y = this.y;
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
  this.dots_x = 10;
  this.dots_y = 10;
  this.setupDots();
};

CircleApp.prototype.setupDots = function () {
  var NUM_CIRCLES_X = this.dots_x;
  var NUM_CIRCLES_Y = this.dots_y;
  this.grid1 = new Grid(100, 100, 30, 10, 'red', 0);
  this.grid2 = new Grid(30, 30, 30, 10, 'blue', Math.PI/10.);
};

CircleApp.prototype.update = function () {
};

CircleApp.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  this.grid1.draw(ctx);
  this.grid2.draw(ctx);
};

CircleApp.prototype.clear = function () {
  var ctx = this.ctx;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, this.width, this.height);
};

function makeAndRender(id) {
  var a = new CircleApp(id);
  a.setup();
  a.update();
  a.draw();
}

~function () {
  var ids = [
    'circles-1',
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
    setTimeout(loop, 1000 * Math.pow(1.7, i));
  }();
}();
