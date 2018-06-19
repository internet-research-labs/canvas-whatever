import * as THREE from 'THREE';

import {SphereSurface, SquareSurface} from '../square-grid.js';
import {debounce} from '../function-utils.js';


// Return a blah
function grid(f, width, height) {
  return new THREE.LineSegments(
    new SphereSurface(f, 160).build(),
    new THREE.LineBasicMaterial({color: 0x000000}),
  );
}

// Return an instance of wavvey app
export default class WavveyApp {
  constructor(params) {
    this.id = params.id;
    this.el = document.getElementById(this.id);
    this.app = {};
    this.width = this.el.offsetWidth;
    this.height = this.el.offsetHeight;
  }

  setup() {
    this.app = {
      width: this.width,
      height: this.height,
      view_angle: 15,
      aspect: this.width/this.height,
      near: 0.1,
      far: 2000,
    };

    this.meta = {
      lastPosition: new THREE.Vector3(0.0, 0.0, 0.0),
    };

    // Camera
    this.setupCamera();

    // Scene
    this.scene = new THREE.Scene();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias : true,
      canvas: this.el,
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(1.5);
    this.renderer.setClearColor(0xFFFFFF);

    // Meshes
    this.grids = [
      grid((t, f) => { return 0.22*Math.sin(5*(t+f))+4.0; }, 10.0, 10.0),
    ];

    // Grids
    let g = new THREE.Group();
    this.grids.forEach((v, _) => {
      v.rotation.x = Math.PI/2.0;
      g.add(v);
    });

    // Attach'em
    this.scene.add(g);
  }

  // Return object containing all the necessary event handlers
  eventHandlers() {
    let self = this;
    let mouse = {x: 0.0, y: 0.0};

    return {
      resize: debounce(100, (ev) => {
        self.resize(window.innerWidth, window.innerHeight);
      }),
      move: debounce(10, (ev) => {
        mouse.x = ev.clientX;
        mouse.y = ev.clientY;
        let p = new THREE.Vector3(
          0.5,
          -2*(2*mouse.y/window.innerHeight - 1.0),
          -2*(2*mouse.x/window.innerWidth - 1.0),
        );
        p.multiplyScalar(88.0);
        this.camera.position.copy(p);
      }),
    }
  }

  update(params) {
    if (!this.meta.lastPosition.equals(this.camera.position)) {
      this.meta.lastPosition.copy(this.camera.position);
      this.camera.lookAt(0.0, 0.0, 0.0);
    }
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
