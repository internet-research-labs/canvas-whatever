import App from './App.js';

export default class WillApp extends App {
  constructor(params) {
    super(params);
    this.el = params.el;
    this.ctx = params.el.getContext("2d");
    let width = this.el.width;
    let height = this.el.height;

    this.cols = params.x || 10;
    this.rows = params.y || 10;

    this.dx = width/this.cols;
    this.dy = height/this.rows;
    this.el.onmousemove = this.drawGridPoints.bind(this);
  }

  setup () {
    console.log(this.el);
    console.log('changbe');
  }

  update () {
    console.log('changbe updated');
  }

  draw () {
    console.log(this.el,'>> draw');
    this.clear("white");
    this.drawGridPoints();
  }

  clear (color) {
    this.ctx.fillStyle=color;
    this.ctx.fillRect(0,0, this.el.width, this.el.height);
  }

  generateRandomColor () {
    var r = Math.floor(Math.random()* 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random()* 256);
    return "rgb("+r+","+g+","+b+")";
  }

  getBox(i, j) {
    return [
      Math.floor(i*this.dx), // nw-x
      Math.floor(j*this.dy), // nw-y
      Math.ceil(this.dx), // rectWidth
      Math.ceil(this.dy), // rectHeight
    ]
  }

  drawGridPoints () {
    for (var i=0; i<this.cols; i++) {
      for (var j=0; j<this.rows; j++) {
        this.ctx.fillStyle=this.generateRandomColor();
        let [nw_x, nw_y, rectWidth, rectHeight] = this.getBox(i, j);
        this.ctx.fillRect(nw_x, nw_y, rectWidth, rectHeight);
      };
    };
  }
}
