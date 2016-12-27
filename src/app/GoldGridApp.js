import App from './App.js';
import * as THREE from 'THREE';



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
  constructor(width, height) {
    this.geometry = new THREE.Geometry();
  }
}

export default class GoldGridApp extends App {
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
