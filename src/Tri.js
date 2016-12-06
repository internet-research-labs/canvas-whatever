export default class Tri {
  constuctor(x, y, rad, color, theta, up) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = color;
    this.theta = theta;
    this.up = up;
  }
}

Tri.prototype.draw = function (ctx) {
  var sig = this.up ? -1 : +1;
  var t = this.theta;

  ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 0.90;

    ctx.moveTo(
      Math.round(this.x + this.rad * Math.cos(t)),
      Math.round(this.y + this.rad * Math.sin(t))
    );

    for (var i=1; i < 3; i++) {
      var theta = i * 2 * Math.PI / 3;
      var u = this.x + sig * this.rad * Math.cos(theta + t);
      var v = this.y + sig * this.rad * Math.sin(theta + t);
      u = Math.round(u);
      v = Math.round(v);
      ctx.lineTo(u, v);
    }

    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    var d = 1.73/2. * this.rad;
//  var w = 1.73*this.rad;
//  var h = 1.5*this.rad;
//  var x = this.x - w/2.;
//  var y = this.y - this.rad;
//  ctx.beginPath();
//  ctx.strokeStyle = 'black';
//  ctx.rect(x, y, w, h);
//  ctx.stroke();

//  ctx.beginPath();
//  ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
//  ctx.stroke();
  ctx.restore();
}
