import App from './App.js';
import * as THREE from 'THREE';
/**
 *
 *
 *
 */

export default class CouchApp extends App {
  constructor(params) {
    super(params);
    this.id = params.id;
    this.el = document.getElementById(this.id);
    this.app = {};
  }

  init() {
    var self = this;

    // okay
    console.log("!?!?", 1);
    self.ambientColor = [ 0xCF, 0xCF, 0xCF ];
    self.pointColor   = [ 0x66, 0x66, 0x66 ];

    let w = this.el.parentElement.offsetWidth;
    let h = this.el.parentElement.offsetHeight;

    self.app.width      = w;
    self.app.height     = h;
    self.app.view_angle = 15;
    self.app.aspect     = w/h;
    self.app.near       = 0.1;
    self.app.far        = 10000;
    self.app.iterations = 0;
    self.app.time       = 0;


    self.params   = { y : 0, speed : 30.0 };
    self.scene    = new THREE.Scene();
    self.renderer = new THREE.WebGLRenderer({
      antialias : true,
      canvas: this.el,
    });

    if (!this.renderer) {
      this.renderer = new THREE.CanvasRenderer();
    }

    self.camera = {};
    self.camera.persp = new THREE.PerspectiveCamera(
      this.app.view_angle,
      this.app.aspect,
      this.app.near,
      this.app.far
    );
    
    console.log(
      this.app.view_angle,
      this.app.aspect,
      this.app.near,
      this.app.far
    );



    // self.camera.eye      = new THREE.Vector3(0, 0, 0);
    // self.camera.dest     = new THREE.Vector3(0, 0, 0);
    //// self.camera.position = new THREE.Vector3(0, 0, 3);

    var manager = new THREE.LoadingManager();
    manager.onProgress = function () { };

    var loader = new THREE.OBJLoader(manager);

    this.renderer.setSize(this.app.width, this.app.height);

    this.couches = new Array();

    this.pointLight1   = new THREE.PointLight(0x446666);
    this.pointLight2   = new THREE.PointLight(0x664444);
    this.ambientLight = new THREE.AmbientLight(0x999999);
    this.scene.add(this.pointLight1);
    this.scene.add(this.pointLight2);
    this.scene.add(this.ambientLight);


    var scene = this.scene;

    var COUCH_TIME = 1800;

    setInterval(function () {
      self.addCouch();
    }, COUCH_TIME);

    setTimeout(function () {
      setInterval(function () {
        self.removeCouch();
      }, COUCH_TIME);
    }, 13000);


    this.renderer.setClearColor(new THREE.Color(0xFFFFFF));
  }

  update() {
    this.app.time += .00005;

    this.camera.persp.position.set(0, 15, 0);
    this.camera.persp.up = new THREE.Vector3(0, 1, 0);
    this.camera.persp.lookAt(new THREE.Vector3(0, 0, 0));

    this.pointLight1.position.set(-20, 25, 0);
    this.pointLight1.lookAt(new THREE.Vector3(0, 0, 0));

    this.pointLight2.position.set(20, 25, 0);
    this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));


    for (var i=0; i < this.couches.length; i++) {
      this.couches[i].update();
    }
  }

  // Draw cube to scene
  draw() {
    this.renderer.render(this.scene, this.camera.persp);
  }

  addCouch() {
    var self = this;
    var couch = new Couch();

    // let geometry = new THREE.BoxGeometry( 200, 200, 200 );
    // let material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
    // let cube = new THREE.Mesh( geometry, material );
    // self.scene.add(cube);

    couch.loaded(function () {
      if (!couch.obj)
        return;

      self.couches.push(couch);
      var x = self.scene.add(self.couches[self.couches.length-1].obj);
    });
  }

  removeCouch() {
    var self = this;
    var obj = self.couches.shift();
    self.scene.remove(obj.obj);
  };
}

export class Couch extends App {

  init() {
    this.manager = new THREE.LoadingManager();
    this.manager.onProgress = function () { };
    this.loader  = new THREE.OBJLoader(this.manager);
  }

  constructor(params) {
    super(params);
    var self = this;

    // Related to the Object
    self.obj_file = 'obj/Couch.obj';
    self.obj      = undefined;
    self.is_loaded = false;

    var x = 8.0;
    var y = 8*(2*Math.random() - 1.0);
    var z = 2*Math.random() - 1.0;

    var xr = Math.random() * 1.0 - 0.5;
    var yr = Math.random() * 1.0 - 0.5;
    var zr = Math.random() * 1.0 - 0.5;

    self.position     = { x : x, y : y, z : z };
    self.velocity     = { x : -4.0, y : 0.0, z : 0.0 };
    self.acceleration = { x : 0.0, y : 0.0, z : 0.0 };

    self.rotation     = { x : 0.0, y : 0.0, z : 0.0 };
    self.rotation_vel = { x : xr, y : yr, z : zr };

    self.time_step    = 0.005 * Math.random() + 0.005;

    self.color    = [ 0, 0, 0 ];

    self.init();

    // Callback functions
    self.success = undefined;
    self.failure = undefined;

    self.finished_loading = function () {
      if (typeof self.success === 'function')
        self.success.apply(self)
      self.is_loaded = true;
    };

    setTimeout(function () {
      self.load(self.obj_file);
    }, 1000);
  }

  load(file_name) {
    var self = this;
    this.loader.load(self.obj_file, function (object) {
      self.obj = object;
      self.obj.position.x = self.position.x;
      self.obj.position.y = self.position.y;
      self.obj.position.z = self.position.z;
      self.finished_loading();
    });
  };

  update() {
    var self = this;

    var t = self.time_step;

    self.velocity.x += t * self.acceleration.x;
    self.velocity.y += t * self.acceleration.y;
    self.velocity.z += t * self.acceleration.z;

    self.position.x += t * self.velocity.x;
    self.position.y += t * self.velocity.y;
    self.position.z += t * self.velocity.z;

    self.rotation.x += t * self.rotation_vel.x;
    self.rotation.y += t * self.rotation_vel.y;
    self.rotation.z += t * self.rotation_vel.z;

    self.obj.position.set(this.position.x, this.position.y, this.position.z);

    self.obj.rotation.x = self.rotation.x;
    self.obj.rotation.y = self.rotation.y;
    self.obj.rotation.z = self.rotation.z;
  };

  loaded(success) {
    this.success = success;
  };
}
