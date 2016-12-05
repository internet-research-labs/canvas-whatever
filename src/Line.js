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
