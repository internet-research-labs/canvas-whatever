import App from './App.js';
import QuentinLike from '../app-utils/Quentin.js';
import {add, cross, sub, normalize, scale} from '../math3.js';
import {getElapsedTime} from '../utils.js';
import * as THREE from 'THREE';

import {sky} from '../obj/StarrySky.js';

import RibbonPath from '../RibbonPath.js';
import Ribbon from '../Ribbon.js';

import SimplexNoise from 'simplex-noise';

// Generative objects
import {GrassyField} from '../obj/GrassyField.js';
import {Land} from  '../obj/Land.js';

function norm(v) {
  return Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
}

function stringToHex(str) {
  return parseInt(str.substring(1), 16);
}

const NORTH = new THREE.Vector3(-1, 0, 0);
const EAST = new THREE.Vector3(0, 0, -1);
const SOUTH = new THREE.Vector3(+1, 0, 0);
const WEST = new THREE.Vector3(0, 0, +1);

export default class StarfieldApp extends QuentinLike {
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
    this.renderer.setPixelRatio(1.2);
    this.renderer.setClearColor(0xFFFFFF);

    // Sky
    this.sky = this.getSky();
    this.scene.add(this.sky);


    // Helper setup functions
    this.setupTrack();

    // Add visible components
    this.addFloor();

    let start = getElapsedTime();
    this.fieldMesh = {}
    // this.addGrassyField();
    this.addGrid();

    // Add obelisks
    console.log("Adding obelisks");
    this.addObelisk(NORTH, 0xFF0000);
    this.addObelisk(SOUTH, 0x00FFFF);
    this.addObelisk(EAST, 0xFF00FF);
    this.addObelisk(WEST, 0x00FF00);

    // console.log("Create grassy field time:", getElapsedTime()-start);

    this.force = new THREE.Vector3(0, 0, 1);
    this.dest = this.force.clone();
    this.dest.multiplyScalar(-1);
  }

  // Setup a camera track... but in this case actually do nothing
  setupTrack() {
    this.camera.position.set(0, 30, 80);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  getPoints(points) {
    let g = new THREE.Group();

    points.forEach((v, i) => {
      console.log("...whatever");
    });

    return g;
  }


  /**
   * Return a sky [and helper objects]
   */
  getSky() {
    let g = new THREE.Group();

    let stars = []; 
    let starSize =   700;
    let STAR_COUNT = 90000;

    for (let i=0; i < STAR_COUNT; i++) {
      let r = starSize;

      let t = 2*Math.random()-1;
      let u = 2*Math.random()-1;

      let x = t;
      let y = u;
      let z = 2*Math.random()-1.0;
      stars.push([x, y, z]);
    }

    g.add(sky(stars, starSize));


    return g;
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
   * ...
   */
  addGrassyField() {
    this.field = new GrassyField(
        20,
        20,
        9.0,
        30,
        this.floor.f,
      );
    this.fieldMesh = new THREE.Mesh(
      this.field.geometry(),
      this.grassMaterial,
    );
    this.scene.add(this.fieldMesh);
  }

  setPhong({color, emissive, specular, shininess, reflectivity}) {
    this.grassMaterial = new THREE.MeshPhongMaterial({
      color: stringToHex(color),
      emissive: stringToHex(emissive),
      specular: stringToHex(specular),
      shininess: shininess,
      reflectivity: reflectivity,
      // shading: THREE.SmoothShading,
      flatShading: true,
      side: THREE.DoubleSide,
    });
    this.fieldMesh.material = this.grassMaterial;
    // this.fieldMesh.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, });
  }

  addTombstone(x, z) {
    let geometry = new THREE.BoxGeometry(4, 8, 1);
    let material =  new THREE.MeshPhongMaterial({
      color: 0x333333,
      emissive: 0x777777,
      specular: 0x000000,
      reflectivity: 0,
      shininess: 0,
      // shading: THREE.SmoothShading,
      flatShading: true,
      side: THREE.DoubleSide,
    });
    let cube = new THREE.Mesh(geometry, material);
    cube.position.x = x;
    cube.position.y = 0;
    cube.position.z = z;
  }


  // Just draw a simple floor
  addFloor() {
    let mat = new THREE.MeshPhongMaterial({
      color: 0x33333,
      emissive: 0x000000,
      specular: 0x000000,
      shininess: 0.0,
      // shading: THREE.SmoothShading,
      flatShading: true,
      side: THREE.DoubleSide,
    });

    let _abc = (function () {
      let s = 80.0;
      let simplex = new SimplexNoise("whatever");
      return (x, y) => {
        return 4.0*simplex.noise2D(x/s, y/s);
      };
    }());

    this.floor = new Land({
      height: 50,
      width: 50,
      floor: _abc,
    });

    // let geo = this.floor.getMesh();

    // this.scene.add(new THREE.Mesh(geo, mat));
  }

  addObelisk(p, c) {
    let geo = new THREE.BoxGeometry(1, 5, 1);
    let mat = new THREE.MeshBasicMaterial({color: c});
    let mesh = new THREE.Mesh(geo, mat);
    let pos = p.clone();
    pos.multiplyScalar(20.0);
    mesh.position.set(pos.x, pos.y+2.5, pos.z);
    mesh.rotation.y = Math.PI/4.0;
    this.scene.add(mesh);
  }

  addGrid() {
    let mat = new THREE.LineBasicMaterial({color: 0x333333});
    let VALS = 100;
    for (let i=-VALS; i <= VALS; i++) {
      let geo = new THREE.Geometry();
      geo.vertices.push(new THREE.Vector3(i, 0, -80));
      geo.vertices.push(new THREE.Vector3(i, 0, 80));
      this.scene.add(new THREE.Line(geo, mat));
      geo = new THREE.Geometry();
      geo.vertices.push(new THREE.Vector3(-80, 0, i));
      geo.vertices.push(new THREE.Vector3(80, 0, i));
      this.scene.add(new THREE.Line(geo, mat));
    }
  }

  update(params) {
    let t = +new Date() / 200.0 / 1.0;
    let f = Math.PI/4.0;
    let r = 90;
    f = t/100.0;
    let x = r*Math.cos(t);
    let z = r*Math.sin(t);
    let y =  params.y;

    // ...
    let [a, b, c] = [r*Math.cos(r), y, r*Math.sin(r)];

    // ...
    let TWOPI = 2*Math.PI;
    let theta = f % 2*Math.PI;
    this.sky.rotation.x = theta;
    // this.sky.rotation.y = theta;
    // this.sky.rotation.y 
    // this.sky.rotation.x = f % TWOPI;
    // this.sky.rotation.y = f % TWOPI;;
    // this.sky.rotation.z = f % TWOPI;;

    // ...
    this.camera.position.set(a, b, c);
    this.camera.position.set(0, 90, 0);
    this.camera.position.set(0, y, 0);


    let pos = SOUTH.clone();
    pos.multiplyScalar(20.0);
    pos.y = 4.5;
    this.camera.lookAt(pos);
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      this.app.view_angle,
      this.app.aspect,
      this.app.near,
      this.app.far
    );
  }

  setSize(width, height) {
    this.app.width = width;
    this.app.height = height;
    this.app.aspect = width/height;
    this.setupCamera();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.app.width, this.app.height);
  }

  resize(width, height) {
    this.setSize(width, height);
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
