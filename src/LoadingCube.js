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

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: 0x000000,
    });
    this.singleCube = new THREE.Mesh(geometry, material);

    //this.singleCube.position.x = 0;
    //this.singleCube.position.y = 0;
    //this.singleCube.position.z = 0;


    this.cubeList = [];

    // this.camera.position.x = 5;
    // this.camera.position.y = 5;
    this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000 );

    this.camera.position.z = 5;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.state = 'starting';
    this.scene = new THREE.Scene();
    this.scene.add(this.singleCube);

    this.singleCube.rotation.x += 0.1
    this.singleCube.rotation.y += 0.8
    this.singleCube.rotation.y -= 0.4

    // Setup renderer
    this.isRunning = true;


    // ....
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(300, 300);
    this.renderer.setClearColor(0x000000, 1);

    // Attach canvas
    this.el.appendChild(this.renderer.domElement);

    console.log("Finished creating");
  }

  start() {
    this.state = 'starting';
    this.scene.background = new THREE.Color( 0xFFFFFF );
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