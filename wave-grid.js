function random(x, y) {
  return Math.random() * (y-x) + x
}

function Piece(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = color;
  this.image = new Image();
  this.image.src= 'img/wave-3.jpg';
  this.box = this.randomSlice(100, 100);
}

Piece.prototype.randomSlice = function (w, h) {
  var sx = Math.floor(random(0, this.image.width - w));
  var sy = Math.floor(random(0, this.image.height - h));
  return {
    'sx': sx,
    'sy': sy,
    'sw': w,
    'sh': h,
  };
}

Piece.prototype.draw = function (ctx) {
  var box = this.box;

  ctx.save();
  ctx.drawImage(
    this.image,
    box.sx, box.sy,
    box.sw, box.sh,
    this.x, this.y,
    this.w, this.h
  );
    ctx.globalCompositeOperation = 'lighten';

    ctx.fillStyle = this.col;
    ctx.rect(
      this.x, this.y,
      this.w, this.h
    );
    ctx.fill();
  ctx.restore();
}

function Grid (el, x, y, col) {
  this.width = el.width;
  this.height = el.height;
  this.x = x;
  this.y = y;
  this.grid = null;
  this.col = col;
  this.setupGrid();
}

Grid.prototype.setupGrid = function () {
  var self = this;
  this.grid = new Array(this.x);
  for (var j=0; j < this.x; j++) {
    this.grid[j] = new Array(this.y);
  }

  var w = this.width/this.x;
  var h = this.height/this.y;

  for (var x=0; x < this.x; x++) {
    for (var y=0; y < this.y; y++) {
      self.grid[x][y] = new Piece(
        x * w, y * h, 
        w, h,
        self.col
      );
    }
  }
};

Grid.prototype.draw = function (ctx) {
  this.grid.forEach(function (row, x) {
    row.forEach(function (val, y) {
      val.draw(ctx);
    });
  });
};

function WaveApp(id) {
  this.id = id;
}

WaveApp.prototype.setup = function () {
  this.el = document.getElementById(this.id);
  this.width = this.el.width;
  this.height = this.el.height;
  this.ctx = this.el.getContext('2d');
  this.grid3 = new Grid(this.el, 6, 6, 'red');
  this.grid4 = new Grid(this.el, 6, 6, 'blue');
};

WaveApp.prototype.update = function () {
};

WaveApp.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  ctx.save();
    ctx.globalCompositeOperation = 'darken';
    this.grid3.draw(ctx);
    this.grid4.draw(ctx);
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
