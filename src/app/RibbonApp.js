import App from './App.js';
import * as THREE from 'THREE';


function toGeometry(vertices, faces) {
  let geo = new THREE.Geometry();

  vertices.forEach(function (v) {
    geo.vertices.push(new THREE.Vector3(v[0], v[1], v[2]));
  });

  faces.forEach(function (f) {
    geo.faces.push(new THREE.Face3(f[0], f[1], f[2]));
  });

  return geo;
}


function sub(x, y) {
  return [
    y[0] - x[0],
    y[1] - x[1],
    y[2] - x[2],
  ];
}

function scale(v, s) {
  return [
    v[0]*s,
    v[1]*s,
    v[2]*s,
  ];
}

function normalize(v) {
  let n = v[0]*v[0]+v[1]*v[1]+v[2]*v[2];
  return [
    v[0]/n,
    v[1]/n,
    v[2]/n,
  ];
}


class Ribbon {
  constructor(center, direction) {

    this.center = [0, 0, 0];
    this.direction = normalize([0, 1, -1]);
    this.position = [.3, 0, 0];

    this.width = 1; 

    this.vertices = [];
    this.faces = [];


    let d = Math.PI/40;
    let incr = 0.01;

    let h = 0.5;

    let distance = 1;

    for (let i=0; i < 30; i++) {

      // Bottom part of faces
      let x = scale(normalize([this.position[0], this.position[1], 0]), distance);
      this.vertices.push([x[0], x[1], this.position[2]-0.4]);
      this.vertices.push([x[0], x[1], this.position[2]+0.4]);

      let p = [
        this.position[0] - h*this.direction[0],
        this.position[1] + h*this.direction[1],
        this.position[2] + 0,
      ];

      // Top part of faces
      x = scale(normalize([p[0], p[1], 0]), distance);
      this.vertices.push([x[0], x[1], p[2]-0.4]);
      this.vertices.push([x[0], x[1], p[2]+0.4]);

      this.position = p;

      // Hittin' off licks in the lambo
      this.faces.push([4*i+0, 4*i+1, 4*i+2]);
      this.faces.push([4*i+1, 4*i+2, 4*i+3]);

      //
      distance += 0.1;
    }

    // this.disturbVertices();
  }

  disturbVertices() {
    this.vertices.forEach(function (v) {
      let s = 0.1;
      v[0] += s*(Math.random() - 0.5);
      v[1] += s*(Math.random() - 0.5);
      v[2] += s*(Math.random() - 0.5);
      v[3] += s*(Math.random() - 0.5);
    });
  }
}

export default class RibbonApp extends App {
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

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      this.app.view_angle,
      this.app.aspect,
      this.app.near,
      this.app.far,
    );

    this.camera.position.set(0, 0, 40);
    this.camera.position.up = new THREE.Vector3(0, 1, 0);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Create scene
    this.scene = new THREE.Scene();

    // Lights
    this.pointLight1 = new THREE.PointLight(0x446666);
    this.pointLight2 = new THREE.PointLight(0x664444);
    this.ambientLight = new THREE.AmbientLight(0x999999);

    this.scene = new THREE.Scene();
    this.scene.add(this.pointLight1);
    this.scene.add(this.pointLight2);
    this.scene.add(this.ambientLight);

    let geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    let wireframe = new THREE.WireframeGeometry(geometry);
    let material = new THREE.LineBasicMaterial({
      color: 0xffffff, opacity: 1, linewidth: 3, vertexColors: THREE.VertexColors
    });
    this.lines = new THREE.LineSegments(wireframe);
    this.lines.position.x = 0;
    this.lines.position.y = 0;
    this.lines.position.z = 0;
    this.scene.add(this.lines);

    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(new THREE.Color(0xEEFFFF));

    let ribbon = new Ribbon(0, 0, 0);

    this.ribbon = new THREE.LineSegments(
      new THREE.WireframeGeometry(toGeometry(ribbon.vertices, ribbon.faces)),
    );

    console.log(this.ribbon);
    this.scene.add(this.ribbon);
  }

  update() {
    // Rotate
    this.lines.rotation.x += 0.01;
    this.lines.rotation.y -= 0.05;
    this.lines.rotation.z += 0.02;

    this.ribbon.rotation.x -= 0.05;
    this.ribbon.rotation.y -= 0.01;
    this.ribbon.rotation.z += 0.02;
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}