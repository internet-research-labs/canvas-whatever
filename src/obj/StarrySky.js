let vert = require('./shaders/starry.vert');
let frag = require('./shaders/starry.frag');


let SKY_SIZE = 2;


// Return the L-infinity norm of a 3-array
function linf(v) {
  return Math.max(
    Math.abs(v[0]),
    Math.abs(v[1]),
    Math.abs(v[2]),
  );
}


/**
 * Return a sky object
 */
export function sky(stars) {
  try {
    let size = 2*SKY_SIZE;
    let skyBox = new THREE.CubeGeometry(size, size, size, 1, 1, 1);
    let skyMat = skyMaterial(stars);
    let skyMesh = new THREE.Mesh(skyBox, skyMat);
    return skyMesh;
  } catch (err) {
    console.log("Fail", err);
  }
} 


/**
 * Return information to determine which face the texture is on
 */
function sidetc(v) {
  let norm = -1;
  let sign = undefined;
  let coord = -1;

  for (let i=0; i < v.length; i++) {
    let x = Math.abs(v[i]);
    if (x > norm) {
      norm = x;
      sign = v[i] >= 0 ? 1 : -1;
      coord = i;
    }
  }

  return [norm, sign, coord];
}

/**
 * Return uv-coord from the xyz-coord
 */
function remap([x, y, z], skyWidth, skyHeight) {
  let [n, s, i] = sidetc([x, y, z]);
  let [u, v] = [-1, -1];

  if (s < 0) {
    throw "Can't handle negatives... yet";
  }

  // X-coord dominant
  switch (i) {
  case 0:
    if (s > 0) {
      u = -z/n;
      v = y/n;
    }
    break;
  default:
    throw "What the fuck";
  }

  console.log(i, s);

  u = (u+1)/2.*skyWidth;
  v = (v+1)/2.*skyHeight;

  console.log("(" + x + ", " + y + ", " + z + ") => (" + u + ", " + v + ")");
  // console.log("(x, y, z) = (" + x + ", " + y + ", " + z + ")");
  // console.log("(u, v) = (" + u + ", " + v + ")");

  u = Math.floor(u);
  v = Math.floor(v);

  return [u, v];
}

/**
 * Return sky texture
 */
function skyTexture(stars) {
  let len = 4;
  let width = Math.pow(2, len);
  let height = Math.pow(2, len);
  width = 25;
  height = 25;
  let size = width*height;
  let data = new Uint8Array(4*size);

  for (let i=0; i < size; i++) {
    data[4*i+0] = 0;
    data[4*i+1] = 0;
    data[4*i+2] = 0;
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

  stars.forEach((v) => {
    let [x, y] = remap(v, width, height);
    console.log("->", x, y);
    if (x >= 0 && y >= 0) {
      setWhite(data, x, y);
    }
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

function t() {
  let len = 4;
  let width = Math.pow(2, len);
  let height = Math.pow(2, len);
  let size = width*height;
  let data = new Uint8Array(4*size);

  for (let i=0; i < size; i++) {
    data[4*i+0] = 15;
    data[4*i+1] = 55;
    data[4*i+2] = 55;
    data[4*i+3] = 255;
  }

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
    new THREE.MeshBasicMaterial({map: skyTexture(stars)}),
    new THREE.MeshBasicMaterial({map: t()}),
    new THREE.MeshBasicMaterial({map: t()}),
    new THREE.MeshBasicMaterial({map: t()}),
    new THREE.MeshBasicMaterial({map: t()}),
    new THREE.MeshBasicMaterial({map: t()}),
  ];

  return faceMaterials;
}
