import {random, cartesian, longlat} from './utils.js';
import {sub, cross, normalize, scale} from './math3.js';

/**
 *
 */
export class SquareGrid {

  /**
   * Construct a grid
   */
  constructor({width, height}) {
    this.dx = width;
    this.dy = height;
  }

  /**
   * Return a
   */
  get(i, j) {
    return [
      i*this.dx,
      j*this.dy,
    ];
  }

  getBoxCenter(i, j) {
    return [
      (i+0.5)*this.dx,
      (j+0.5)*this.dy,
    ];
  }

  /**
   * Return a
   */
  getBox(i, j) {
    return [
      [i*this.dx, j*this.dy],
      [(i+1)*this.dx, (j+1)*this.dy],
    ];
  }

  [Symbol.iterator]() {
    let i = 0;
    let j = 0;

    let boxes = [];

    for (let i=0; i < 10; i++) {
      for (let j=0; j < 10; j++) {
        boxes.push([i, j, this.getBox(i, j)]);
      }
    }

    return boxes.values();
  }

  getPointList(i, j) {
    return [
      [(i+0)*this.dx, (j+0)*this.dy],
      [(i+1)*this.dx, (j+0)*this.dy],
      [(i+1)*this.dx, (j+1)*this.dy],
      [(i+0)*this.dx, (j+1)*this.dy],
    ];
  }
}


export class FunSurface {
  constructor(f, radius, width, height) {
  }

  build() {
    let geo = new THREE.Geometry();


    let TOTAL = 10;

    for (let i=0; i < TOTAL; i++) {
      let x = random(-3.0, 3.0);
      let y = random(-3.0, 3.0);
      let z = random(-3.0, 3.0);
      geo.vertices.push(new THREE.Vector3(x, y, z));
    }

    for (let i=0; i < TOTAL; i++) {
      let i = Math.floor(Math.random()*TOTAL);
      let j = Math.floor(Math.random()*TOTAL);
      let k = Math.floor(Math.random()*TOTAL);
      geo.faces.push(new THREE.Face3(i, j, k));
    }

    return geo;
  }
}


export class SquareSurface {
  constructor(f, radius, width, height) {
    this.f = f;
    this.grid = new SquareGrid({width: 0.08, height:  0.08});
  }

  build() {
    let self = this;
    let geo = new THREE.Geometry();

    let TOTAL = 200;

    function __v3([x, z]) {
      let y = self.f(x, z);
      return new THREE.Vector3(x, y, z);
    }

    function __add_brick(p, q) {
      geo.vertices.push(
        __v3(p),
        __v3(q),
      );
    }

    for (let i=-TOTAL/2; i <= TOTAL/2; i++) {
      for (let j=-TOTAL/2; j <= TOTAL/2; j++) {
        let k = geo.vertices.length;
        let points = [];
        let [a, b, c, d] = this.grid.getPointList(i, j);
        __add_brick(a, b);
        __add_brick(b, c);
        __add_brick(c, d);
        __add_brick(d, a);
      }
    }

    return geo;
  }
}


export class SphereSurface {
  constructor(f, detail) {
    this.f = f;
    this.detail = detail;
  }

  build(face) {
    let geo = new THREE.Geometry();
    face = face ? true : false;

    function __v3([x, y, z]) {
      return new THREE.Vector3(x, y, z);
    }

    function __add_brick(p, q) {
      geo.vertices.push(
        __v3(p),
        __v3(q),
      );
    }

    let dt = Math.PI/TOTAL;
    let df = 2*Math.PI/TOTAL;

    let F = this.f;

    function __cart(t, f) {
      return cartesian([F(t, f), t, f]);
    }


    let TOTAL = this.detail;

    for (let i=0; i < TOTAL; i++) {
      for (let j=0; j < TOTAL; j++) {

        let z = 4*(TOTAL*i + j);

        // Reduces size of mesh, even though it'll look the same
        if ((i+j)%2) {
          continue;
        }

        let t0 = (i+0.0)/TOTAL*Math.PI;
        let t1 = (i+1.0)/TOTAL*Math.PI;
        let f0 = (j+0.0)/TOTAL*2*Math.PI;
        let f1 = (j+1.0)/TOTAL*2*Math.PI;

        let a = __cart(t0, f0);
        let b = __cart(t1, f0);
        let c = __cart(t1, f1);
        let d = __cart(t0, f1);

        __add_brick(a, b);
        __add_brick(b, c);
        __add_brick(c, d);
        __add_brick(d, a);

        if (face) {
          let f1 = new THREE.Face3(z+0, z+1, z+2);
          let f2 = new THREE.Face3(z+2, z+3, z+0);
          geo.faces.push(f1, f2);
        }
      }
    }

    return geo;
  }
}


