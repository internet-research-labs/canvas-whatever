import TriangleSurface from '../TriangleSurface.js';

export class Land {
  /**
   * Create a Land
   */
  constructor({height, width, x, y, roughness, seed}) {
    this.height = height;
    this.width = width;
    this.x = x || 0;
    this.y = y || 0;
    this.roughness = roughness || 1.0;
    this.seed = seed || 0;

    this.f = function (x, y) {
      return 0;
      let a = x/8.0;
      let b = y/8.0;
      let m = Math.cos(a*a+b*b);
      return m;
    };

    this.surface = new TriangleSurface(this.f, 0.9, 20.0, 20.0);
  }

  /**
   * Return the heigh of the land at this position
   */
  position(x, y) {
    return this.f(x, y);
  }

  /**
   * Return Buffer Mesh for this tract of land
   */
  getMesh() {
    return this.surface.build();
  }
}
