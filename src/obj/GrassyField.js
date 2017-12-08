import Grass from '../obj/Grass.js';
import {add, cross, sub, normalize, scale} from '../math3.js';

function magnitude(vec, s) {
  return scale(normalize(vec), s);
}

function extend(xs, ys) {
  ys.forEach((y) => {
    xs.push(y);
  });
}


export class GrassyField {
  constructor(width, height, count, variations) {
    this.width = width;
    this.height = height;
    this.density = 1.0;
    this.count = count || 100;
    this.variations = variations || 20;
    this.blades = [];

    this.vertices = [];
    this.normals = [];

    for (let i=0; i < count; i++) {
      let x = width*(Math.random()-0.5);
      let z = height*(Math.random()-0.5);
      this.addBlade(
        x,
        0,
        z,
        0.05*Math.random()-0.05,
        0,
      );
    }
  }

  bufferTriangle(p, q, r) {
    let vertices = [];
    let normals = [];
  }

  /**
   * Return geometry matrix for a blade of grass
   */
  blade(x, y, z, theta, rot) {
    // Params
    let NUM_SEGMENTS = 20;
    let SEGMENT_LENGTH = 0.5;
    let HEIGHT_SEGMENT = 0.08+0.005*Math.random();
    let WIDTH_SEGMENT = 0.0;

    // Build segments
    let segments = []
    let vertices = [];

    for (let i=0; i <= NUM_SEGMENTS; i++) {
      let t = theta*i;
      let [a, b] = [Math.cos(t), Math.sin(t)];
      segments.push({
        'delta': magnitude([0, a, b], HEIGHT_SEGMENT),
        'normal': normalize([a, b, 0]),
      });
    }

    for (let i=0; i <= NUM_SEGMENTS; i++) {
      let [dx, dy, dz] = segments[i].delta;
      let s = (NUM_SEGMENTS-i+1)/NUM_SEGMENTS;

      let a = [x+0.13*s, y, z];
      let b = [x-0.13*s, y, z];
      let c = [x+dx+0.13*s, y+dy, z+dz];
      let d = [x+dx-0.13*s, y+dy, z+dz];
 
      // Face 1
      extend(this.vertices, a);
      extend(this.vertices, b);
      extend(this.vertices, c);

      // Face 2
      extend(this.vertices, d);
      extend(this.vertices, c);
      extend(this.vertices, b);

      // Normals
      let n = segments[i].normal;
      extend(this.normals, n);
      extend(this.normals, n);
      extend(this.normals, n);
      extend(this.normals, n);
      extend(this.normals, n);
      extend(this.normals, n);

      x += dx;
      y += dy;
      z += dz;
    }
  }

  /**
   * Add a blade of grass to the field
   */
  addBlade(x, y, z, theta, rot) {
    let geo = this.blade(x, y, z, theta, rot);
  }

  geometry() {
    this.geo = new THREE.BufferGeometry();
    let v = Float32Array.from(this.vertices);
    this.geo.addAttribute('position', new THREE.BufferAttribute(v, 3));

    let n = Float32Array.from(this.normals);
    this.geo.addAttribute('normal', new THREE.BufferAttribute(n, 3));
    return this.geo;
  }
}
