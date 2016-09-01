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
    var theta = i * 2 * Math.PI / 3;

    var u = this.x + this.rad * Math.cos(t + theta);
    var v = this.y + this.rad * Math.sin(t + theta);

    u = Math.round(u);
    v = Math.round(v);

    points.push({
      'x': u,
      'y': v,
    });
  }

  return points;
};

/**
 * Return an xy-coord bounding box
 */
TriangleClip.prototype.getBoundingBox = function () {
  var points = this.getPointList();
  var x = {'min': +Infinity, 'max': -Infinity};
  var y = {'min': +Infinity, 'max': -Infinity};

  // Naive
  points.forEach(function (val) {
    x.min = Math.min(x.min, val.x);
    x.max = Math.max(x.max, val.x);
    y.min = Math.min(y.min, val.y);
    y.max = Math.max(y.max, val.y);
  });

  return {
    'x': x.min,
    'y': y.min,
    'w': x.max-x.min,
    'h': y.max-y.min,
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

    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 0.90;
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


    // ctx.fill();


  // Draw bounding box
  // ctx.save();
    var size = 2*this.rad;
    var box = this.getRandomImageSlice(size, size);
    var tri_box = this.getBoundingBox();

    // ctx.beginPath();
    ctx.clip();
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
    ctx.drawImage(
      this.image,
      box.sx,
      box.sy,
      box.sw,
      box.sh,
      tri_box.x,
      tri_box.y,
      tri_box.w,
      tri_box.h
    );
    // ctx.stroke();
  ctx.restore();
}
