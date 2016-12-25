import App from './App.js';

import {select} from '../utils.js';
import TriangleMesh from '../TriangleMesh.js';

function drawTransfer(ctx, image, destTri, [sx, sy, sw, sh]) {
  let points = destTri.getPointList();
  let box = destTri.getBoundingBox();

  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';
  ctx.imageSmoothingEnabled = true;

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.lineTo(points[1].x, points[1].y);
  ctx.lineTo(points[2].x, points[2].y);

  ctx.clip();

  for (let i=0; i < 3; i++) {
    ctx.drawImage(
      image,
      sx, sy, sw, sh,
      box.x, box.y, box.w, box.h
    );
  }

  ctx.restore();
}

/**
 *
 */
function drawTriangle(ctx, tri, style) {
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

export default class TriangleClipGridApp extends App {
  constructor(params) {
    super(params);
    this.el = params.el;
    this.ctx = this.el.getContext('2d');
    this.size = params.size || 30;
    this.width = this.el.width;
    this.height = this.el.height;
    this.mesh = new TriangleMesh(this.size, {x: 0, y: 0});
    this.colors = params.colors;
    this.image = params.image;
  }

  setup() {
  }

  update() {
  }

  draw() {
    for (let i=0; i < 11; i++) {
      for (let j=0; j < 21; j++) {
        let tri = this.mesh.get(i, j);
        let style = select(this.colors);

        let coinFlip = Math.floor(3*Math.random()) == 0;

        let bounds = tri.getBoundingBox();
        if (!coinFlip) {
          drawTriangle(this.ctx, tri, style);
        } else {
          drawTransfer(
            this.ctx,
            this.image,
            tri,
            [bounds.x, bounds.y, bounds.w, bounds.h],
          );
        }
      }
    }
  }
}
