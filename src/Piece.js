function random(x, y) {
  return Math.random() * (y-x) + x
}

export default class Piece {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = color;
    this.image = new Image();
    this.image.src= 'img/wave-3.jpg';
    this.box = this.randomSlice(100, 100);
  }

  randomSlice(w, h) {
    var sx = Math.floor(random(0, this.image.width - w));
    var sy = Math.floor(random(0, this.image.height - h));
    return {
      'sx': sx,
      'sy': sy,
      'sw': w,
      'sh': h,
    };
  }

  draw(ctx) {
    var box = this.box;

    ctx.save();
    ctx.drawImage(
      this.image,
      box.sx, box.sy,
      box.sw, box.sh,
      this.x, this.y,
      this.w, this.h
    );
    ctx.globalCompositeOperation = 'lighten';

    ctx.fillStyle = this.col;
    ctx.rect(
      this.x, this.y,
      this.w, this.h
    );
    ctx.fill();
    ctx.restore();
  }
}

