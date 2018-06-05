export class Sky {
  // Constructor
  constructor({size, sunPosition, simulacrum}) {
    this.size = size;
    this.demoSun = new THREE.Group();
    this.geo = this.geometry();
    this.mat = this.material();
    this.sky = new THREE.Group();
    this.sky.add(new THREE.Mesh(this.geo, this.mat));

    if (simulacrum) {
      this.simulacrum = this.simulacrum(-1.0, 0, 0);
      this.simulacrum.group.position.set(-1.0, -1.0, -1.0);
      console.log(this.simulacrum.group.position);
      console.log("[SIMULACRUM] Added");
    }
  }

  globe() {
    let g = new THREE.Group();

    /**
     *
     */
    function _globe([x, y, z], c) {
      return new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 30, 30),
        new THREE.MeshBasicMaterial({
          side: THREE.DoubleSide,
          color: c,
          wireframe: true,
          transparent: true,
          opacity: 0.05,
        }),
      );
    }

    function _dir([x, y, z], c) {
      let g = new THREE.Geometry();
      g.vertices.push(new THREE.Vector3(-x, -y, -z));
      g.vertices.push(new THREE.Vector3(x, y, z));
      let m = new THREE.LineBasicMaterial({color: c, linewidth: 100});
      return new THREE.Line(g, m);
    }


    let axes = new THREE.Group();
    let l = 0.3;
    axes.add(_dir([l, 0, 0], 0xFF0000));
    axes.add(_dir([0, l, 0], 0x00FF00));
    axes.add(_dir([0, 0, l], 0x0000FF));
    axes.add(_globe([0, 0, 0], 0x999999));
    g.add(axes);

    return g;
  }

  // Return the simulacrum
  simulacrum(x, y, z) {

    console.log("[SIMULACRUM] (x, y, z) = (", x, y, z, ")");

    let objects = {};

    let g = new THREE.Group();

    let size = 0.2;
    let mat = new THREE.MeshBasicMaterial({
      color: 0xDDDDDD,
      wireframe: true,
    });
    objects.sun = new THREE.Mesh(
      new THREE.IcosahedronGeometry(size/4.0),
      mat,
    );
    objects.world = this.globe();
    objects.stars = _box([0, 0, 0], 0xCCCCCC);
    function _box([x, y, z], c) {
      let size = 0.3;
      let box = new THREE.EdgesGeometry(new THREE.BoxGeometry(size, size, size));
      let mat = new THREE.LineBasicMaterial({
        color: 0xDDDDDD,
        linewidth: 10,
      });
      return new THREE.LineSegments(box, mat);
    }


    // objects.sun.position.set(0.0, 0.1, 1.0);

    g.add(objects.world);
    g.add(objects.sun);
    g.add(objects.stars);

    return {
      group: g,
      objects: objects,
    };
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
      let v = 1.0;
      let [j, k, l] = [v*x, v*y, v*z];
      this.simulacrum.objects.sun.position.set(j, k, l);
      let r = -20.0;
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
