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

    /*
    for (let i=-8; i <= 8; i++) {
      let x = 8*i;
      this.addTombstone(x, 0);
    }
    //*/
    //

    let start = getElapsedTime();
    this.addGrassyField();
    // console.log("Create grassy field time:", getElapsedTime()-start);

    this.force = new THREE.Vector3(0, 0, 1);
    this.dest = this.force.clone();
    this.dest.multiplyScalar(-1);

    this.loadObjs();
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

    for (let i=0; i < 30; i++) {
      let r = 9;
      let t = Math.random()*Math.PI*2;
      let x = r*Math.cos(t);
      let y = r*Math.sin(t);
      let z = 0;
      stars.push([x, y, z]);
    }

    stars = [
      [4, 0, 0],
      [4, 3, 3],
      [7, 6, 3],
      [7, 3.3, -6],
      [4, -3, 3],
    ];

    let o = [];

    function linf(v) {
      return Math.max(
        Math.abs(v[0]),
        Math.abs(v[1]),
        Math.abs(v[2]),
      );
    }

    stars.forEach((v, i) => {
      let n = linf(v);
      let [x, y, z] = v;
      x *= 3.0/n;
      y *= 3.0/n;
      z *= 3.0/n;
      o.push([x, y, z]);
    });

    let size = 0.15;

    stars.forEach((v, i) => {
      // Arrow
      let origin = new THREE.Vector3(v[0], v[1], v[2]);
      let dir = origin.clone().multiplyScalar(-1);
      let len = dir.length();
      dir.normalize();
      let h = new THREE.ArrowHelper(dir, origin, len, 0xFF55FF);

      // Point
      let m = new THREE.Mesh(
        new THREE.SphereGeometry(size, 32, 32),
        new THREE.MeshBasicMaterial({color: 0x00FFFF}),
      );
      m.position.set(v[0], v[1], v[2]);
      m.rotation.x = 2*Math.random()*Math.PI;
      m.rotation.y = 2*Math.random()*Math.PI;
      m.rotation.z = 2*Math.random()*Math.PI;

      // Add
      g.add(m);
      g.add(h);
    });

    g.add(sky(stars));
    g.position.y += 8.0;

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
   * ...
   */
  addGrassyField() {
    this.field = new GrassyField(
        14,
        14,
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
    cube.position.y = 4;;
    cube.position.z = z;
    // cube.rotation.y = Math.PI/4;
    // this.scene.add(cube);
  }

  loadObjs() {
    let loader = new THREE.OBJLoader();
    let scene = this.scene;
    loader.load(
      'obj/Tombstone.obj',
      (obj) => {
        // scene.add(obj);
      },
      (xhr) => {
      },
      (err) => {
        console.error(err);
      },
    );
  }

  addTombstones() {
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

    // this.addGrid();
    // let geo = this.floor.getMesh();

    // this.scene.add(new THREE.Mesh(geo, mat));
  }
  addGrid() {
    let mat = new THREE.LineBasicMaterial({color: 0xB7B7BA});
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
    let t = +new Date() / 3000.0 / 2.0;
    let f = Math.PI/4.0;
    let r = 90;
    f = t/10.0;
    let x = r*Math.cos(t);
    let z = r*Math.sin(t);
    let y =  params.y;

    let [a, b, c] = [r*Math.cos(f), y, r*Math.sin(f)];

    //udebugger;
    // console.log(this.u.time.value);
    /*
    this.sky.material.uniforms.time.value = 0.5*(Math.cos(t)+1);
    this.sky.material.uniforms.dir.value.x = 0.5*(Math.cos(t)+1);
    this.sky.material.uniforms.dir.value.y = 0.5*(Math.sin(t)+1);
    this.sky.material.uniforms.dir.value.z = 1.0;
    this.sky.material.needsUpdate = true;
    //*/

    // Set to zero
    /*
    this.sky.material.uniforms.dir.value.x = 0.0;
    this.sky.material.uniforms.dir.value.y = 0.0;
    this.sky.material.uniforms.dir.value.z = 0.0;
    //
    this.sky.rotation.x = (+2*t) % (2*Math.PI);
    this.sky.rotation.y = (-2*t) % (2*Math.PI);
    this.sky.rotation.z = (-3*t) % (2*Math.PI);
    //*/

    this.sky.rotation.x = 0;
    this.sky.rotation.y = 0;
    this.sky.rotation.z = 0;

    // ...
    this.camera.position.x = 90;
    this.camera.position.y = 10;
    this.camera.position.z = 50;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

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
