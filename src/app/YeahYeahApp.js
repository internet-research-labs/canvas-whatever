import App from './App.js';

import TriangleMesh from '../TriangleMesh.js';

export default class YeahYeahApp extends App {
  constructor(params) {
    super(params);

    this.id = params.id;
    this.el = document.getElementById(this.id);
    this.ctx = this.el.getContext('2d');

    this.image = params.image;

    this.size = params.size || 30;
    this.width = this.el.width;
    this.height = this.el.height;

    this.triMesh = new TriangleMesh(this.size);
  }

  setup() {
  }

  update(params) {
  }

  clear(style) {
    let ctx = this.ctx;
    ctx.save();
      ctx.beginPath();
      ctx.fillStyle = style || 'white';
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.fillRect(0, 0, this.width, this.height);
    ctx.restore();
  }

  /**
   * Transfer from srcBox of image to destTri
   */
  drawTransfer(destTri, [sx, sy, sw, sh]) {
    let ctx = this.ctx;
    let points = destTri.getPointList();
    let box = destTri.getBoundingBox();

    ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'white';
      ctx.imageSmoothingEnabled = true;
      ctx.globalCompositeOperation = 'source-atop';
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      ctx.lineTo(points[1].x, points[1].y);
      ctx.lineTo(points[2].x, points[2].y);
      ctx.clip();

      ctx.fillRect(box.x, box.y, box.w, box.h);
      ctx.stroke();

      ctx.drawImage(
        this.image,
        sx, sy, sw, sh,
        box.x, box.y, box.w, box.h
      );

    ctx.restore();
  }

  /**
   * Draw Triangle
   */
  drawTriangle(tri, style) {
    let ctx = this.ctx;
    let points = tri.getPointList();
    ctx.save();
      ctx.beginPath();
      ctx.fillStyle = style || 'black';
      ctx.strokeStyle = style || 'white';
      ctx.lineWidth = 1;
      ctx.moveTo(points[0].x, points[0].y);
      ctx.lineTo(points[1].x, points[1].y);
      ctx.lineTo(points[2].x, points[2].y);
      ctx.fill();
      ctx.fill();
      ctx.fill();
      ctx.fill();
      ctx.stroke();
    ctx.restore();
  }

  draw(update) {
    this.clear('white');

    let ctx = this.ctx;
    let tri1 = this.triMesh.get(0, 0);
    let tri2 = this.triMesh.get(1, 1);
    let tri3 = this.triMesh.get(2, 2);

    this.drawTriangle(this.triMesh.get(0, 0));
    this.drawTriangle(this.triMesh.get(1, 1));
    this.drawTriangle(this.triMesh.get(2, 2));
    this.drawTriangle(this.triMesh.get(3, 3));

    this.drawTransfer(
      this.triMesh.get(1, 0),
      [200, 30, 300, 300]
    );

    ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'cyan';
      ctx.font = '200px bold sans-serif';
      ctx.fillText("Whatever", 0, 200);
      ctx.fillText("forever", 0, 400);
    ctx.restore();

    this.drawTriangle(this.triMesh.get(1, 3), 'red');

    this.drawTransfer(
      this.triMesh.get(1, 1),
      [200, 30, 300, 300]
    );

    this.drawBottom();
  }

  drawBottom() {
    let colors = [
      '#000000',
      '#333333',
      '#AAAAAA',
      '#CCCCCC',
    ];
    for (var i=5; i < 100; i++) {
      for (var j=0; j < 15; j++) {
        this.drawTriangle(this.triMesh.get(i, j), random(colors));
      }
    }
  }
}

function random(lis) {
  return lis[Math.floor(Math.random() * lis.length)];
}
