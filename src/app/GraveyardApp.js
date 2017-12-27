import App from './App.js';
import QuentinLike from '../app-utils/Quentin.js';
import {add, cross, sub, normalize, scale} from '../math3.js';
import {getElapsedTime} from '../utils.js';
import * as THREE from 'THREE';

import RibbonPath from '../RibbonPath.js';
import Ribbon from '../Ribbon.js';

// Generative objects
import Grass from '../obj/Grass.js';
import {GrassyField} from '../obj/GrassyField.js';
import {Land} from  '../obj/Land.js';

function norm(v) {
  return Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
}

function stringToHex(str) {
  return parseInt(str.substring(1), 16);
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
    this.app.far        = 1000;
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

    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xDDDDDD);

    // Helper setup functions
    this.setupTrack();

    // Add visible components
    this.addFloor();

    for (let i=-8; i <= 8; i++) {
      let x = 8*i;
      this.addTombstone(x, 0);
    }

    let start = getElapsedTime();
    this.addGrassyField();
    console.log("Create grassy field time:", getElapsedTime()-start);

    this.force = new THREE.Vector3(0, 0, 1);
    this.dest = this.force.clone();
    this.dest.multiplyScalar(-1);
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
    this.field = new GrassyField(
        130,
        10,
        8000,
        300,
      );
    this.fieldMesh = new THREE.Mesh(
      this.field.geometry(),
      this.grassMaterial,
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

  setPhong({color, emissive, specular, shininess, reflectivity}) {
    this.grassMaterial = new THREE.MeshPhongMaterial({
      color: stringToHex(color),
      emissive: stringToHex(emissive),
      specular: stringToHex(specular),
      shininess: shininess,
      reflectivity: reflectivity,
      shading: THREE.SmoothShading,
      side: THREE.DoubleSide,
    });
    this.fieldMesh.material = this.grassMaterial;
  }

  // Just draw a simple floor
  addFloor() {
    let mat = new THREE.MeshPhongMaterial({
      color: 0x33333,
      // emissive: stringToHex(emissive),
      specular: 0x333333,
      // shininess: shininess,
      // reflectivity: reflectivity,
      shading: THREE.SmoothShading,
      side: THREE.DoubleSide,
    });

    this.floor = new Land({
      height: 20,
      width: 20,
    });

    let geo = this.floor.getMesh();

    this.scene.add(new THREE.Mesh(geo, mat));
  }

  update(params) {
    let t = getElapsedTime()/10.0;
    // t = -Math.PI/2;
    let r = 90;
    let x = r*Math.cos(t);
    let z = r*Math.sin(t);
    let y =  40;

    let [a, b, c] = [r*Math.cos(t), 40, r*Math.sin(t)];

    // this.directionalLight.position.set(10, 10, 10);
    // this.pointLight1.position.set(x, y, z);
    // this.pointLight2.position.set(-x, y, -z);
    this.camera.position.set(a, b, c);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
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
