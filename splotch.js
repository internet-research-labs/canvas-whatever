function Splotch(x, y, size) {
  this.x = x;
  this.y = y;
  this.r = size;
  this.dots = [];
  this.addEdge();
  this.addEdge();
  this.addEdge();
  this.addEdge();
}

Splotch.prototype.addEdge = function () {
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

Splotch.prototype.update = function () {
};

Splotch.prototype.draw = function (ctx, callback) {
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
};

Splotch.prototype.nudged = function (dx, dy, dr) {
  return new Splotch(this.x + dx, this.y + dy, this.r + dr);
}

function App6(id) {
  this.id = id;
}

App6.prototype.setup = function () {
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
App6.prototype.update = function () {
};

App6.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  this.splotches.forEach(function (s) {
    s.draw(ctx);
  });
};

App6.prototype.clear = function () {
  var ctx = this.ctx;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, this.width, this.height);
};

function makeAndRender6(id) {
  var a = new App6(id);
  a.setup();
  a.update();
  a.draw();
}

~function () {
  var ids = [
    'blob-1',
    'blob-2',
    'blob-3',
    'blob-4',
  ];

  function refresh() {
    ids.forEach(function (val) {
      makeAndRender6(val);
    });
  }

  refresh();
}();
