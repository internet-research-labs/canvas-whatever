import Piece from './Piece.js';

export default class Grid {
  constructor(el, x, y, col) {
    this.width = el.width;
    this.height = el.height;
    this.x = x;
    this.y = y;
    this.grid = null;
    this.col = col;
    this.setupGrid();
  }

  setupGrid() {
    var self = this;
    this.grid = new Array(this.x);
    for (var j=0; j < this.x; j++) {
      this.grid[j] = new Array(this.y);
    }

    var w = this.width/this.x;
    var h = this.height/this.y;

    for (var x=0; x < this.x; x++) {
      for (var y=0; y < this.y; y++) {
        self.grid[x][y] = new Piece(
          x * w, y * h, 
          w, h,
          self.col
        );
      }
    }
  }

  draw(ctx) {
    this.grid.forEach(function (row, x) {
      row.forEach(function (val, y) {
        val.draw(ctx);
      });
    });
  }
}
