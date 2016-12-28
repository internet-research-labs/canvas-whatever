import {FlowBuilder, Flow, FlowState} from './Flow.js';
import {makeArray3} from './utils.js';

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



class SplittableCube {
  constructor(position, cubeSize, spacing) {
    this.position = position || new THREE.Vector3(0, 0, 0);
    this.smallCubeSize = cubeSize || 1;
    this.spacing = spacing || 0.1*cubeSize;

    this.isSplit = true;
    this.group = new THREE.Group();
    this._setupSmallCubes(this.smallCubeSize);

    this._forCubes(function (cube) {
      this.group.add(cube);
    });


    this.group.rotation.x += 1.0;
    this.group.rotation.y += 1.6;
    this.group.rotation.z -= 2.0;
  }

  _newCube() {
    let geometry = new THREE.BoxGeometry(
      this.smallCubeSize,
      this.smallCubeSize,
      this.smallCubeSize
    );
    let material = new THREE.MeshNormalMaterial();
    return new THREE.Mesh(geometry, material);
  }

  /**
   * Worst function ever
   */
  _setupSmallCubes(cubeSize) {
    this.cubes = makeArray3(3, 3, 3);

    this._forCubes(function (_, i, j, k) {
      let x = this.position.x + (j-1) * (this.smallCubeSize + this.spacing);
      let y = this.position.y + (i-1) * (this.smallCubeSize + this.spacing);
      let z = this.position.z + (k-1) * (this.smallCubeSize + this.spacing);

      this.cubes[i][j][k] = this._newCube();
      cube = this.cubes[i][j][k];
      cube.position.x = x;
      cube.position.y = y;
      cube.position.z = z;
    });
  }

  _forCubes(callback) {
    for (let i=0; i < 3; i++) {
      for (let j=0; j < 3; j++) {
        for (let k=0; k < 3; k++) {
          callback.call(this, this.cubes[i][j][k], i, j, k);
        }
      }
    }
  }

  _positionSmallCubes() {
  }

  split(distance) {
  }

  unsplit() {
  }
}

export default class LoadingCube {
  constructor(params) {
    this.el = params.el;
    this.apect = this.el.width/this.el.height;

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      // wireframe: true,
      color: 0x000000,
    });
    this.singleCube = new THREE.Mesh(geometry, material);

    this.cubeList = [];

    // this.camera.position.x = 5;
    // this.camera.position.y = 5;
    this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000 );

    this.camera.position.z = 5;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.state = 'starting';
    this.scene = new THREE.Scene();

    // ...
    this.splittableCube = new SplittableCube(new THREE.Vector3(0, 0, 0), 1);
    this.scene.add(this.splittableCube.group);

    // Setup renderer
    this.isRunning = true;


    // ....
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(300, 300);
    this.renderer.setClearColor(0xFFFFFF, 1);

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
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
  }
}
