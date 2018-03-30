let vert = require('./shaders/starry.vert');
let frag = require('./shaders/starry.frag');

export function sky() {
  try {
    let uniforms = {
      time: {value: 1.0},
      dir: {value: new THREE.Vector3(0.0, 0.0, 1.0), type: 'v3'},
    };
    let size = 10;
    let skyBox = new THREE.BoxGeometry(size, size, size);
    let skyMat = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: uniforms,
      side: THREE.DoubleSide,
    });
    console.log("Made a sky");
    return [new THREE.Mesh(skyBox, skyMat), uniforms];
  } catch (err) {
    console.log("Fail");
  }
}
