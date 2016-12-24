import {waterfall} from 'async';

export class Subtitle {
  constructor(text, style) {
    style = style || {};
    this.text = text;
    this.color = style.color || "white";
    this.outlineColor = style.outlineColor || "black";
    this.divWidth = style.width || "100%";
    this.divHeight = style.height;
    this.bottom = style.bottom || "0px";
    this.left = style.left || "0px";


    // 
    this.domElement = this._createDomElement();
  }

  _createDomElement() {
    let div = document.createElement("DIV");
    let span = document.createElement("SPAN");
    div.appendChild(span);
    span.innerHTML = this.text;


    div.style.position = "fixed";
    div.style.left = this.left;
    div.style.bottom = this.bottom;
    div.style.zIndex = "9000";
    div.style.textShadow = "0.5px 0.5px white, -0.5px -0.5px white, -0.5px 0.5px white, 0.5px -0.5px white";
    div.style.width = this.divWidth;
    if (this.divHeight) {
      div.style.height = this.divHeight;
    }

    div.style.textAlign = "center";

    return div;
  }

  showFor(milliseconds, callback) {
    this.show()

    setTimeout(function () {
      this.hide();
      if (callback != undefined) {
        callback.apply(this);
      }
    }.bind(this), milliseconds);
  }

  show() {
    document.body.appendChild(this.domElement);
  }

  hide() {
    document.body.removeChild(this.domElement);
  }
}

export class SubtitleScript {
  constructor(style) {
    this.style = style;
    this.functions = []
  }

  add(text, duration) {
    this.functions.push((next) => {
      let sub = new Subtitle(text, this.style);
      sub.showFor(duration, this.read.bind(this));
    });
    return this;
  }

  read() {
    let fn = this.functions.shift();
    if (fn) {
      fn.call();
    }
  }
}
