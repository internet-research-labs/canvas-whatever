import {FlowBuilder, Flow, FlowState} from './Flow.js';

var THREE = require('THREE');

let FLOW_STATES = new FlowBuilder()
  .addState("starting")
  .addState("thinking")
  .addState("success")
  .addState("failure")
  .addConnection("starting", "thinking")
  .addConnection("thinking", "success")
  .addConnection("thinking", "failure")
  .build();

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

    this.singleCube.rotation.x += 0.3
    this.singleCube.rotation.y += 0.8
    this.singleCube.rotation.y -= 1.4

    // Setup renderer
    this.isRunning = true;


    // ....
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(300, 300);
    this.renderer.setClearColor(0x000000, 1);

    // Attach canvas
    this.el.appendChild(this.renderer.domElement);


    this.currentState = FLOW_STATES.getState("starting");
  }

  getStates() {
    throw new Error("Implement getStates");
  }

  setState(stateId) {
    var newState = FLOW_STATES.getState(stateId);
    FLOW_STATES.hasConnection(this.currentState, newState);
    this.currentState = newState;
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
