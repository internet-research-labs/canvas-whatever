import App from './App.js';
import QuentinLike from '../app-utils/Quentin.js';
import {add, cross, sub, normalize, scale} from '../math3.js';
import * as THREE from 'THREE';

import RibbonPath from '../RibbonPath.js';
import Ribbon from '../Ribbon.js';
import TriangleSurface from '../TriangleSurface.js';


export default class GeodeApp extends QuentinLike {
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
    this.pointLight1 = new THREE.PointLight(0x223333, 2, 800);
    this.pointLight2 = new THREE.PointLight(0x332222, 2, 800);
    this.ambientLight = new THREE.AmbientLight(0xBBBBBB);

    // var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    // directionalLight.position.set( 1, 1, 1 ).normalize();
    // this.scene.add( directionalLight );

    this.scene.add(this.pointLight1);
    this.scene.add(this.pointLight2);
    this.scene.add(this.ambientLight);

    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(new THREE.Color(0xFFEEFF));

    this.app.time = 0;

    let mat = new THREE.MeshPhongMaterial({
      color: 0x2194CE,
      emissive: 0x0,
      specular: 0x111111,
      reflectivity: 0.2,
      shininess: 30,
      shading: THREE.SmoothShading,
      side: THREE.DoubleSide,
    });

    this.cameraTrack = this.quentin(
      this.camera.position,
      scale(this.camera.position, 0.75),
    );

    this.camera.position.set(0, 0, 40);

    let camera_pos = [
      this.camera.position.x,
      this.camera.position.y,
      this.camera.position.z,
    ];

    let p = this.getPlane(
      this.camera.fov,
      camera_pos,
      [0, 0, 0],
    );

    this.backwall = this.getPlaneWidth(
      this.camera.fov,
      camera_pos,
      [0, 0, 0],
    );

    this.view_angle = this.getFov(this.backwall, camera_pos, [0, 0, 0]);

    this.surface = new TriangleSurface(
      // function (x, y) { return {x: x, y: Math.cos(y)}; },
      function (x, y) { return Math.cos(x)*Math.sin(y); },
      0.3
    );
    this.scene.add(new THREE.Mesh(this.surface.build(), mat));
  }

  update() {
    this.app.time += .01;
    let t = this.app.time/3.0 % 1.0;

    let x = 0;
    let y = 10;
    let z = 10;

    let p = [0, 0, 40];
    let q = [0, 0, 1.5];

    let a = 15;
    let b = 15;

    this.camera.position.set(x, y, z);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.camera.fov = this.getFov(this.backwall, [x, y, z], [0, 0, 0]);
    this.camera.updateProjectionMatrix();

    this.pointLight1.position.set(x-10, y, z);
    this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));

    this.pointLight2.position.set(x+10, y, z);
    this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
