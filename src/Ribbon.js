import * as THREE from 'THREE';
import {cross, normalize, add, scale, sub} from './math3.js';

export default class Rib {

  /**
   * Construct a ribbon
   */
  constructor(params) {
    this.params = params;
    this.pieces = [];
    this.slopes = [];
    this.normals = [];
  }

  init(p) {
    this.pieces.push(p.slice());
    return this;
  }

  /**
   * Add position and normal
   */
  addPoint(p, n) {
    let last = this.pieces[this.pieces.length-1];
    let slope = sub(p, last);

    this.pieces.push(p.slice());
    this.slopes.push(slope);
    this.normals.push(n.slice());

    return this;
  }

  toVector3([x, y, z]) {
    return new THREE.Vector3(x, y, z);
  }

  /**
   * Return a mesh
   */
  build() {
    let g = new THREE.Geometry();

    for (let i=0; i < this.pieces.length-1; i++) {
      // Get bounding points
      let p0 = this.pieces[i];
      let p1 = this.pieces[i+1];

      let d = normalize(sub(p1, p0));
      let n = normalize(this.normals[i]);
      let c = scale(normalize(cross(d, n)), 0.25);

      g.vertices.push(this.toVector3(add(p0, scale(c, 1))));
      g.vertices.push(this.toVector3(add(p0, scale(c, -1))));
      g.vertices.push(this.toVector3(add(p1, scale(c, 1))));
      g.vertices.push(this.toVector3(add(p1, scale(c, -1))));

      g.faces.push(new THREE.Face3(4*i, 4*i+1, 4*i+2));
      g.faces.push(new THREE.Face3(4*i+1, 4*i+2, 4*i+3));
    }
    return g;
  }
}
