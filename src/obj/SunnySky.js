export class SunnySky {
  constructor({size, sunPosition}) {
    this.size = size;
    this.demoSun = this.getDemoSphere(sunPosition);
    this.geo = this.geometry();
    this.mat = this.material();
    this.sky = new THREE.Group();
    this.sky.add(new THREE.Mesh(this.geo, this.mat));
  }


  simulacrum() {
    console.log("[SIMULACRUM] Added");
    let g = new THREE.Group();

    let size = 100.0;
    let box = new THREE.BoxGeometry(size, size, size, 1, 1, 1);
    let mat = new THREE.MeshBasicMaterial({color: 0xFFFFFF});

    g.add(new THREE.Mesh(box, mat));

    return g;
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
    return new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: require('./shaders/sky.vert'),
      fragmentShader: require('./shaders/sky.frag'),
      side: THREE.DoubleSide,
      uniforms: {
        rayleigh: {value: 4.0},
        turbidity: {value: 4.9},
        mieDirectionalG: {value: 0.0},
        mieCoefficient: {value: 0.0},
        luminance: {value: 1.0},
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

  set(params) {
    console.log(params);
    this.mat.uniforms.rayleigh.value = params.rayleigh || this.mat.uniforms.rayleigh.value;
    this.mat.uniforms.turbidity.value = params.turbidity || this.mat.uniforms.turbidity.value;
    this.mat.uniforms.luminance.value = params.luminance || this.mat.uniforms.luminance.value;
    // this.mat.uniforms.mieDirectionalG.value = params.mieDirectionalG || this.mat.uniforms.mieDirectionalG.value;
    // this.mat.uniforms.mieCoefficient.value = params.mieCoefficient || this.mat.uniforms.mieCoefficient.value;
  }
}
