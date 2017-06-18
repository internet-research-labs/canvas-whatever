export class FlatTriangleMesh {
  constructor(w, h, cols, rows) {
    this.width = w;
    this.height = h;
    this.cols = cols;
    this.rows = rows;
    this.dx = cols % 2 == 1 ? this.width/(cols+1) : this.width/cols;
    this.dy = this.height/rows;
  }

  get(i, j) {
    let {dx, dy} = this;
    let x = this.dx/2.0 + j * this.dx/2.;
    let y = this.dy/2.0 + i * this.dy;

    if ((i+j) % 2 == 0) {
      /**
       *   3
       *  /+\
       * 1---2
       */
      return [
        [x-dx/2., y-dy/2.],
        [x+dx/2., y-dy/2.],
        [x, y+dy/2.],
      ];
    } else {
      /**
       *  1---2
       *   \ /
       *    3
       */
      return [
        [x-dx/2., y+dy/2.],
        [x+dx/2., y+dy/2.],
        [x, y-dy/2.],
      ];
    }
  }
}
