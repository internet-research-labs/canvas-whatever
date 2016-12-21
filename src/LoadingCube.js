var THREE = require('THREE');

var STATES = [
  'starting',
  'thinking',
  'success',
  'failure',
];

var TRANSITION_STATES = [
  'starting->thinking',
  'thinking->success',
  'thinking->failure',
];

export default class LoadingCube {
  constructor(params) {
    this.el = params.el;
    this.apect = this.el.width/this.el.height;
    this.cubes = [];
    this.camera = new THREE.PerspectiveCamera( 50, 0.5 * this.aspect, 1, 10000 );
    this.camera.position.x = 5;
    this.camera.position.y = 5;
    this.camera.position.z = 5;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.state = 'starting';
    this.scene = new THREE.Scene();

    // Setup renderer
    this.isRunning = true;


    // ....
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    console.log(this.el.width, this.el.height);
    this.renderer.setSize(300, 300);
    this.renderer.setClearColor(0x000000, 1);

    // Attach canvas
    this.el.appendChild(this.renderer.domElement);
  }

  start() {
    this.state = 'starting';
    this.scene.background = new THREE.Color( 0xff0000 );
  }

  think() {
    this.state = 'thinking';
  }

  succeed() {
    this.state = 'succeed';
  }

  fail() {
    this.state = 'failure';
  }

  kill() {
    this.state = 'killed';
  }

  draw() {
    // Do nothing
    if (!this.isRunning) {
      return;
    }

    this._draw();
  }

  _draw() {
    // this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
  }
}
