import App from './App.js';
import {FlatTriangleMesh} from '../FlatTriangleMesh.js';
import * as THREE from 'THREE';


export class FlatApp extends App {
  constructor(params) {
    super(params);
    this.el = params.el;
    this.width = this.el.width;
    this.height = this.el.height;

    this.mesh = new FlatTriangleMesh(this.width, this.height, 11, 10);
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

export class GoldGridApp extends App {
  constructor(params) {
    super(params);
    this.el = params.el;
    const REGULAR_TRIANGLE_RATIO = Math.sqrt(3)/2.0;
    this.geometry = null;
    this.triMesh = new FlatTriangleMesh(
      11, // Width
      11*REGULAR_TRIANGLE_RATIO, // Height
      4, // Number of columns
      4  // Number of rows
    );

    this.setup();
  }

  asVectors(points) {
    let vectors = [];
    points.forEach(function (val) {
      vectors.push(new THREE.Vector2(val[0], val[1]));
    });
    return vectors;
  }

  buildGeometry() {
    let geometry = new THREE.Geometry();

    for (let i=-this.triMesh.rows; i <= this.triMesh.rows; i++) {
      for (let j=-2*this.triMesh.cols; j <= 2*this.triMesh.cols; j++) {
        let points = this.asVectors(this.triMesh.get(i, j));

        // Add vertices
        points.forEach((p) => {
          let x = 0.9*p.x;
          let y = 0.1*p.y;
          let z = 0.1*Math.sin(x+y);
          let vector = new THREE.Vector3(p.x, p.y, z);
          geometry.vertices.push(vector);
        });

        let h = geometry.vertices.length-3;
        let face;

        if ((i+j)%2 == 0) {
          face = new THREE.Face3(h+0, h+1, h+2);
        } else {
          face = new THREE.Face3(h+2, h+1, h+0);
        }

        geometry.faces.push(face);
      }
    }

    return geometry;
  }

  /**
   * Setup ...
   */
  setup() {
    // Camera
    this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000 );
    //this.camera = new THREE.OrthographicCamera(-40, +40, -40, +40);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 10;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Scene and rengerer
    this.scene = new THREE.Scene();

    let backgroundLenna = new THREE.CubeTextureLoader()
      .setPath('img/')
      .load([
        'lenna.png', 'lenna.png',
        'lenna.png', 'lenna.png',
        'lenna.png', 'lenna.png',
      ]);

    let backgroundOil = new THREE.CubeTextureLoader()
      .setPath('img/')
      .load([
        'oil-2.png', 'oil-2.png',
        'oil-2.png', 'oil-2.png',
        'oil-2.png', 'oil-2.png',
        // 'lenna.png', 'lenna.png',
      ]);


    this.geometry = this.buildGeometry();
    this.geometry.computeFaceNormals();
    // this.geometry = new THREE.SphereGeometry(3, 32, 32);

    // this.material = new THREE.MeshPhongMaterial({
    this.material = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      reflectivity: 0.8,
      envMap: backgroundLenna,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
                                                          
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.el,
    });

    // Whatever work
    this.renderer.setClearColor(0x00FFFF, 1);
    this.scene.add(this.mesh);
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
