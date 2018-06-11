import {random} from './utils.js';
import {cartesian} from './utils.js';

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
  constructor(f, radius, width, height) {
    this.f = f;
    this.grid = new SquareGrid({width: 0.08, height:  0.08});
  }

  build() {
    let self = this;
    let geo = new THREE.Geometry();

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


    let TOTAL = 160;

    for (let i=0; i < TOTAL; i++) {
      for (let j=0; j < TOTAL; j++) {

        if ((i+j)%2) {
          continue;
        }

        let t0 = (i+0.0)/TOTAL*Math.PI;
        let t1 = (i+1.0)/TOTAL*Math.PI;
        let f0 = (j+0.0)/TOTAL*2*Math.PI;
        let f1 = (j+1.0)/TOTAL*2*Math.PI;


        let r = 5.0;
        let a = __cart(t0, f0);
        let b = __cart(t1, f0);
        let c = __cart(t1, f1);
        let d = __cart(t0, f1);

        __add_brick(a, b);
        __add_brick(c, d);
        __add_brick(b, c);
        __add_brick(d, a);

        // console.log(t0, f0)
        // console.log(t1, f1)

      }
    }

    return geo;
  }

}
