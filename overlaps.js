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
  ctx.lineWidth = "2";
  ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
  ctx.stroke();
}

function App2() {
}

App2.prototype.addOverlap = function () {
  if (!this.overlaps) {
    this.overlaps = [new Lap(30, 30, 30)];
    return;
  }

  var newPos = this.overlaps.slice(-1)[0].randomEdge();
  var rad = 10 + Math.random() * 10;

  this.overlaps.push(new Lap(newPos[0], newPos[1], rad));
};

App2.prototype.setup = function () {
  this.id = 'ok-2';
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

~function () {
  var app = new App2();

  console.log('APP: setup');
  app.setup();

  console.log('APP: update');
  app.update();

  console.log('APP: draw');
  app.draw();
}();
