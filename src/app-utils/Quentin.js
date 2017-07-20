import App from '../app/App.js';
import {line} from '../math.js';
import {add, scale} from '../math3.js';

export default class QuentinLike extends App {
  /**
   * @param p start position
   * @param q stop position
   * @param theta start angle
   * @param fi stop angle
   * @param steps
   */
  quentin(p, q, theta, fi, steps) {
    steps = steps || 50;

    // Get series of x's and theta's
    let xs = line(p, q, steps);
    let ts = line(theta, fi, steps);

    let position = add(
      scale(p, 1-xs),
      scale(q, xs),
    );

    let angle = theta*(1-ts) + fi*ts;

    console.log('...same chains');

  }
}
