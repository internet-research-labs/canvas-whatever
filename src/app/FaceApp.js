import App from './App.js';
import {FlatTriangleMesh} from '../FlatTriangleMesh.js';
import TriangleMesh from '../TriangleMesh.js';
import {random} from '../utils.js';

export default class FaceApp extends App {
  constructor(params) {
    const REGULAR_TRIANGLE_RATIO = Math.sqrt(3)/2.0;
    super();
    this.el = params.el;
    this.ctx = this.el.getContext('2d');
    this.width = params.el.width;
    this.height = params.el.height;
    this.backgroundImage = new Image();
    this.backgroundImage.onload = () => {
      this.setup();
    };
    this.backgroundImage.src = params.backgroundImage;

    // Ayy
    this.mesh = new TriangleMesh(
      100,
      {x: 0, y:0},
    );

    let self = this;

    this.sunGrid = [];
    for (let i=0; i < 20; i++) {
      for (let j=0; j < 20; j++) {
        this.sunGrid.push(this.getRandomImagePiece(
          this.backgroundImage,
          200,
          200,
        ));
      }
    }
  }

  setup(params) {
    console.log(":D");
    console.log(this.backgroundImage);
  }

  clear() {
    var ctx = this.ctx;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.width, this.height);
  }

  update(params) {
  }

  draw(params) {
    this.clear();


    this.sunGrid.forEach((val, i) => {
      let x = i % 20;
      let y = Math.floor(i / 20);
      this.ctx.drawImage(
        this.backgroundImage,
        val[0].x,
        val[0].y,
        200,
        200,
        x * 100,
        y * 100,
        100,
        100,
      );
    });
  }

  getRandomImagePiece(img, width, height) {
    let x = random(0, img.width - width);
    let y = random(0, img.height - height);
    return [
      {x: x, y: y},
      {x: x+width, y: y},
      {x: x+width, y: y+height},
      {x: x, y: y+height},
    ];
  }

  /**
   * Draw a triangle from a set of points
   * */
  drawTriangle(i, j, color) {
    let points = this.mesh.get(i, j).getPointList();
    let ctx = this.ctx;
    debugger;
    ctx.save();
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.moveTo(points[0].x, points[0].y);
      ctx.lineTo(points[1].x, points[1].y);
      ctx.lineTo(points[2].x, points[2].y);
      ctx.fill();
      ctx.fill();
      ctx.fill();
      ctx.fill();
      ctx.closePath();
    ctx.restore();
  }
}
