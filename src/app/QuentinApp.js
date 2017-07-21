import App from './App.js';
import QuentinLike from '../app-utils/Quentin.js';
import {add, scale} from '../math3.js';
import * as THREE from 'THREE';

export default class QuentinApp extends QuentinLike {
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
    this.pointLight1 = new THREE.PointLight(0x446666);
    this.pointLight2 = new THREE.PointLight(0x664444);
    this.ambientLight = new THREE.AmbientLight(0xBBBBBB);

    this.scene.add(this.pointLight1);
    this.scene.add(this.pointLight2);
    this.scene.add(this.ambientLight);

    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(new THREE.Color(0xFFEEFF));

    this.loadObj();
    this.app.time = 0;

    let mat = new THREE.MeshPhongMaterial({color: 0xEEFFFF});

    for (let i=0; i < 5; i++) {
      for (let j=0; j < 10; j++) {
        let x = 2*(i-2);
        let y = 0;
        let z = -3*j-1;

        let box = new THREE.BoxGeometry(1.5, 2+j, 2);
        let mesh = new THREE.Mesh(box, mat)
        mesh.position.set(x, y, z);
        this.scene.add(mesh);
      }
    }

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

    this.scene.add(this.getDot(p[0]));
    this.scene.add(this.getDot(p[1]));
    this.scene.add(this.getDot(p[2]));
    this.scene.add(this.getDot(p[3]));
  }

  loadObj() {
    this.obj_file = 'obj/trees/AS12_7.obj';
    let manager = new THREE.LoadingManager();
    manager.onProgress = function () { };
    let loader = new THREE.OBJLoader(manager);

    loader.load(this.obj_file, function (object) {
      object.position.x = 0;
      object.position.y = -1.5;
      object.position.z = 0;
      this.scene.add(object);
      console.log("Added");
    }.bind(this));
  }

  getDot([x, y, z], color) {
    color = color || 0x000000;
    let dotGeometry = new THREE.Geometry();
    dotGeometry.vertices.push(new THREE.Vector3(x, y, z));
    let dotMaterial = new THREE.PointsMaterial( { size: 3, sizeAttenuation: false, color: color} );
    return new THREE.Points(dotGeometry, dotMaterial);
  }

  update() {
    this.app.time += .01;
    let t = this.app.time/3.0 % 1.0;

    let x = 0;
    let y = 0;
    let z = 40;

    let p = [0, 0, 40];
    let q = [0, 0, 1.5];

    let a = 15;
    let b = 15;

    [x, y, z] = add(scale(p, 1-t), scale(q, t))

    this.camera.position.set(x, y, z);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.camera.fov = this.getFov(this.backwall, [x, y, z], [0, 0, 0]);
    this.camera.updateProjectionMatrix();

    this.pointLight1.position.set(-20, 25, 0);
    this.pointLight1.lookAt(new THREE.Vector2(0, 0, 0));

    this.pointLight2.position.set(20, 25, 0);
    this.pointLight2.lookAt(new THREE.Vector3(0, 0, 0));
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