/**
 * Return [rad2index, index2rad] functions
 */
export function getMapping(size) {
  let TOTAL = size;

  let index2rad = (c) => {
    let i = Math.floor(c / TOTAL);
    let j = c % TOTAL;
    let t = i/TOTAL*Math.PI;
    let f = j/TOTAL*2*Math.PI;
    return [t, f];
  };

  let rad2index = (t, f) => {
    let i = Math.floor(t / Math.PI * TOTAL)
    let j = Math.floor(f / 2 / Math.PI *TOTAL);
    let c = i*TOTAL + j; 
    return c;
  };

  return [index2rad, rad2index];
}

class PlanetShape{
  constructor(detail) {
    this.detail = detail;
  }

  rad(t, f) {
    return 0;
  }

  index() {
    return 0;
  }
}

export class SphereSurface2 {
  constructor(f, detail) {
    this.f = f;
    this.detail = detail;
  }

  construct() {
    return [
      new THREE.Vector3(0, 0, 0),
    ];
  }

  geo() {

    let TOTAL = this.detail;

    let g = new THREE.BufferGeometry();
    let v = [];
    let n = [];
    let colors = [];
    let indices = [];

    let F = this.f;
    let [index2rad, rad2index] = getMapping(TOTAL);

    /**
     *
     */
    function d() {
      return [
      ];
    }


    let fn = normalFunc(F);

    for (let i=0; i < TOTAL; i++) {
      for (let j=0; j < TOTAL; j++) {

        let t = (j+0.0)/TOTAL*Math.PI;
        let f = (i+0.0)/TOTAL*2*Math.PI;
        v.push(...cartesian([F(t, f), t, f]));
        // n.push(...cartesian([F(t, f), t, f]));
        n.push(...fn(t, f));
      }
    }

    const TT = TOTAL*TOTAL;

    function coord2index(u, v) {
      u %= TOTAL;
      v %= TOTAL;
      return (u*TOTAL+v);
    }

    function __cart(t, f) {
      return cartesian([F(t, f), t, f]);
    }

    function normalFunc(F) {
      let h = 0.1;

      return (t, f) => {

        let a = __cart(t-h, f);
        let b = __cart(t+h, f);

        let c = __cart(t, f-h);
        let d = __cart(t, f+h);

        let u = sub(a, b);
        let v = sub(c, d);

        return normalize(cross(u, v));
      };
    }

    for (let i=0; i < TOTAL; i++) {
      for (let j=0; j < TOTAL-1; j++) {
        let a = coord2index(i+0, j+0);
        let b = coord2index(i+1, j+0);
        let c = coord2index(i+1, j+1);
        let d = coord2index(i+0, j+1);
        indices.push(c, b, a);
        indices.push(a, d, c);
      }
    }

    g.setIndex(indices);
    g.addAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(v), 3));
    g.addAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(n), 3));
    g.addAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(colors), 3));
    return g;
  }

  build(face) {
    let geo = new THREE.Geometry();
    face = face ? true : false;

    function __v3([x, y, z]) {
      return new THREE.Vector3(x, y, z);
    }

    function __add_brick(p, q) {
      geo.vertices.push(
        __v3(p),
        __v3(q),
      );
    }

    let dt = Math.PI/TOTAL;
    let df = 2*Math.PI/TOTAL;

    let F = this.f;

    function __cart(t, f) {
      return cartesian([F(t, f), t, f]);
    }


    let TOTAL = this.detail;

    for (let i=0; i < TOTAL; i++) {
      for (let j=0; j < TOTAL; j++) {

        let z = 4*(TOTAL*i + j);

        // Reduces size of mesh, even though it'll look the same
        if ((i+j)%2) {
          continue;
        }

        let t0 = (i+0.0)/TOTAL*Math.PI;
        let t1 = (i+1.0)/TOTAL*Math.PI;
        let f0 = (j+0.0)/TOTAL*2*Math.PI;
        let f1 = (j+1.0)/TOTAL*2*Math.PI;

        let a = __cart(t0, f0);
        let b = __cart(t1, f0);
        let c = __cart(t1, f1);
        let d = __cart(t0, f1);

        __add_brick(a, b);
        __add_brick(b, c);
        __add_brick(c, d);
        __add_brick(d, a);

        if (face) {
          let f1 = new THREE.Face3(z+0, z+1, z+2);
          let f2 = new THREE.Face3(z+2, z+3, z+0);
          geo.faces.push(f1, f2);
        }
      }
    }

    return geo;
  }
}
