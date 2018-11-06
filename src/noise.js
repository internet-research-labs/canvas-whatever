import SimplexNoise from 'simplex-noise';
import {cartesian, random} from './utils.js';


export class RepeatSimplexNoise2 {

  constructor() {
    this.simplex = new SimplexNoise("whatever"+random(0, 9000));
  }

  at(t, f) {
    let [x, y, z] = cartesian([1, t, f]);
    return this.simplex.noise3D(x, y, z);
  }
}
