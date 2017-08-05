import {add, cross, sub, normalize, scale} from '../math3.js';

let DEBUG = true;

export default class Grass {
  constructor() {
    this.up = [0, 1, 0];
    this.side = [1, 1, 0];

    this.segments = [];

    let NUM_SEGMENTS = 3;

    for (let i=0; i < NUM_SEGMENTS; i++) {
      this.segments.push({
        'normal': [],
      });
    }
  }

  getGeo() {
    let c = cross(this.up, this.side);
    console.log(c);


    let NUM_SEGMENTS = 3;

    let geo = new THREE.Geometry();

    for (let i=0; i <= NUM_SEGMENTS; i++) {
      let [x, y, z] = [0, i, 0];
      geo.vertices.push(new THREE.Vector3(x-0.2, y, z));
      geo.vertices.push(new THREE.Vector3(x+0.2, y, z));
    }

    for (let i=0; i < NUM_SEGMENTS; i++) {
      let n = new THREE.Vector3(0, 1, 0);
      geo.faces.push(new THREE.Face3(2*i+0, 2*i+1, 2*i+2, n));
      geo.faces.push(new THREE.Face3(2*i+3, 2*i+2, 2*i+1, n));
    }

    return geo;
  }
}
