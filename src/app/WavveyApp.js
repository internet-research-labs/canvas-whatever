import * as THREE from 'THREE';

import {SphereSurface, SquareSurface} from '../square-grid.js';

function grid(f, width, height) {
  let surface = new SphereSurface(f, 0.2, width, height);

  return new THREE.LineSegments(
    surface.build(), 
    new THREE.LineBasicMaterial({color: 0x000000}),
  );
}

export default class WavveyApp {
  constructor(params) {
    this.id = params.id;
    this.el = document.getElementById(this.id);
    this.app = {};
    this.width = this.el.offsetWidth;
    this.height = this.el.offsetHeight;
  }

  setup() {
    this.app.width      = this.width;
    this.app.height     = this.height;
    this.app.view_angle = 15;
    this.app.aspect     = this.width/this.height;
    this.app.near       = 0.1;
    this.app.far        = 2000;
    this.app.iterations = 0;
    this.app.time       = 0;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias : true,
      canvas: this.el,
    });

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.setupCamera();

    // Lights
    this.ambientLight = new THREE.AmbientLight(0xCCCCCC);
    this.directionalLight = new THREE.DirectionalLight(0x333333, 0.5);
    this.pointLight1 = new THREE.PointLight(0x333333, 2, 800);
    this.pointLight2 = new THREE.PointLight(0x333333, 2, 800);

    this.directionalLight.position.set(0, 0, -1);
    this.pointLight1.position.set(0, 10, -10);
    this.pointLight2.position.set(0, 10, -10);

    this.directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
    this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));
    this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));

    this.scene.add(this.directionalLight);
    this.scene.add(this.pointLight1);
    this.scene.add(this.pointLight2);
    this.scene.add(this.ambientLight);

    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(1.2);
    this.renderer.setClearColor(0xFFFFFF);

    // Meshes
    this.grids = [
      // grid((x, y) => { return 0.3*Math.cos(3*x)+2.0; }, 10.0, 10.0),
      // grid((x, y) => { return 0.3*Math.sin(2*x)+1.0; }, 10.0, 10.0),
      // grid((x, y) => { return 0.3*Math.cos(x*x+y*y)-1.0; }, 10.0, 10.0),
      // grid((x, y) => { return 0.3*Math.cos(x*x+y*y)-2.0; }, 10.0, 10.0),
      // grid((t, f) => { return 2*t; }, 10.0, 10.0),
      // grid((t, f) => { return Math.cos(t)+Math.sin(2*f)+4.0; }, 10.0, 10.0),
      grid((t, f) => { return 0.22*Math.sin(5*(t+f))+4.0; }, 10.0, 10.0),
      // grid((t, f) => { return 0.5*Math.sin(23*(t))+4.0; }, 10.0, 10.0),
      // grid((t, f) => { return 8.0; }, 10.0, 10.0),
      // grid((t, f) => { return 4.0; }, 10.0, 10.0),
      // grid((t, f) => { return 6.0; }, 10.0, 10.0),
    ];

    let g = new THREE.Group();
    this.grids.forEach((v, _) => {
      v.rotation.x = Math.PI/2.0;
      g.add(v);
    });

    this.scene.add(g);
  }

  update(params) {
    let t = +new Date() / 200.0 / 1.0;
    let f = t/9.;

    // ...
    let theta = f;
    // theta = Math.PI/2.0+0.01;

    let r = 50.0;

    let x = 50.0*Math.cos(theta);
    let y = 0.0;
    let z = 50.0*Math.sin(theta);

    this.camera.position.set(x, y, z);
    this.camera.lookAt(0.0, 0.0, 0.0);
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      this.app.view_angle,
      this.app.aspect,
      this.app.near,
      this.app.far
    );
  }

  resize(width, height) {
    this.app.width = width;
    this.app.height = height;
    this.app.aspect = width/height;
    this.setupCamera();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.app.width, this.app.height);
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
