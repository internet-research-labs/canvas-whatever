export class SunnySky {
  constructor({size, sunPosition}) {
    this.size = size;


    this.demoSun = this.getDemoSphere([15, 0, 0]);


    this.geo = this.geometry();
    this.mat = this.material();
    this.sky = new THREE.Group();

    this.sky.add(new THREE.Mesh(this.geo, this.mat));
    this.sky.add(this.demoSun);
  }

  getDemoSphere([x, y, z]) {
    let geo = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({color: 0x000000}),
    );
    geo.position.x = x;
    geo.position.y = y;
    geo.position.z = z;
    return geo;
  }

  geometry() {
    let size = this.size;
    let geo = new THREE.BoxGeometry(size, size, size, 1, 1, 1);
    return geo;
  }

  // Return material for
  material() {
    let vert = require('./shaders/sky.vert');
    let frag = require('./shaders/sky.frag');
    return new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: vert,
      fragmentShader: frag,
      side: THREE.BackSide,
      uniforms: {
        sunPosition: {value: this.demoSun.position},
        theta: {value: 0.3},
        size: {value: this.size},
      },
    });
  }

  setSunPosition(x, y, z) {
    this.demoSun.position.x = x;
    this.demoSun.position.y = y;
    this.demoSun.position.z = z;
  }
}
