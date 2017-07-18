export default class Rib {

  /**
   * Construct a ribbon
   */
  constructor(params) {
    this.params = params;
    this.pieces = [];
  }

  /**
   * Add position and normal
   */
  addPoint(p, n) {
    this.pieces.push({
      'point': p.slice(),
      'normal': n.slice(),
    });
    return this;
  }

  /**
   * Return a mesh
   */
  build() {
    let buffer = [];
    this.pieces.forEach(function (piece) {
    });
    return buffer;
  }
}
