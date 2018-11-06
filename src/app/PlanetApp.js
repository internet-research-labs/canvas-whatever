import * as THREE from 'THREE';

import {SphereSurface2, SquareSurface} from '../square-grid.js';
import {debounce} from '../function-utils.js';
import {random} from '../utils.js';
import {RepeatSimplexNoise2} from '../noise.js';


// Return a blah
function grid(f, width, height) {
  let points = new SphereSurface2(f, 20).construct();
  let geo = new SphereSurface2(f, 90).geo();
  let g = new THREE.Group();
  geo.computeFaceNormals();
  geo.computeFaceNormals();
  let y = new THREE.Mesh(
    geo,
    //new THREE.MeshNormalMaterial({
    new THREE.MeshPhongMaterial({
      // color: 0xB76E79,
      color: 0xCCCCCC,
      emissive: 0x111111,
      specular: 0x444444,
      shininess: 90.0,
      //side: THREE.DoubleSide,
    }),
  );

  geo.receiveShadow = true;
  geo.castShadow = true;
  y.receiveShadow = true;
  y.castShadow = true;
  //*/

  var lineMaterial = new THREE.LineBasicMaterial({
    // color: 0x000000,
    color: 0xFFFFFF,
    transparent: true,
    opacity: 0.5,
  });

  let z = new THREE.LineSegments( geo, lineMaterial );
  // g.add(x);
  g.add(y);
  //g.add(z);
  return g;
}

// Return an instance of wavvey app
export default class PlanetApp {
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

    this.meta = {
      lastPosition: new THREE.Vector3(0.0, 0.0, 0.0),
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

    let noise = new RepeatSimplexNoise2();

    // Meshes
    this.grids = [
      grid((t, f) => { return 1*noise.at(2*t, 2*f)+6.0; }),
      // grid((t, f) => { return 0.22*Math.sin(5*(t+f))+4.0; }, 10.0, 10.0),
      // grid((t, f) => { return random(0.0, 0.1)+0.22*Math.sin(5*(t+f))+4.0; }, 10.0, 10.0),
      // grid((t, f) => { return 4.0+random(0.0, 0.5); }),
      // grid((t, f) => { return 4.0; }),
    ];

    // Grids
    this.group = new THREE.Group();
    this.grids.forEach((v, _) => {
      v.rotation.x = Math.PI/2.0;
      this.group.add(v);
    });

    // Attach'em
    //let directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
    //let directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
    //this.scene.add(directionalLight);
    let light0 = new THREE.AmbientLight(0x777777);
    let light1 = new THREE.DirectionalLight( 0xcccccc, 0.4 );
    let light2 = new THREE.PointLight( 0xff0000, 0.5 );
    let light3 = new THREE.PointLight( 0x00ffff, 0.5 );
    light2.position.set(-2.8, 0.0, -15.0);
    light3.position.set(-4.0, 0.0, -15.0);

    this.scene.add(light0);
    this.scene.add(light1);
    this.scene.add(light2);
    this.scene.add(light3);

    this.scene.add(this.group);
    this.updatePosition(0.0, 0.0);
    this.resize(this.width, this.height);
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
        let y = -1*(2*mouse.y/window.innerHeight - 1.0);
        let z = -1*(2*mouse.x/window.innerWidth - 1.0);
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
    if (!this.meta.lastPosition.equals(this.camera.position)) {
      this.meta.lastPosition.copy(this.camera.position);
      this.camera.lookAt(0.0, 0.0, 0.0);
    }
    this.group.rotation.y = + new Date() / 1000.0;
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
    this.width = width;
    this.height = height;
    this.app.aspect = this.width/this.height;
    this.camera.aspect = this.app.aspect;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
    // this.composer.setSize(this.width, this.height);
  }

  draw() {
    // this.composer.render(1.05);
    this.renderer.render(this.scene, this.camera);
  }
}
