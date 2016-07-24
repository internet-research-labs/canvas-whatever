function App() {
}

App.prototype.setup = function () {
  this.id = 'ok';
  this.el = document.getElementById(this.id);
  this.width = this.el.width;
  this.height = this.el.height;
  this.ctx = this.el.getContext('2d');
};

App.prototype.update = function () {
};

App.prototype.drawArrow = function (x, y) {
  var ctx = this.ctx;
  ctx.strokeStyle = 'red';
  // ctx.beginPath();
  ctx.lineWidth = '4';
  ctx.moveTo(x-16, y-16);
  ctx.lineTo(x, y);
  ctx.lineTo(x+16, y-16);
  ctx.stroke();
  // ctx.closePath();
};

App.prototype.coverWithArrows = function () {

  for (var i=0; i < 13; i++) {
    for (var j=0; j < 13; j++) {
      this.drawArrow(i * 30, j * 30);
    }
  }
};

App.prototype.draw = function () {
  var ctx = this.ctx;

  // ctx.beginPath();
  // ctx.lineWidth="10";
  // ctx.strokeStyle="blue";
  // ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 300, 300);

  this.coverWithArrows();

};

~function () {
  var app = new App();

  console.log('APP: setup');
  app.setup();

  console.log('APP: update');
  app.update();

  console.log('APP: draw');
  app.draw();
}();
