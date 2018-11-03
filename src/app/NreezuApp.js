import * as THREE from 'THREE';

import TriangleSurface from '../TriangleSurface.js';
import {debounce} from '../function-utils.js';


// Return a blah
function grid(f, width, height) {
  return new THREE.Mesh(
    new TriangleSurface(f, .05, 15, 15).build(),
    new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
      side: THREE.DoubleSide,
    }),
  );
}


// Return an instance of wavvey app
export default class NreezuApp {
  constructor(params) {
    this.id = params.id;
    this.el = document.getElementById(this.id);
    this.app = {};
    this.width = this.el.offsetWidth;
    this.height = this.el.offsetHeight;
  }

  setup() {
    this.app = {
      view_angle: 15,
      aspect: this.width/this.height,
      near: 0.1,
      far: 2000,
    };

    // Camera
    this.setupCamera();

    // Scene
    this.scene = new THREE.Scene();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.el,
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xFFFFFF, 1);
    this.renderer.setPixelRatio(1.5);
    // this.renderer.setClearColor(0xFFFFFF);
    document.body.appendChild(this.renderer.domElement);

    // Meshes
    this.grids = [
      // grid((x, y) => { return 0.; }),
      grid((x, y) => { return 0.1*Math.cos(0.3*(x*x+y*y)); }),
    ];

    this.group = new THREE.Group();
    this.grids.forEach((v, _) => {
      this.group.add(v);
    });

    this.scene.add(this.group);

    // Attach'em
    this.resize(this.width, this.height);

    let [a, b, c] = [0, 3.0, -25.0];
    this.camera.position.set(a, b, c);
    this.camera.lookAt(0, b-1.0, 0);
    this.setupLights();
  }

  getBetweenPoint(p, q) {
    let t = 0.5;
    return [
      t*(q.x-p.x)+p.x,
      t*(q.y-p.y)+p.y,
      t*(q.z-p.z)+p.z,
    ];
  }

  // Return object containing all the necessary event handlers
  eventHandlers() {
    let self = this;
    let mouse = {x: 0.0, y: 0.0};

    return {
      resize: debounce(100, (ev) => {
        let size = Math.min(window.innerWidth, window.innerHeight);
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        self.resize(this.width, this.height);
      }),
      move: debounce(10, (ev) => {
        mouse.x = ev.clientX;
        mouse.y = ev.clientY;
        // let u = 1*ev.clientX/window.innerWidth-1.0;
        // let v = 1*ev.clientX/window.innerWidth-1.0;
        // this.rgbPass.uniforms['amount'].value = Math.sqrt(u*u+v*v)/298.+0.002;
        let y = 0.5*(2*mouse.y/window.innerHeight - 1.0);
        let z = 0.5*(2*mouse.x/window.innerWidth - 1.0);
      }),
    }
  }

  update(params) {
  }

  setupLights() {
    let lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 100, 2);
    lights[1] = new THREE.PointLight(0xffffff, 1, 100, 2);
    lights[2] = new THREE.PointLight(0xffffff, 1, 100, 2);
    lights[3] = new THREE.AmbientLight(0x444444);
    lights[4] = new THREE.DirectionalLight(0x555555, 0.5);

    lights[0].position.set(0, 0, 10);
    lights[1].position.set(10, 0, 0);
    lights[2].position.set( - 1, - 2, - 1 );
    lights[3].position.set( - 1, - 2, - 1 );
    lights[4].position.set(10, 0, 10);
    lights[4].position.normalize();

    /**
    lights.forEach((v) => {
      v.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.0, 20, 20),
        new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000}),
      ));
    });
    */

    this.scene.add( lights[ 0 ] );
    this.scene.add( lights[ 1 ] );
    this.scene.add( lights[ 2 ] );
    this.scene.add( lights[ 3 ] );
    this.scene.add( lights[ 4 ] );
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
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
