import App from './App.js';
import TriGrid from '../TriGrid.js';
import {rgba} from '../colors.js';

export default class CircleApp extends App {
  constructor(params) {
    super(params);
    this.id = params.id;
  }

  setup() {
    this.el = document.getElementById(this.id);
    this.width = this.el.width;
    this.height = this.el.height;
    this.ctx = this.el.getContext('2d');
    this.grid = new TriGrid(4, 4, 60, 60, 'red');
    this.setupDots();
  }

  setupDots() {
    var x = Math.floor(this.width * Math.random());
    var y = Math.floor(this.width * Math.random());
    var size = 10;

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var a = 1;
    var rgb = rgba(r, g, b, a);
  }

  update() {
  }

  clear() {
    var ctx = this.ctx;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, this.width, this.height);
  }

  draw() {
    var ctx = this.ctx;
    this.clear();
    ctx.save();
    ctx.globalCompositeOperation = 'darken';
    this.grid.draw(ctx);
    ctx.restore();
  }
}
