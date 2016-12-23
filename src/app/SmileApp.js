import App from './App.js';
import Smile from '../Smile.js';
import {rgb} from '../utils.js';


export default class SmileApp extends App {
  constructor(params) {
    super(params);
    this.el = params.el;
    console.log(this.el);
    this.width = this.el.width;
    this.height = this.el.height;
    this.ctx = this.el.getContext('2d');
    this.color = "rgb(0, 200, 100)";

    this.smile = new Smile({
      position: [this.width/2., this.height/2.],
      size: 30,
    });
  }

  update(params) {
    this.color = params.color || "#000000";
    this.smile.update(params);
  }

  draw() {
    this.ctx.save();
      this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.restore();

    this.ctx.save();
      this.ctx.lineWidth = 3;
      this.ctx.fillStyle = this.ctx.strokeStyle = this.color;
      this.smile.draw(this.ctx);
    this.ctx.restore();
  }
}
