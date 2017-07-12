import App from './App.js';
import * as THREE from 'THREE';

export default class ReflectiveBandApp extends App {
  constructor(params) {
    super(params);
    this.el = params.el;
  }

  init() {
    this.app = {
      width: 400,
      height: 400,
    };

    this.renderer = new THREE.WebGLRenderer({
      antialias : true,
      canvas: this.el,
    });

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      15,
      this.app.width/this.app.height,
      0.1,
      100,
    );

    this.renderer.setClearColor(new THREE.Color(0x00FFFF));
    this.renderer.setSize(this.app.width, this.app.height);
  }

  setup() {
    this.init();
  }

  update() {
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
