import * as THREE from 'THREE';

import {random} from '../utils.js';
import {debounce} from '../function-utils.js';

// Point with direction
class Particle {
  // Construct point with direction
  constructor(pos, vel) {
    this.pos = pos.slice();
    this.vel = vel ? vel.slice() : [0.0, 0.0, 0.0];
    this.weight = 1.0;
  }
  // Update position with 
  tick(h) {
    this.pos[0] += h*this.vel[0];
    this.pos[1] += h*this.vel[1];
    this.pos[2] += h*this.vel[2];
  }
}

class Particles {
  constructor(n) {
    this.particles = [];
  }

  _add_random_particles(n) {
    let s = 2*Math.PI;
    for (let i=0; i < n; i++) {
      this.particles.push([
        random(-s, +s),
        random(-s, +s),
        random(-s, +s),
      ]);
    }
  }
}


// App that has a flow
export default class FlowApp {
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

    // Setup renderer stuff
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(1.5);
    this.renderer.setClearColor(0xFFFFFF);

    // Adding things
    this.addParticles();
  }

  // Return the THREE Geometry object representing the particle 
  _getParticleMesh(size) {
    let d = new THREE.DodecahedronGeometry(size);
    return new THREE.EdgesGeometry(d);
  }

  eventHandlers() {
    let self = this;
    let mouse = {x: 0.0, y: 0.0};
    let screen = {w: window.innerWidth, h: window.innerHeight};
    return {
      // How we should handle a resize
      resize: debounce(100, (ev) => {
        self.resize(window.innerWidth, window.innerHeight);
      }),
      // How we should handle a mouse move
      move: debounce(3, (ev) => {
        mouse.x = ev.clientX;
        mouse.y = ev.clientY;
        let p = new THREE.Vector3(
          1.0,
          -(2*mouse.y/window.innerHeight - 1.0),
          -(2*mouse.x/window.innerWidth - 1.0),
        );
        p.multiplyScalar(88.0);
        this.camera.position.copy(p);
      }),
    }
  }

  addParticles() {
    let g = new THREE.Group();
    let size = 0.3;
    this.particles = new Particles();
    this.particles._add_random_particles(100);
    let m = new THREE.LineBasicMaterial({color: 0});
    this.particles.particles.forEach(([x, y, z]) => {
      let d = new THREE.LineSegments(this._getParticleMesh(size), m)
      d.position.set(x, y, z);
      d.rotation.set(
        random(0, 2*Math.PI),
        random(0, 2*Math.PI),
        random(0, 2*Math.PI),
      );
      g.add(d);
    });
    this.scene.add(g);
  }

  update(params) {
    let t = +new Date() / 200.0 / 1.0;
    let theta = t/9.;
    theta = Math.PI/2.0;
    let r = 50.0;
    let x = 50.0*Math.cos(theta);
    let y = 0.0;
    let z = 50.0*Math.sin(theta);
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
