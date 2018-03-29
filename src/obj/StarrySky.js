let vert = require('./shaders/starry.vert');
let frag = require('./shaders/starry.frag');

export function sky() {
  console.log("Made a sky");
  try {
    let size = 200;
    let skyBox = new THREE.BoxGeometry(size, size, size);
    let skyMat = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {},
      side: THREE.DoubleSide,
    });
    return new THREE.Mesh(skyBox, skyMat);
  } catch (err) {
    console.log("Fail");
  }
}
