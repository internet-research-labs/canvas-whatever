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

  this.circles = new Array(NUM_CIRCLES_Y);

  for (var i=0; i < this.circles.length; i++) {
    this.circles[i] = new Array(NUM_CIRCLES_X);
  }

  for (var i=0; i < this.circles.length; i++) {
    var row = this.circles[i];
    for (var j=0; j < row.length; j++) {
      var x = i * 90;
      var y = j * 90;
      var rad = 30;
      this.circles[i][j] = new Dot(x, y, rad, 'red');
    }
  }
};

CircleApp.prototype.update = function () {
};

CircleApp.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  for (var i=0; i<this.dots_x; i++) {
    for (var j=0; j<this.dots_y; j++) {
      this.circles[i][j].draw(ctx);
    }
  }
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
