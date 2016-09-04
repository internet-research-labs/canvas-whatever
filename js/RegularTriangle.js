/**
 * Abstraction for a regular triangle
 */
function RegularTriangle (x, y, size, theta) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.theta = theta || 0;
}

/**
 * Return the center point
 */
RegularTriangle.prototype.getCenter = function () {
  return {
    'x': this.x,
    'y': this.y,
  };
};

/**
 * Return a list of points used to draw, etc. this triangle
 */
RegularTriangle.prototype.getPointList = function () {
  var t = this.theta;
  var rad = this.size;
  var points = [];

  for (var i=0; i < 3; i++) {
    var theta = i * 2 * Math.PI / 3;
    console.log(theta);

    var u = this.x + rad * Math.cos(t + theta);
    var v = this.y + rad * Math.sin(t + theta);

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
RegularTriangle.prototype.getBoundingBox = function () {
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

