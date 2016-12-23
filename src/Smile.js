export default class Smile {
  constructor(params) {
    this.position = [100, 100];
    this.faceSize = params.faceSize;
    this.eyeSize = this.faceSize/9.;
    this.eyeDistance = this.faceSize/3.;
    this.eyeSpacing = this.faceSize/1.3;

  }

  update(params) {
    this.faceSize = params.faceSize;
    this.eyeSize = params.eyeSize || this.faceSize/9.;
    this.eyeSpacing = params.eyeSpacing || this.faceSize/1.3;
    this.eyeDistance = params.eyeDistance || this.faceSize/3.;
    this.mouthDistance = params.mouthDistance;
    this.mouthWidth = params.mouthWidth;
    this.mouthCrookedFactor = params.mouthCrookedFactor || 0.;
  }

  drawFace(ctx) {
    ctx.save();
      ctx.beginPath();
      ctx.arc(this.position[0], this.position[1], this.faceSize, 0, 2*Math.PI);
      ctx.stroke();
    ctx.restore();
  }


  drawEyes(ctx) {
    ctx.save();
      let x = this.position[0];
      let y = this.position[1] - this.eyeDistance;
      ctx.beginPath();
      ctx.arc(x-this.eyeSpacing/2., y, this.eyeSize, 0, 2*Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(x+this.eyeSpacing/2., y, this.eyeSize, 0, 2*Math.PI);
      ctx.fill();
      ctx.closePath();
    ctx.restore();
  }

  drawMouth(ctx) {
    ctx.save();
      let x = this.position[0] - this.mouthWidth/2.;
      let y = this.position[1] + this.mouthDistance;
      let kink = this.mouthCrookedFactor;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x+this.mouthWidth/2.+kink, y+10, x+this.mouthWidth, y+kink);
      ctx.stroke();
    ctx.restore();
  }

  draw(ctx) {
    this.drawFace(ctx);
    this.drawEyes(ctx);
    this.drawMouth(ctx);
  }
}
