import App from './App.js';
import * as THREE from 'THREE';


class TriangleMesh {
  constructor(w, h, cols, rows) {
    this.width = w;
    this.height = h;
    this.cols = cols;
    this.rows = rows;
    this.dx = cols % 2 == 1 ? this.width/(cols+1) : this.width/cols;
    this.dy = this.height/rows;
  }

  get(i, j) {
    let {dx, dy} = this;
    let x = this.dx/2.0 + j * this.dx/2.;
    let y = this.dy/2.0 + i * this.dy;

    if ((i+j) % 2 == 0) {
      /**
       *   3
       *  /+\
       * 1---2
       */
      return [
        [Math.round(x-dx/2.), Math.round(y-dy/2.)],
        [Math.round(x+dx/2.), Math.round(y-dy/2.)],
        [Math.round(x), Math.round(y+dy/2.)],
      ];
    } else {
      /**
       *  1---2
       *   \ /
       *    3
       */
      return [
        [Math.round(x-dx/2.), Math.round(y+dy/2.)],
        [Math.round(x+dx/2.), Math.round(y+dy/2.)],
        [Math.round(x), Math.round(y-dy/2.)],
      ];
    }
  }
}

export class FlatApp extends App {
  constructor(params) {
    super(params);
    this.el = params.el;
    this.width = this.el.width;
    this.height = this.el.height;

    this.mesh = new TriangleMesh(this.width, this.height, 11, 10);
    this.ctx = this.el.getContext('2d');
  }

  update(params) {
  }

  drawTriangle(points, color) {
    let ctx = this.ctx;
    ctx.save();
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.moveTo(points[0][0], points[0][1]);
      ctx.lineTo(points[1][0], points[1][1]);
      ctx.lineTo(points[2][0], points[2][1]);
      ctx.fill();
      ctx.fill();
      ctx.fill();
      ctx.fill();
      ctx.closePath();
    ctx.restore();
  }

  draw() {
    console.log(this.mesh.get(0, 0));
    console.log(this.mesh.get(0, 1));
    console.log(this.mesh.get(0, 2));

    this.drawTriangle(this.mesh.get(0, 0), "black");
    this.drawTriangle(this.mesh.get(0, 1), "magenta");
    this.drawTriangle(this.mesh.get(0, 2), "cyan");

    this.drawTriangle(this.mesh.get(1, 0), "yellow");
    this.drawTriangle(this.mesh.get(1, 1), "black");
    this.drawTriangle(this.mesh.get(1, 2), "gray");

    this.drawTriangle(this.mesh.get(0, 22), "gray");
    this.drawTriangle(this.mesh.get(1, 22), "gray");
    this.drawTriangle(this.mesh.get(2, 22), "gray");

    this.drawTriangle(this.mesh.get(9, 0), "gray");
    this.drawTriangle(this.mesh.get(9, 1), "black");
    this.drawTriangle(this.mesh.get(9, 2), "gray");
    this.drawTriangle(this.mesh.get(10, 2), "gray");
  }
}

/**
 * Grid with disconnected (unsmoothed) faces.
 * xy-coordinates follow this layout
 *  +---*---*---*---*---*
 *   \ / \ / \ / \ / \ / \
 *    *---*---*---*---*---*
 *   / \ / \ / \ / \ / \ /
 *  *---*---*---*---*---*
 *   \ / \ / \ / \ / \ / \
 *    *---*---*---*---*---*
 *   / \ / \ / \ / \ / \ /
 *  *---*---*---*---*---*
 */

class TrianglePlane {
  constructor(width, height, params) {
    this.geometry = new THREE.Geometry();
  }
}

export class GoldGridApp extends App {
  constructor(params) {
    super(params);
    this.el = params.el,
    this.setup();
  }

  /**
   * Setup ...
   */
  setup() {
    // Camera
    this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000 );
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Scene and rengerer
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.el,
    });

    // Whatever work
    this.renderer.setClearColor(0xFFFFFF, 1);
  }

  /**
   * Update ...
   */
  update(params) {
  }

  /**
   * Draw ...
   */
  draw(params) {
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
  }
}
