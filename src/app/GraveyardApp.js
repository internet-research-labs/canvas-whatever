import App from './App.js';
import QuentinLike from '../app-utils/Quentin.js';
import {add, cross, sub, normalize, scale} from '../math3.js';
import * as THREE from 'THREE';

import RibbonPath from '../RibbonPath.js';
import Ribbon from '../Ribbon.js';

// Generative objects
import Grass from '../obj/Grass.js';
import {GrassyField} from '../obj/GrassyField.js';

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
    this.app.far        = 100;
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
    this.scene.fog = new THREE.FogExp2(0x999999, 0.0045);

    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xDDDDDD);

    this.app.time = 0;

    // Helper setup functions
    this.setupTrack();


    // Add visible components
    this.addFloor();

    for (let i=0; i < 1600; i++) {
      let x = 15*(Math.random()-0.5)+10;
      let z = 15*(Math.random()-0.5)+10;
      // this.addGrass(x, 0, z, Math.random()*0.05);
    }

    for (let i=-3; i <= 3; i++) {
      let x = 8*i;
      this.addTombstone(x, 0);
    }

    this.addGrassyField();


    this.force = new THREE.Vector3(0, 0, 1);
    this.dest = this.force.clone();
    this.dest.multiplyScalar(-1);
    // this.addForceArrow();
    // this.updateForce(2.0);
  }

  // Setup a camera track... but in this case actually do nothing
  setupTrack() {
    this.camera.position.set(0, 30, 80);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
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
    // this.updateForceArrow();
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

  addGrassyField() {
    let mat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, });
    mat = this.getPhong();
    
    this.field = new GrassyField(
        60,
        25,
        20000,
        20000,
      );
    this.fieldMesh = new THREE.Mesh(
      this.field.geometry(),
      mat,
    );
    this.scene.add(this.fieldMesh);
  }

  addTombstone(x, z) {
    let geometry = new THREE.BoxGeometry(4, 8, 1);
    let material =  new THREE.MeshPhongMaterial({
      color: 0x333333,
      emissive: 0x777777,
      specular: 0x000000,
      reflectivity: 0,
      shininess: 0,
      shading: THREE.SmoothShading,
      side: THREE.DoubleSide,
    });
    let cube = new THREE.Mesh(geometry, material);
    cube.position.x = x;
    cube.position.y = 4;;
    cube.position.z = z;
    // cube.rotation.y = Math.PI/4;
    this.scene.add(cube);
  }

  getPhong() {
    return new THREE.MeshPhongMaterial({
      color: 0x004444,
      emissive: 0x114433,
      specular: 0x7700DD,
      reflectivity: 20,
      shininess: 15,
      shading: THREE.SmoothShading,
      side: THREE.DoubleSide,
    });
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
    this.app.time += 0.1;
    let t = this.app.time/9.0;
    let r = 120;
    let x = r*Math.cos(t);
    let z = r*Math.sin(t);
    let y =  40;

    this.directionalLight.position.set(10, 10, 10);
    this.pointLight1.position.set(x, y, z);
    this.pointLight2.position.set(-x, y, -z);
    // this.camera.position.set(x, y, z);
    // this.updateForce(params.force);
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
