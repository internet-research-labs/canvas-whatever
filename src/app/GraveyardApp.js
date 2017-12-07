import App from './App.js';
import QuentinLike from '../app-utils/Quentin.js';
import {add, cross, sub, normalize, scale} from '../math3.js';
import * as THREE from 'THREE';

import RibbonPath from '../RibbonPath.js';
import Ribbon from '../Ribbon.js';

// Generative objects
import Grass from '../obj/Grass.js';

function norm(v) {
  return Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
}

export default class GraveyardApp extends QuentinLike {
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
    this.renderer.setClearColor(0xDDDDDD);

    this.app.time = 0;

    // Helper setup functions
    this.setupTrack();


    // Add visible components
    this.addFloor();

    for (let i=0; i < 1600; i++) {
      let x = 15*(Math.random()-0.5);
      let z = 15*(Math.random()-0.5);
      this.addGrass(x, 0, z, Math.random()*0.05);
    }

    this.addTombstone(0, 0);

    this.force = new THREE.Vector3(0, 0, 1);
    this.dest = this.force.clone();
    this.dest.multiplyScalar(-1);
    this.addForceArrow();
    this.updateForce(2.0);
  }

  // Setup a camera track... but in this case actually do nothing
  setupTrack() {
    this.camera.position.set(0, 10, 40);
    this.camera.lookAt(new THREE.Vector3(0, 0, 4));
  }

  /**
   * Create the Force ArrowHelper and Update
   */
  addForceArrow() {
    this.forceArrow = new THREE.ArrowHelper(
      this.force,
      this.dest,
      norm(this.force),
      0x000000,
    );
    this.scene.add(this.forceArrow);
    this.updateForceArrow();
  }

  /**
   * Update Force ArrowHelper
   */
  updateForceArrow() {
    this.dest = this.force.clone();
    this.dest.multiplyScalar(-1);
    this.forceArrow.setLength(norm(this.force));
    this.forceArrow.position.x = this.force.x;
    this.forceArrow.position.y = this.force.y;
    this.forceArrow.position.z = this.force.z;
    this.forceArrow.position.multiplyScalar(-1);

  }

  /**
   * Add a piece of  grass
   */
  addGrass(x, y, z, theta) {
    let mat = new THREE.MeshPhongMaterial({
      color: 0x044000,
      emissive: 0x0,
      specular: 0xCCCCCC,
      reflectivity: 0.2,
      shininess: 30,
      shading: THREE.SmoothShading,
      side: THREE.DoubleSide,
    });
    mat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, });
    this.field = []

    let g = new Grass(x, y, z, theta);
    let geo = g.getGeo();
    let mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.y += Math.random();
    this.scene.add(mesh);
  }

  addTombstone(x, y) {
    let geometry = new THREE.BoxGeometry(4, 8, 1);
    let material = new THREE.MeshBasicMaterial({color: 0x999999});
    let cube = new THREE.Mesh(geometry, material);
    cube.position.x = 0;
    cube.position.y = 4;
    cube.position.z = 0;
    this.scene.add(cube);
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

  update(params) {
    this.app.time += .01;
    let t = this.app.time/3.0;
    let x = 80*Math.sin(t);
    let y = 30;
    let z = 80*Math.cos(t);
    this.camera.position.set(x, y, z);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.updateForce(params.force);
  }

  updateForce(n) {
    this.force.normalize();
    this.force.multiplyScalar(n);
    this.updateForceArrow();
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
