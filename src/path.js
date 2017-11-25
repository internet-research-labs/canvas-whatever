/**
 * Return a set of points
 * @param p Vector3 start
 * @param q Vector3 end
 * @param steps int number of steps
 */
export function path(p, q, steps) {
  steps = steps || 50;

  let points = [];
  let d = 1.0/(steps-1);

  for (let i=0; i < steps; i++) {
    points.push(i*d);
  }

  return points;
}
