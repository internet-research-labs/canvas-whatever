import App from './App.js';
import QuentinLike from '../app-utils/Quentin.js';
import {add, cross, sub, normalize, scale} from '../math3.js';
import * as THREE from 'THREE';

import RibbonPath from '../RibbonPath.js';
import Ribbon from '../Ribbon.js';

// Generative objects
import Grass from '../obj/Grass.js';


export default class GrassApp extends QuentinLike {
  constructor(params) {
    super(params);
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
    this.app.far        = 10000;
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
    this.camera = new THREE.PerspectiveCamera(
      this.app.view_angle,
      this.app.aspect,
      this.app.near,
      this.app.far,
    );


    // Lights
    this.pointLight1 = new THREE.PointLight(0xDDDDDD, 2, 800);
    this.pointLight2 = new THREE.PointLight(0xDDDDDD, 2, 800);
    this.ambientLight = new THREE.AmbientLight(0xBBBBBB);

    this.pointLight1.position.set(-10, 10, 0);
    this.pointLight2.position.set(-10, 10, 0);

    this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));
    this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));

    this.scene.add(this.pointLight1);
    this.scene.add(this.pointLight2);
    this.scene.add(this.ambientLight);

    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(new THREE.Color(0xDDDDDD));

    this.app.time = 0;

    // Helper setup functions
    this.setupTrack();

    // Add visible components
    this.addFloor();
    this.addGrass();
  }

  // Setup a camera track... but in this case actually do nothing
  setupTrack() {
    this.camera.position.set(0, 10, 40);
    this.camera.lookAt(new THREE.Vector3(0, 0, 4));
  }

  addGrass() {
    let mat = new THREE.MeshPhongMaterial({
      color: 0x044000,
      emissive: 0x0,
      specular: 0xCCCCCC,
      reflectivity: 0.2,
      shininess: 30,
      shading: THREE.SmoothShading,
      side: THREE.DoubleSide,
    });
    this.field = []

    let g = new Grass();
    let geo = g.getGeo();
    this.scene.add(new THREE.Mesh(geo, mat));
  }

  // Just draw a simple floor
  addFloor() {
    let mat = new THREE.LineBasicMaterial({color: 0xB7B7BA});
    let VALS = 100;
    for (let i=-VALS; i <= VALS; i++) {
      let geo = new THREE.Geometry();
      geo.vertices.push(new THREE.Vector3(i, 0, -40));
      geo.vertices.push(new THREE.Vector3(i, 0, 40));
      this.scene.add(new THREE.Line(geo, mat));
      geo = new THREE.Geometry();
      geo.vertices.push(new THREE.Vector3(-40, 0, i));
      geo.vertices.push(new THREE.Vector3(40, 0, i));
      this.scene.add(new THREE.Line(geo, mat));
    }
  }

  update() {
    this.app.time += .01;
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
