let vert = require('./shaders/starry.vert');
let frag = require('./shaders/starry.frag');


/**
 * Return a sky object
 */
export function sky(stars) {
  try {
    let size = 4;
    let skyBox = new THREE.CubeGeometry(size, size, size, 1, 1, 1);
    let skyMat = skyMaterial(stars);
    let skyMesh = new THREE.Mesh(skyBox, skyMat);
    return skyMesh;
  } catch (err) {
    console.log("Fail", err);
  }
} 

/**
 * Return sky texture
 */
function skyTexture(stars) {
  let len = 4;
  let width = Math.pow(2, len);
  let height = Math.pow(2, len);
  let size = width*height;
  let data = new Uint8Array(4*size);

  for (let i=0; i < size; i++) {
    data[4*i+0] = 0;
    data[4*i+1] = 0;
    data[4*i+2] = 0;
    data[4*i+3] = 255;

    continue;
    data[4*i+0] = Math.floor(Math.random()*255);
    data[4*i+1] = Math.floor(Math.random()*255);
    data[4*i+2] = Math.floor(Math.random()*255);
    data[4*i+3] = 255;
  }

  function setWhite(lis, x, y) {
    let i = 4*(y*height+x);
    lis[i+0] = 255;
    lis[i+1] = 255;
    lis[i+2] = 255;
    lis[i+3] = 255;
  }

  stars = stars || [];

  stars.forEach(() => {
    let x = Math.floor(Math.random()*width);
    let y = Math.floor(Math.random()*width);
    setWhite(data, x, y);
  });

  let tex = new THREE.DataTexture(
    data,
    width,
    height,
    THREE.RGBAFormat,
    THREE.UnsignedByteType,
    THREE.UVMapping,
  );

  tex.needsUpdate = true;

  return tex;
}


/**
 * Return a sky material
 */
function skyMaterial(stars) {

  let uniforms = {
    time: {value: 1.0},
    dir: {value: new THREE.Vector3(0.0, 0.0, 1.0), type: 'v3'},
  };

  let faceMaterials = [
    new THREE.MeshBasicMaterial({map: skyTexture()}),
    new THREE.MeshBasicMaterial({map: skyTexture()}),
    new THREE.MeshBasicMaterial({map: skyTexture(stars)}),
    new THREE.MeshBasicMaterial({map: skyTexture()}),
    new THREE.MeshBasicMaterial({map: skyTexture()}),
    new THREE.MeshBasicMaterial({map: skyTexture()}),
  ];

  return faceMaterials;
}
