import * as THREE from 'THREE';

import {random} from '../utils.js';
import {debounce} from '../function-utils.js';


// Returns a set of a set of objects from a parametric object of 2-variables
function generateObject(u, v) {
  let edges = new THREE.EdgesGeometry(new THREE.DodecahedronGeometry(0.3));
  let mat = new THREE.LineBasicMaterial({color: 0});
  let lines = new THREE.LineSegments(edges, mat);
  lines.rotation.x = v;
  lines.rotation.y = u;
  return lines;
}


// App that has a flow
export default class ShowmanApp {

  // Construct the basic things
  constructor(params) {
    this.id = params.id;
    this.el = document.getElementById(this.id);
    this.width = this.el.offsetWidth;
    this.height = this.el.offsetHeight;
  }

  // Setup WebGL bullshit
  setup() {

    this.app = {
      width: this.width,
      height: this.height,
      view_angle: 15,
      aspect: this.width/this.height,
      near: 0.1,
      far: 2000,
    };

    // Camera
    this.setupCamera(10.0, 10.0/this.app.aspect);

    // Scene + Renderer
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      antialias : true,
      canvas: this.el,
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(1.5);
    this.renderer.setClearColor(0xFFFFFF);

    // Adding things
    this.addObjects({
      x_min: -Math.PI,
      x_max: +Math.PI,
      y_min: -Math.PI,
      y_max: +Math.PI,
    });
  }

  // Setup camera
  setupCamera(width, height) {
    this.camera = new THREE.OrthographicCamera(
      -width/2.0,
      +width/2.0,
      -height/2.0,
      +height/2.0,
      3.0,
      100.0,
    );
  }

  // Return object containing all the necessary event handlers
  eventHandlers() {
    let self = this;
    let mouse = {x: 0.0, y: 0.0};

    return {
      resize: debounce(100, (ev) => {
        self.resize(window.innerWidth, window.innerHeight);
        this.update();
        this.draw();
      }),
      move: debounce(10, (ev) => {
        mouse.x = ev.clientX;
        mouse.y = ev.clientY;
        let p = new THREE.Vector3(
          0.5,
          2*(2*mouse.y/window.innerHeight - 1.0),
          -2*(2*mouse.x/window.innerWidth - 1.0),
        );
        p.multiplyScalar(20.0);
        this.camera.position.copy(p);
        this.camera.position.set(0.0, 0.0, 90.0);
      }),
    }
  }

  // Add particles to the App + Scene
  addObjects({x_min, x_max, y_min, y_max}) {
    const X_PIECES = 30;
    const Y_PIECES = 30;

    function _position(i, j) {
      const LEFT = -11.0;
      const RIGHT = +11.0;
      const BOTTOM = -11.0;
      const TOP = +11.0;
      return [
        (i/Y_PIECES)*(TOP-BOTTOM)+BOTTOM,
        (j/X_PIECES)*(RIGHT-LEFT)+LEFT,
        0.0,
      ];
    }

    for (let i=0; i <= Y_PIECES; i++) {
      for (let j=0; j <= X_PIECES; j++) {
        let x = (i/X_PIECES)*(x_max-x_min)+x_min;
        let y = (j/Y_PIECES)*(y_max-y_min)+y_min;
        let obj = generateObject(x, y);

        let pos = _position(i, j);
        obj.position.set(pos[0], pos[1], pos[2]);

        this.scene.add(obj);
      }
    }
  }

  // Update
  update(params) {
    this.camera.lookAt(0.0, 0.0, 0.0);
  }

  // Resize to dimensions of screen
  // XXX: Make this work on mobile
  resize(width, height) {
    this.app.width = width;
    this.app.height = height;
    this.app.aspect = width/height;
    let w = 20.0;
    let h = 20.0/this.app.aspect;
    this.setupCamera(w, h);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.app.width, this.app.height);
  }

  // Dumb draw
  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
