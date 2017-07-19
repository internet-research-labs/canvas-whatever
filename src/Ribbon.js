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
    this.directionals = [];
  }

  init(p) {
    // this.pieces.push(p.slice());
    return this;
  }

  /**
   * Add position and normal
   */
  addPoint(p, c) {
    this.pieces.push(p.slice());
    // this.slopes.push(slope);
    this.directionals.push(c.slice());

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

    for (let i=0; i < this.pieces.length; i++) {

      // Get bounding points
      let p0 = this.pieces[i];
      // let p1 = this.pieces[i+1];

      // let d = normalize(sub(p1, p0));
      // let n = normalize(this.di[i]);
      // let c = scale(normalize(cross(d, n)), 0.25);
      let c = this.directionals[i];
      c = scale(normalize(c), 0.25);

      g.vertices.push(this.toVector3(add(p0, scale(c, 1))));
      g.vertices.push(this.toVector3(add(p0, scale(c, -1))));
    }

    for (let i=0; 2*i+3 < g.vertices.length; i+=1) {
      g.faces.push(new THREE.Face3(2*i, 2*i+1, 2*i+2));
      g.faces.push(new THREE.Face3(2*i+1, 2*i+2, 2*i+3));
    }

    return g;
  }
}
