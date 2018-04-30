export class SunnySky {
  constructor(size) {
    this.size = size;
    this.geo = this.geometry();
    this.mat = this.material();
    this.sky = new THREE.Mesh(this.geo, this.mat);
  }

  geometry() {
    let size = this.size;
    let geo = new THREE.BoxGeometry(size, size, size, 1, 1, 1);
    return geo;
  }

  material() {
    let vert = require('./shaders/sky.vert');
    let frag = require('./shaders/sky.frag');
    return new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        theta: {value: 0.3},
        size: {value: this.size},
      },
    });
  }
}
