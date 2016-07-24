function Lap(x, y, rad) {
  this.x = x;
  this.y = y;
  this.rad = rad;
}

Lap.prototype.randomEdge = function () {
  var randomAngle = Math.random() * 2 * Math.PI;
  return [
    this.x + this.rad * Math.cos(randomAngle),
    this.y + this.rad * Math.sin(randomAngle),
  ];
};

Lap.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.lineWidth = "1";
  ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
  ctx.stroke();
}

function App2(id) {
  this.id = id;
}

App2.prototype.addOverlap = function () {
  if (!this.overlaps) {
    this.overlaps = [new Lap(150, 150, 30)];
    return;
  }

  var newPos = this.overlaps.slice(-1)[0].randomEdge();
  var rad = 10 + Math.random() * 10;

  this.overlaps.push(new Lap(newPos[0], newPos[1], rad));
};

App2.prototype.setup = function () {
  this.el = document.getElementById(this.id);
  this.width = this.el.width;
  this.height = this.el.height;
  this.ctx = this.el.getContext('2d');

  for (var i=0; i<4000; i++) {
    this.addOverlap();
  }
};

App2.prototype.update = function () {
};

App2.prototype.draw = function () {
  var ctx = this.ctx;
  this.clear();
  this.overlaps.forEach(function (val) {
    val.draw(ctx);
  });
};

App2.prototype.clear = function () {
  var ctx = this.ctx;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, this.width, this.height);
};

function makeAndRender(id) {
  var a = new App2(id);
  a.setup();
  a.update();
  a.draw();
}

~function () {
  makeAndRender('circles-1');
  makeAndRender('circles-2');
  makeAndRender('circles-3');
  makeAndRender('circles-4');
  makeAndRender('circles-5');
  makeAndRender('circles-6');
  makeAndRender('circles-7');
  makeAndRender('circles-8');
}();
