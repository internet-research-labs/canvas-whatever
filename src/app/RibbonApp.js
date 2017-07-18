import App from './App.js';
import Rib from '../Ribbon.js';
import * as THREE from 'THREE';
import {normalize, scale, sub, add, cross} from '../math3.js';


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



class Ribbon {
  constructor(center, direction) {

    this.center = [0, 0, 0];
    this.direction = normalize([1, 1, 0]);
    this.position = [0, 0, 0];

    this.width = 1; 

    this.vertices = [];
    this.faces = [];

    this.points = [];
    this.slopes = [];
    // this.disturbVertices();
  }

  computePoints() {
    let points = [];
    let slopes = [];
    let h = 0.003;

    let theta = 0;
    let delta = Math.PI/90;

    let distance = 1;
    let [x, y, z] = scale(normalize([4, 0, 0]), distance);
    let [x0, y0, z0] = [0, 0, 0];
    let [dx, dy, dz] = this.direction.slice();

    let f = function(t) {
      return [distance*Math.cos(t), distance*Math.sin(t)];
    }

    // Push initial
    points.push([x, y, z]);
    slopes.push([dx, dy, dz]);

    for (let i=1; i < 230; i++) {

      let p0 = f(theta);
      let p1 = f(theta+delta);

      [x0, y0, z0] = [x, y, z];

      // Update step
      x = x + dx;
      y = y + dy;
      z = z + dz;

      [x, y, z] = scale(normalize([x, y, z]), distance);

      let randomness = scale(normalize([Math.random(), Math.random(), Math.random()]), 0.05);
      [dx, dy, dz] = sub([x, y, z], [x0, y0, z0]);
      [dx, dy, dz] = scale(normalize(sub([dx, dy, dz], randomness)), 0.3);

      // Push
      points.push([x, y, z]);
      slopes.push([dx, dy, dz]);

      // Move
      theta += delta;
      distance = 2 + Math.cos(0.5*theta);
    }

    this.points = points;
    this.slopes = slopes;
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

    ribbon.computePoints();

    if (ribbon.points.length != ribbon.slopes.length) {
      throw "Fuck this";
    }


    // ... Just be sad, w/e
    let ribbonLength = ribbon.points.length;

    for (let i=0; i < ribbonLength; i++) {
      let [x, y, z] = ribbon.points[i];
      let [dx, dy, dz] = ribbon.slopes[i];

      let v = sub(
        normalize([x, y, z]),
        normalize(ribbon.center),
      );

      let u = normalize(ribbon.slopes[i]);
      let w = cross(u, v);

      let [a, b, c] = add([x, y, z], scale(w, +0.1));
      let [d, e, f] = add([x, y, z], scale(w, -0.1));

      this.scene.add(this.getDot(x, y, z));
      this.scene.add(this.getDot(a, b, c, 0x00AAAA));
      this.scene.add(this.getDot(d, e, f, 0x00AAAA));
    }

    // Draw some dots
    ribbon.points.forEach(function (v) {
      this.scene.add(this.getDot(v[0], v[1], v[2]));
    }.bind(this));


    let points = 90;
    let delta = Math.PI/points;
    let r = new Rib();

    for (let i=0; i < points; i++) {
      let x = Math.cos(i*delta);
      let z = Math.sin(i*delta);
      r.addPoint([x, 0, z], [0, 1, 0]);
    }

    console.log(r.build());

    this.t = 0;
  }

  getDot(x, y, z, color) {
    color = color || 0x000000;
    let dotGeometry = new THREE.Geometry();
    dotGeometry.vertices.push(new THREE.Vector3(x, y, z));
    let dotMaterial = new THREE.PointsMaterial( { size: 2, sizeAttenuation: false, color: color} );
    return new THREE.Points(dotGeometry, dotMaterial);
  }

  update() {
    // Rotate
    this.lines.rotation.x += 0.01;
    this.lines.rotation.y -= 0.05;
    this.lines.rotation.z += 0.02;

    this.t += 0.01;

    this.camera.x = Math.cos
    this.camera.position.set(
      30*Math.sin(-0.7*this.t),
      30*Math.cos(+0.7*this.t),
      30*Math.cos(2.+0.7*this.t),
    );

    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    /*
    this.ribbon.rotation.x -= 0.05;
    this.ribbon.rotation.y -= 0.01;
    this.ribbon.rotation.z += 0.02;
    */
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
