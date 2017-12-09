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

function translate(xs, [x, y, z]) {
  for (let i=0; i < xs.length; i += 3) {
    xs[i+0] += x;
    xs[i+1] += y;
    xs[i+2] += z;
  }
}


function rotateyMesh(xs, rot) {
  if (xs.length % 3 != 0) {
    throw "whatever";
  }

  for (let i=0; i < xs.length; i += 3) {
    let x = xs[i+0];
    let z = xs[i+2];
    xs[i+0] = x*Math.cos(rot)+z*Math.sin(rot);
    xs[i+2] = -x*Math.sin(rot)+z*Math.cos(rot);
  }
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
      let bend = Math.PI/30*(Math.random());
      let rot = 2*Math.PI*(Math.random()-0.5);

      let [v, n] = this.blade(x, 0, z, bend, rot);

      extend(this.vertices, v);
      extend(this.normals, n);
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
    let [v, n] = this._blade(theta);

    rotateyMesh(v, rot);
    translate(v, [x, y, z]);
    rotateyMesh(n, rot);

    return [v, n];
  }

  _blade(theta) {
    let x = 0;
    let y = 0;
    let z = 0;

    // Params
    let NUM_SEGMENTS = 20;
    let HEIGHT_SEGMENT = (0.08+0.03*Math.random());
    let WIDTH_SEGMENT = 0.10;

    // Build segments
    let segments = []
    let vertices = [];
    let normals = [];

    for (let i=0; i <= NUM_SEGMENTS; i++) {
      let t = theta*i;
      let [x, y, z] = [0, Math.cos(t), Math.sin(t)];
      let [a, b, c] = cross([1, 0, 0], [x, y, z]);
      segments.push({
        'delta': magnitude([x, y, z], HEIGHT_SEGMENT),
        'normal': normalize([a, b, c]),
      });
    }

    for (let i=0; i <= NUM_SEGMENTS; i++) {
      let [dx, dy, dz] = segments[i].delta;
      let s = (NUM_SEGMENTS-i+1)/NUM_SEGMENTS;

      let a = [x+WIDTH_SEGMENT*s, y, z];
      let b = [x-WIDTH_SEGMENT*s, y, z];
      let c = [x+dx+WIDTH_SEGMENT*s, y+dy, z+dz];
      let d = [x+dx-WIDTH_SEGMENT*s, y+dy, z+dz];
 
      // Face 1
      extend(vertices, b);
      extend(vertices, a);
      extend(vertices, c);

      // Face 2
      extend(vertices, b);
      extend(vertices, c);
      extend(vertices, d);

      // Normals
      let n = segments[i].normal;
      extend(normals, n);
      extend(normals, n);
      extend(normals, n);
      extend(normals, n);
      extend(normals, n);
      extend(normals, n);

      x += dx;
      y += dy;
      z += dz;
    }

    return [vertices, normals];
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
