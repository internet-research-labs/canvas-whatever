import App from './App.js';
import QuentinLike from '../app-utils/Quentin.js';
import {add, cross, sub, normalize, scale} from '../math3.js';
import {getElapsedTime,stringToHex} from '../utils.js';
import * as THREE from 'THREE';

import {SimulacrumSky, Sky} from '../obj/Sky.js';

import RibbonPath from '../RibbonPath.js';
import Ribbon from '../Ribbon.js';

import SimplexNoise from 'simplex-noise';

// Generative objects
import {GrassyField} from '../obj/GrassyField.js';
import {Land} from  '../obj/Land.js';

import TriangleSurface from '../TriangleSurface.js';

function norm(v) {
  return Math.sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
}

export default class KanyeApp extends QuentinLike {
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
    this.sky = new Sky({
      size: 300.0,
      sunPosition: [1, 0, 0],
      simulacrum: true,
    });

    // Simulacrum
    this.sim = new SimulacrumSky({
      size: 0.3,
      sunPosition: [1, 0, 0],
    });

    // this.simulacrum = this.
    // this.scene.add(this.sky.simulacrum.group);
    this.scene.add(this.sky.sky);
    this.scene.add(this.sim.object());

    // Add visible components

    let start = getElapsedTime();
    this.fieldMesh = {}

    this.addFloor();
  }

  set(params) {
    this.sky.set(params);
    this.sim.set(params);
  }

  setGlobePosition(theta, fi) {
    this.sky.setGlobePosition(theta, fi);
    this.sim.setGlobePosition(theta, fi);
  }

  // Add floor
  addFloor() {
    let mat = new THREE.MeshPhongMaterial({
      color: 0x000CCC,
      emissive: 0x000000,
      specular: 0x000000,
      shininess: 0.0,
      // shading: THREE.SmoothShading,
      flatShading: true,
      side: THREE.DoubleSide,
    });

    let _abc = (function () {
      let s = 30.0;
      let simplex = new SimplexNoise("whatever");
      return (x, y) => {
        return 10.0*simplex.noise2D(x/s, y/s);
      };
    }());

    this.floor = new Land({
      height: 100.0,
      width: 100.0,
      floor: _abc,
    });

    let loader = new THREE.FontLoader();
    loader.load('helvetiker.json', (font) => {
      let textGeo = new THREE.TextGeometry(
        "shake that body, party that bod",
        {
          font: font,
          size: 3.0,
          height: 0.01,
          curveSegments: 12,
          bevelEnabled: false,
        },
      );
      let textMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
      this.scene.add(new THREE.Mesh(textGeo, textMat));
    });

    let floorMat = new THREE.MeshBasicMaterial({
      color: 0x002222,
      wireframe: false,
      side: THREE.DoubleSide,
    });

    let surface = new TriangleSurface(this.floor.f, 4.0, 1000.0, 1000.0);

    this.scene.add(new THREE.Mesh(surface.build(), floorMat));
  }

  update(params) {
    let t = +new Date() / 200.0 / 1.0;
    let f = t/70.;

    // ...
    let TWOPI = 2*Math.PI;
    let theta = f % 2*Math.PI;

    // xD
    let [a, b, c] = [5, 9.0, 0];
    let [j, k, l] = [a-6.0, b, c];

    this.sim.objects.group.position.set(j, k, l);
    // this.sky.simulacrum.group.rotation.set(0, Math.PI/2. + 0.1, 0);

    this.camera.position.set(a, b, c);
    this.camera.lookAt(j, k, l);

    // ...
    let u = 9.*theta;
    let r = 0.3;
    let x = r*-3.0;
    let y = r*0.3*Math.cos(u)+0.005;
    let z = r*0.3*Math.sin(u);

    this.sky.setSunPosition(x, y, z);
    this.sim.setSunPosition(x, y, z);

    this.sky.setGlobeRotation(t/100.0);
    // this.sky.simulacrum.setGlobeRotation(t, 100.0);
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
