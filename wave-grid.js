function random(x, y) {
  return Math.rand() * (y-x) + x
}

function Piece(x, y, rad, color) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.col = color;
  this.image = new Image();
  this.image.src= 'img/wave-3.jpg';
}

Piece.prototype.randomSlice = function (w, h) {
  var sx = Math.floor(random(0, this.width - w));
  var sy = Math.floor(random(0, this.width - h));
  return {
    'sx': sx,
    'sy': sy,
    'sw': w,
    'sh': h,
  };
}

Piece.prototype.draw = function (ctx) {
  ctx.save();
    ctx.drawImage(this.image, 0, 0);
  ctx.restore();
}

function WaveApp(id) {
  this.id = id;
}

WaveApp.prototype.setup = function () {
  this.el = document.getElementById(this.id);
  this.width = this.el.width;
  this.height = this.el.height;
  this.ctx = this.el.getContext('2d');
  this.grid1 = new Piece(100, 100, 100, 'red');
  this.grid2 = new Piece(500, 500, 100, 'blue');
};

WaveApp.prototype.update = function () {
};

WaveApp.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  ctx.save();
    ctx.globalCompositeOperation = 'darken';
    this.grid1.draw(ctx);
    this.grid2.draw(ctx);
  ctx.restore();
};

WaveApp.prototype.clear = function () {
  var ctx = this.ctx;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, this.width, this.height);
};

~function () {
  function makeAndRender(id) {
    var a = new WaveApp(id);
    a.setup();
    a.update();
    a.draw();
  }

  var ids = [
    'wave-1',
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
    setTimeout(loop, 1000);
  }();
}();
