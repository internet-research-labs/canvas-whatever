/**
 * Construct a Triangle Clip Object
 */
function TriangleClip(x, y, rad, image, color, theta) {
  this.x = x;
  this.y = y;
  this.rad = rad;
  this.color = color;
  this.image =image;
  this.theta = theta;
}

TriangleClip.prototype.getPointList = function () {
  var t = this.theta;
  var points = [];

    for (var i=0; i < 3; i++) {
      var t = i * 2 * Math.PI / 3;
      var u = this.x + this.rad * Math.cos(t + t);
      var v = this.y + this.rad * Math.sin(t + t);
      u = Math.round(u);
      v = Math.round(v);
      // ctx.lineTo(u, v);

      points.push({
        'x': Math.round(this.x + this.rad * Math.cos(t)),
        'y': Math.round(this.y + this.rad * Math.sin(t)),
      });
    }
  return points;
};

/**
 * Return an xy-coord bounding box
 */
TriangleClip.prototype.getBoundingBox = function () {
  console.log(this.getPointList());
  return {
    'x': this.x - this.rad,
    'y': this.y - this.rad,
    'w': 2*this.rad,
    'h': 2*this.rad,
  };
};

/**
 * Retrun the dimensions of a random slice for size w, h
 */
TriangleClip.prototype.getRandomImageSlice = function (w, h) {
  return {
    'sx': Math.floor((this.image.width - w) * Math.random()),
    'sy': Math.floor((this.image.height - h) * Math.random()),
    'sw': w,
    'sh': h,
  };
};

/**
 * Render a triangle onto a context
 * @param ctx ...
 */
TriangleClip.prototype.draw = function (ctx) {
  var sig = this.up ? -1 : +1;
  var t = this.theta;

  ctx.save();

    // ctx.fillStyle = this.color;
    // ctx.strokeStyle = this.color;
    // ctx.lineWidth = 0.90;
    ctx.beginPath();

    var points = this.getPointList();

    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.lineTo(points[2].x, points[2].y);

    ctx.closePath();
    // ctx.clip();
    // ctx.rect(0, 0, 1000, 1000);
    // ctx.fill();
    // ctx.stroke();
    // ctx.fill();

    var size = 2*this.rad;
    var box = this.getRandomImageSlice(size, size);

    console.log(box);

//  ctx.drawImage(
//    this.image,
//    box.sx, box.sy,
//    box.sw, box.sh,
//    img_u,
//    img_v,
//    img_w,
//    img_h,
//  );
    ctx.fill();

  ctx.restore();
  ctx.save();

    var tri_box = this.getBoundingBox();

    ctx.strokeStyle = 'red';
    ctx.rect(
      tri_box.x,
      tri_box.y,
      tri_box.w,
      tri_box.h
    );
    ctx.stroke();
  ctx.restore();
}
