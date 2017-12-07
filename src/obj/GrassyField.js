import {Grass} from './Grass.js';

export class GrassyField {
  constructor(width, height, density, variations) {
    this.width = width;
    this.height = height;
    this.density = density || 1.0;
    this.variations = variations || 20;
    this.blades = [];
  }

  /**
   * Add a blade of grass to the field
   *
   */
  addBlade(x, y, z, theta) {
    let mat = new THREE.MeshPhongMaterial({
      color: 0x044000,
      emissive: 0x0,
      specular: 0xCCCCCC,
      reflectivity: 0.2,
      shininess: 30,
      shading: THREE.SmoothShading,
      side: THREE.DoubleSide,
    });
    mat = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, });
    this.field = []

    let g = new Grass(x, y, z, theta);
    let geo = g.getGeo();
    this.scene.add(new THREE.Mesh(geo, mat));
  }

  geometry() {
  }
}
