function Line(top, bottom, width, mid) {
  this.bot = bottom;
  this.top = top;
  this.width = width;
  this.mid = mid;
}

function sCurveTo(ctx, x0, y0, x1, y1) {
  x_mid = x0+Math.floor((x1-x0)/2);
  y_mid = y0+Math.floor((y1-y0)/2);
  ctx.bezierCurveTo(
    x_mid, y0,
    x_mid, y1,
    x1, y1);
}

Line.prototype.drawDip = function (ctx, w) {
  var mid = this.mid;
  var m = mid;
  var d = Math.floor(this.width/2);
  ctx.moveTo(m-d, this.top);
  sCurveTo(ctx, m-d, this.top, m, this.bot);
  sCurveTo(ctx, m, this.bot, m+d, this.top);
  // ctx.lineTo(m-d, this.top);
};

Line.prototype.drawShape = function (ctx, w) {
  var mid = this.mid;
  var m = mid;
  var d = Math.floor(this.width/2);

};

Line.prototype.draw = function (ctx, w) {
  var mid = this.mid;
  var m = mid;
  var d = Math.floor(this.width/2);

  ctx.save();
    ctx.beginPath();
    this.drawDip(ctx, w);
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = '2.5';
    ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.closePath();

  ctx.save();
    ctx.moveTo(0, this.top);
    ctx.lineTo(m-d, this.top);

    ctx.moveTo(m+d, this.top);
    ctx.lineTo(w, this.top);

    this.drawDip(ctx, w);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = '4.5';
    ctx.stroke();
  ctx.restore();


};

function App4(id) {
  this.id = id;
  this.el = document.getElementById(this.id);
  this.width = this.el.width;
  this.height = this.el.height;
  this.ctx = this.el.getContext('2d');
  this.lines = [];
}

function random_between(low, high) {
  return (high-low)*Math.random() + low;
}

App4.prototype.setup = function () {
  for (var i=0; i < 5; i++) {
    this.lines.unshift(new Line(
      300+40*i,
      500+80*i+20*Math.random(),
      40+30+40*i + random_between(-30, 80),
      450 + random_between(-100, 100)
    ));
  }
  
};

App4.prototype.update = function () {
};

App4.prototype.draw = function () {
  this.clear();
  var ctx = this.ctx;
  var width = this.width;
  ctx.imageSmoothingEnabled = true;
  this.lines.forEach(function (val) {
    val.draw(ctx, width);
  });
};

App4.prototype.clear = function () {
  var ctx = this.ctx;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, this.width, this.height);
};

~function () {

  function makeAndRender3(id) {
    var a = new App4(id);
    a.setup();
    a.update();
    a.draw();
  }
  var ids = [
    'lines-1',
    'lines-2',
    'lines-3',
  ];

  function whatever() {
    ids.forEach(function (val) {
      makeAndRender3(val);
    });
  }

  whatever();

  function rand(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
  }

  ~function loop() {
    makeAndRender3(rand(ids));
    setTimeout(loop, 9000);
  }();
}();
