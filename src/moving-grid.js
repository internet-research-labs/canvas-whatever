import TriangleSurface from './TriangleSurface.js';




/*


0. convert (x, y) -> (i, j)
  - 
1. convert (i, j) -> F
  - How many triangles per *row*
  - How many triangles per *col*
2. convert F -> (p, q, r)
  -

+---+---+
 \ / \ / \
  +---+---+


0---1---2
 \ / \ / \
  3---4---5
 / \ / \ /
6---7---8


 */


function triangleMap {
}


export class MovingGrid {
  constructor({size, width, height, fn}) {
    this.size = size;
    this.width = width;
    this.height = height;
    this.fn = fn;

  }

  constructor() {
  }
}
