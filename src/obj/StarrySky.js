let vert = require('./shaders/starry.vert');
let frag = require('./shaders/starry.frag');

export function sky() {
  try {
    let size = 3;
    let skyBox = new THREE.CubeGeometry(size, size, size, 1, 1, 1);
    let skyMat = skyMaterial();
    let skyMesh = new THREE.Mesh(skyBox, skyMat);
    skyMesh.position.y += 5;
    return [skyMesh, {}];
  } catch (err) {
    console.log("Fail", err);
  }
} 
function skyTexture() {
  let width = Math.pow(2, 8);
  let height = Math.pow(2, 8);
  let size = width*height;
  let data = new Uint8Array(3*size);

  for (let i=0; i < size; i++) {
    data[3*i+0] = 55;
    data[3*i+1] = 55;
    data[3*i+2] = 55;
  }

  let tex = new THREE.DataTexture(
    data,
    width,
    height,
    THREE.RGBFormat,
  );

  tex = new THREE.TextureLoader().load("img/beach-1.png");

  console.log("~!!!", tex);

  return tex;
}

function skyMaterial() {

  let uniforms = {
    time: {value: 1.0},
    dir: {value: new THREE.Vector3(0.0, 0.0, 1.0), type: 'v3'},
  };

  let tex = skyTexture();

  console.log(">>", tex);

  let faceMaterials = [
    new THREE.MeshLambertMaterial({map: skyTexture()}),
    new THREE.MeshLambertMaterial({map: skyTexture()}),
    new THREE.MeshLambertMaterial({map: skyTexture()}),
    new THREE.MeshLambertMaterial({map: skyTexture()}),
    new THREE.MeshLambertMaterial({map: skyTexture()}),
    new THREE.MeshLambertMaterial({map: skyTexture()}),
  ];

  return new THREE.MeshLambertMaterial({map: skyTexture()});
}
