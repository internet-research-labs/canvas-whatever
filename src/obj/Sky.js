export class Sky {
  // Constructor
  constructor({size, sunPosition, simulacrum}) {
    this.size = size;
    this.demoSun = this.getDemoSphere(sunPosition);
    this.geo = this.geometry();
    this.mat = this.material();
    this.sky = new THREE.Group();
    this.sky.add(new THREE.Mesh(this.geo, this.mat));

    if (simulacrum) {
      this.simulacrum = this.simulacrum(0, 0, 0);
      console.log("[SIMULACRUM] Added");
    }
  }

  globe() {
    let g = new THREE.Group();
    let mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 30, 30),
      new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        color: 0xDDDDDD,
        wireframe: true,
      }),
    );

    function _dir(p, c) {
      let g = new THREE.Geometry();
      g.vertices.push(new THREE.Vector3(0, 0, 0));
      g.vertices.push(new THREE.Vector3(p[0], p[1], p[2]));
      let m = new THREE.LineBasicMaterial({color: c});
      return new THREE.Line(g, m);
    }

    let l = 0.2;
    g.add(_dir([l, 0, 0], 0xFF0000));
    g.add(_dir([0, l, 0], 0x00FF00));
    g.add(_dir([0, 0, l], 0x0000FF));
    g.add(mesh);

    g.position.set(0.0, 0.0, .90);
    g.rotation.x = -0.1;
    g.rotation.y = -0.1;
    g.rotation.z = -0.1;

    return g;
  }


  // Return the simulacrum
  simulacrum(x, y, z) {

    let objects = {};

    let g = new THREE.Group();

    let size = 0.2;
    let box = new THREE.BoxGeometry(size, size, size);
    let mat = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      color: 0xDDDDDD,
      wireframe: true,
    });
    objects.sky = new THREE.Mesh(box, mat);
    objects.sky.position.set(0.0, 0.0, 0.0);

    objects.sun = new THREE.Mesh(
      new THREE.IcosahedronGeometry(size/4.0),
      mat,
    );
    objects.sun.position.set(0.0, 0.1, 1.0);
    objects.globe = this.globe();

    g.add(objects.sky);
    g.add(objects.sun);
    g.add(objects.globe);

    // Position the entire simulacrum
    g.position.x = x;
    g.position.y = y;
    g.position.z = z;

    return {
      group: g,
      objects: objects,
    };
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

    if (this.simulacrum) {
      let [j, k, l] = [6.0*x, 6.0*y, 6.0*z];
      this.simulacrum.objects.sun.position.set(j, k, l);
      let r = -3.0;
      this.simulacrum.objects.sun.rotation.set(r*j, r*k, r*l);
    }
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
