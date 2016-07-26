function Tri(x, y, rad) {
  this.x = x;
  this.y = y;
  this.rad = rad;
}

Tri.prototype.randomEdge = function () {
  var randomAngle = Math.random() * 2 * Math.PI;
  return [
    this.x + this.rad * Math.cos(randomAngle),
    this.y + this.rad * Math.sin(randomAngle),
  ];
};

Tri.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.strokeStyle = 'cyan';
  ctx.lineWidth = "1";

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
  ctx.stroke();
}

function App3(id) {
  this.id = id;
}

App3.prototype.addOverlap = function () {
  if (!this.overlaps) {
    this.overlaps = [new Tri(150, 150, 30)];
    return;
  }

  var newPos = this.overlaps.slice(-1)[0].randomEdge();
  var rad = 10 + Math.random() * 10;

  this.overlaps.push(new Tri(newPos[0], newPos[1], rad));
};

App3.prototype.setup = function () {
  this.el = document.getElementById(this.id);
  this.width = this.el.width;
  this.height = this.el.height;
  this.ctx = this.el.getContext('2d');

  for (var i=0; i<4000; i++) {
    this.addOverlap();
  }
};

App3.prototype.update = function () {
};

App3.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  this.overlaps.forEach(function (val) {
    val.draw(ctx);
  });
};

App3.prototype.clear = function () {
  var ctx = this.ctx;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, this.width, this.height);
};

~function () {

  function makeAndRender2(id) {
    var a = new App3(id);
    a.setup();
    a.update();
    a.draw();
  }
  var ids = [
    'triangles-1',
    'triangles-2',
    'triangles-3',
  ];

  function whatever() {
    ids.forEach(function (val) {
      makeAndRender2(val);
    });
  }

  whatever();

  function rand(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
  }

  ~function loop() {
    makeAndRender2(rand(ids));
    setTimeout(loop, 2000);
  }();
}();
