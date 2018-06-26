import * as THREE from 'THREE';

import {SphereSurface, SquareSurface} from '../square-grid.js';
import {debounce} from '../function-utils.js';

function _spherical(x, y, z) {
  let r = Math.sqrt(x*x+y*y+z*z);
  let t = Math.acos(z/r);
  let f = Math.atan(y/x);
  return [r, t , f];
}


// Return a blah
function grid(f, width, height) {
  return new THREE.LineSegments(
    new SphereSurface(f, 119).build(),
    new THREE.LineBasicMaterial({color: 0x000000}),
  );
}

// Return an instance of wavvey app
export default class HolyApp {
  constructor(params) {
    this.id = params.id;
    this.el = document.getElementById(this.id);
    this.app = {};
    this.width = this.el.offsetWidth;
    this.height = this.el.offsetHeight;
  }

  setup() {
    this.app = {
      view_angle: 15,
      aspect: this.width/this.height,
      near: 0.1,
      far: 2000,
    };

    // Camera
    this.setupCamera();

    // Scene
    this.scene = new THREE.Scene();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.el,
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xFFFFFF, 1);
    this.renderer.setPixelRatio(1.5);
    // this.renderer.setClearColor(0xFFFFFF);
    document.body.appendChild(this.renderer.domElement);

    /*
    let renderPass = new THREE.RenderPass(this.scene, this.camera);

    let copyPass = new THREE.ShaderPass(THREE.CopyShader);
    copyPass.renderToScreen = true;

    this.rgbPass = new THREE.ShaderPass( THREE.RGBShiftShader );
    this.rgbPass.uniforms[ 'amount' ].value = 0.0015;
    this.rgbPass.renderToScreen = true;

    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.setSize(this.width, this.height);
    this.composer.addPass(renderPass);
    // this.composer.addPass(copyPass);
    this.composer.addPass(this.rgbPass);
    */

    // Meshes
    this.grids = [
      grid((t, f) => { return 0.22*Math.sin(11.0*(t+f))+1.3; }, 10.0, 10.0),
    ];

    this.group = new THREE.Group();
    this.grids.forEach((v, _) => {
      v.rotation.x = Math.PI/2.0;
      this.group.add(v); });

    // Attach'em
    this.obscurum = this.getObscuredShape();

    this.group.position.set(0.0, 3.0, 0.0);
    this.obscurum.position.set(0.0, 3.0, 0.0);
    // this.scene.add(this.group);
    this.scene.add(this.obscurum);
    this.resize(this.width, this.height);
    this.camera.position.set(90.0, 0.0, 0.0);
    this.updatePosition(0.0, 0.0);
    this.loadLucy();
    this.setupLights();
  }

  loadLucy() {
    let loader =  new THREE.PLYLoader();
    loader.load('obj/Lucy100k.ply', (geo) => {
      geo.scale(5.8/1000.0, 5.8/1000., 5.8/1000.);
      geo.computeVertexNormals();
      let m = new THREE.Mesh(
        geo, 
        new THREE.MeshPhongMaterial({
          color: 0xB76E79,
          emissive: 0x000000,
          specular: 0x8E8E00,
          shininess: 20,
        }),
      );
      m.rotation.set(0, -Math.PI/2., 0);
      this.scene.add(m);
    });
  }


  getBetweenPoint(p, q) {
    let t = 0.5;
    return [
      t*(q.x-p.x)+p.x,
      t*(q.y-p.y)+p.y,
      t*(q.z-p.z)+p.z,
    ];
  }

  getObscuredShape() {
    let x = new THREE.Group();

    let c1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 20, 20),
      new THREE.MeshBasicMaterial({color: 0xFFFFFF}),
    );
    c1.position.set(0.0, 0.0, 9.0);

    let c2 = new THREE.Mesh(
      new THREE.BoxGeometry(3.0, 3.0, 3.0),
      new THREE.MeshBasicMaterial({color: 0xFFD700}),
    );
    c2.position.set(0.5, 0.0, -8.0);
    c2.rotation.set(1.0, -2.0, -0.3);

    x.add(c1);
    x.add(c2);
    return x;
  }

  // Return object containing all the necessary event handlers
  eventHandlers() {
    let self = this;
    let mouse = {x: 0.0, y: 0.0};

    return {
      resize: debounce(100, (ev) => {
        let size = Math.min(window.innerWidth, window.innerHeight);
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        self.resize(this.width, this.height);
      }),
      move: debounce(10, (ev) => {
        mouse.x = ev.clientX;
        mouse.y = ev.clientY;
        // let u = 1*ev.clientX/window.innerWidth-1.0;
        // let v = 1*ev.clientX/window.innerWidth-1.0;
        // this.rgbPass.uniforms['amount'].value = Math.sqrt(u*u+v*v)/298.+0.002;
        let y = 0.5*(2*mouse.y/window.innerHeight - 1.0);
        let z = 0.5*(2*mouse.x/window.innerWidth - 1.0);
        this.updatePosition(y, z);
      }),
    }
  }

  updatePosition(y, z) {
    let p = new THREE.Vector3(0.5, y, z);
    p.multiplyScalar(88.0);
    this.camera.position.copy(p);
  }

  update(params) {
    let [x, y, z] = this.getBetweenPoint(this.camera.position, this.group.position);
    let [r, t, f] = _spherical(x, y, z);
    this.camera.lookAt(this.group.position);
    this.camera.lookAt(0.0, 0.0, 0.0);
    this.obscurum.lookAt(this.camera.position);
    this.group.rotation.y = + new Date() / 1000.0;
  }

  setupLights() {
    let lights = [];
    lights[ 0 ] = new THREE.PointLight(0xffffff, 1, 100, 2);
    lights[ 1 ] = new THREE.PointLight(0xffffff, 1, 100, 2);
    lights[ 2 ] = new THREE.PointLight(0xffffff, 1, 100, 2);
    lights[ 3 ] = new THREE.AmbientLight(0x444444);
    lights[ 4 ] = new THREE.DirectionalLight(0x555555, 0.5);

    lights[ 0 ].position.set(0, 0, 10);
    lights[ 1 ].position.set(10, 0, 0);
    lights[ 2 ].position.set( - 1, - 2, - 1 );
    lights[ 3 ].position.set( - 1, - 2, - 1 );
    lights[ 4 ].position.set(10, 0, 10);
    lights[ 4 ].position.normalize();

    lights.forEach((v) => {
      v.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.0, 20, 20),
        new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000}),
      ));
    });

    this.scene.add( lights[ 0 ] );
    this.scene.add( lights[ 1 ] );
    this.scene.add( lights[ 2 ] );
    this.scene.add( lights[ 3 ] );
    this.scene.add( lights[ 4 ] );
  }
  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      this.app.view_angle,
      this.app.aspect,
      this.app.near,
      this.app.far
    );
  }

  resize(width, height) {
    /*
    this.width = width;
    this.height = height;
    this.app.aspect = this.width/this.height;
    this.camera.aspect = this.app.aspect;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
    // this.composer.setSize(this.width, this.height);
    // */
  }

  draw() {
    // this.composer.render(1.05);
    this.renderer.render(this.scene, this.camera);
  }
}
