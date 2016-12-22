import App from './App.js';

import {select} from '../utils.js';
import TriangleMesh from '../TriangleMesh.js';

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
        drawTriangle(this.ctx, tri, style);
      }
    }
  }
}
