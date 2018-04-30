export class SunnySky {
  constructor(size) {
    this.size = size;

    this.sky = new THREE.Mesh(
      this.geometry(),
      new THREE.MeshBasicMaterial({color: 0xCCCCCC}),
    );
  }

  geometry() {
    let size = this.size;
    return new THREE.BoxGeometry(size, size, size, 1, 1, 1);
  }

  material() {
    let vert = require('./shaders/sky.vert');
    let frag = require('./shaders/sky.frag');
    return new THREE.ShaderMaterial({
      vertShader: vert,
      fragShader: frag,
    });
  }
}
