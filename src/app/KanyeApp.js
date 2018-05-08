import App from './App.js';
import QuentinLike from '../app-utils/Quentin.js';
import {add, cross, sub, normalize, scale} from '../math3.js';
import {getElapsedTime,stringToHex} from '../utils.js';
import * as THREE from 'THREE';

import {sky, StarrySky} from '../obj/StarrySky.js';
import {SunnySky} from '../obj/SunnySky.js';

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
    this.sky = this.getSky();
    // this.sky.sky.position.y = 3.0;

    this.scene.add(this.sky.sky);
    this.setTheta(0.0);

    // Helper setup functions
    this.setupTrack();

    // Add visible components

    let start = getElapsedTime();
    this.fieldMesh = {}

    // this.addFloor();

    // Torus
    /*
    let geo = new THREE.TorusKnotBufferGeometry(10, 2, 100, 16);
    let mat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    this.torus = new THREE.Mesh(geo, mat);
    this.scene.add(this.torus);
    */
  }

  // Setup a camera track... but in this case actually do nothing
  setupTrack() {
    this.camera.position.set(0, 30, 80);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }


  /**
   * Return a sky [and helper objects]
   */
  getSky() {
    return new SunnySky({
      size: 15.0,
      sunPosition: [1, 0, 0],
    });
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
      side: THREE.BackSide,
    });
    this.fieldMesh.material = this.grassMaterial;
    // this.fieldMesh.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, });
  }

  // Set the theta of the sky
  setTheta(theta) {
    this.skyTheta = theta;
    this.skyAxis = new THREE.Vector3(
      Math.cos(-theta),
      Math.sin(-theta),
      0.0,
    );
  }


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
      height: 900,
      width: 900,
      floor: _abc,
    });

    let images = [];

    let loader = new THREE.FontLoader();
    loader.load('helvetiker.json', (font) => {
      let textGeo = new THREE.TextGeometry(
        "fuck",
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

    let cubeTex = new THREE.CubeTexture(
      images,
      THREE.CubeReflectionMapping,
    );
    cubeTex.wrapS = THREE.RepeatWrapping;
    cubeTex.wrapT = THREE.RepeatWrapping;
    cubeTex.repeat.set( 4, 4 );

    let floorMat = new THREE.MeshBasicMaterial({
      color: 0x004455,
      // envMap: this.cubeCamera.renderTarget,
      reflectivity: 0.95,
      wireframe: true,
      side: THREE.BackSide,
    });

    let surface = new TriangleSurface(this.floor.f, 1, 900, 900);

    this.scene.add(new THREE.Mesh(surface.build(), floorMat));
  }

  update(params) {
    let t = +new Date() / 200.0 / 1.0;
    let f = t/70.;

    let [a, b, c] = [100, 100, 100];

    // ...
    let TWOPI = 2*Math.PI;
    let theta = f % 2*Math.PI;

    // xD
    this.camera.position.set(a, b, c);
    this.camera.lookAt(0, 0, 0);
    this.sky.mat.uniforms.theta.value = theta;

    // ...
    let u = 7.*theta;
    let x = 20.*Math.cos(u);
    let y = 20.*Math.sin(-u);
    let z = 0.;
    this.sky.setSunPosition(x, y, z);
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
