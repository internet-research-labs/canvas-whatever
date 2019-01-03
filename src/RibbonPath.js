import {add, normalize, scale, sub} from '@pool-water/math';

export default class RibbonPath {
  constructor(center, direction) {

    this.center = [0, 0, 0];
    this.direction = normalize([1, 1, 0]);
    this.position = [0, 0, 0];

    this.width = 1; 

    this.vertices = [];
    this.faces = [];

    this.points = [];
    this.slopes = [];
    // this.disturbVertices();
  }

  computePoints() {
    let points = [];
    let slopes = [];
    let h = 0.003;

    let theta = 0;
    let delta = Math.PI/90;

    let distance = 1;
    let [x, y, z] = scale(normalize([4, 0, 0]), distance);
    let [x0, y0, z0] = [0, 0, 0];
    let [dx, dy, dz] = this.direction.slice();

    let f = function(t) {
      return [distance*Math.cos(t), distance*Math.sin(t)];
    }

    // Push initial
    points.push([x, y, z]);
    slopes.push([dx, dy, dz]);

    for (let i=1; i < 230; i++) {

      let p0 = f(theta);
      let p1 = f(theta+delta);

      [x0, y0, z0] = [x, y, z];

      // Update step
      x = x + dx;
      y = y + dy;
      z = z + dz;

      [x, y, z] = scale(normalize([x, y, z]), distance);

      let randomness = scale(normalize([Math.random(), Math.random(), Math.random()]), 0.05);
      [dx, dy, dz] = sub([x, y, z], [x0, y0, z0]);
      [dx, dy, dz] = scale(normalize(sub([dx, dy, dz], randomness)), 0.3);

      // Push
      points.push([x, y, z]);
      slopes.push([dx, dy, dz]);

      // Move
      theta += delta;
      // distance = 2 + Math.cos(0.5*theta);
      distance += 0.015;
    }

    this.points = points;
    this.slopes = slopes;
  }

  disturbVertices() {
    this.vertices.forEach(function (v) {
      let s = 0.1;
      v[0] += s*(Math.random() - 0.5);
      v[1] += s*(Math.random() - 0.5);
      v[2] += s*(Math.random() - 0.5);
      v[3] += s*(Math.random() - 0.5);
    });
  }
}
