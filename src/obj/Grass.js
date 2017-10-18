import {add, cross, sub, normalize, scale} from '../math3.js';

let DEBUG = true;

function magnitude(vec, s) {
  return scale(normalize(vec), s);
}

function vec([x, y, z]) {
  return new THREE.Vector3(x, y, z);
}

export default class Grass {
  constructor(x, y, z) {
    this.up = [0, 1, 0];
    this.root = [x, y, z];

    this.segments = [];

    this.NUM_SEGMENTS = 20;
    this.LENGTH_SEGMENT = 0.5;
    this.HEIGHT_SEGMENT = 0.08;
    this.WIDTH_SEGMENT = 0.1;

    let d = Math.PI/4./20.;

    // Add segments and give it a slight bend
    for (let i=0; i <= this.NUM_SEGMENTS; i++) {
      let theta = d*i;
      let [a, b] = [Math.cos(theta), Math.sin(theta)];
      this.segments.push({
        'delta': magnitude([0, a, b], this.HEIGHT_SEGMENT),
        'normal': normalize([a, b, 0]),
      });
    }
  }

  /**
   * Return
   */
  getGeo() {
    let geo = new THREE.Geometry();

    let [x, y, z] = this.root;

    for (let i=0; i <= this.NUM_SEGMENTS; i++) {
      let [dx, dy, dz] = this.segments[i].delta;

      geo.vertices.push(vec([x+0.1, y, z]));
      geo.vertices.push(vec([x-0.1, y, z]));

      x += dx;
      y += dy;
      z += dz;
    }

    for (let i=0; i < this.NUM_SEGMENTS; i++) {
      let n = vec(this.segments[i].normal);
      geo.faces.push(new THREE.Face3(2*i+0, 2*i+1, 2*i+2, n));
      geo.faces.push(new THREE.Face3(2*i+3, 2*i+2, 2*i+1, n));
    }


    return geo;
  }

  getGeo2() {
    let geo = new THREE.Geometry();
    let [x, y, z] = this.root;
    let [dx, dy, dz] = this.up;

    for (let i=0; i < this.NUM_SEGMENTS; i++) {
      let n = this.segments[i].normal;
      let cl = scale(normalize(cross([dx, dy, dz], n)), this.WIDTH_SEGMENT);
      let cr = scale(normalize(cross([dx, dy, dz], n)), -this.WIDTH_SEGMENT);

      geo.vertices.push(vec(add(cl, [x, y, z])));
      geo.vertices.push(vec(add(cr, [x, y, z])));

      let old_vec = [x, y, z];
      [x, y, z] = add([x, y, z], magnitude([dx, dy, dz], this.HEIGHT_SEGMENT));
      dx = x-old_vec[0];
      dy = y-old_vec[1];
      dz = z-old_vec[2];
    }

    for (let i=0; i < this.NUM_SEGMENTS-1; i++) {
      console.log("...");
      let n = vec(this.segments[0].normal);
      geo.faces.push(new THREE.Face3(2*i+0, 2*i+1, 2*i+2, n));
      geo.faces.push(new THREE.Face3(2*i+3, 2*i+2, 2*i+1, n));
    }

    return geo;
  }
}
