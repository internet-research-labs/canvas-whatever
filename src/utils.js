export function select(list) {
  return list[Math.floor(Math.random() * list.length)];
};

/**
 * Make 3 dimensional multi array
 *
 */
export function makeArray3(height, width, depth) {
  let array3 = new Array(height);
  for (let i=0; i < height; i++) {
    array3[i] = new Array(width);
    for (let j=0; j < width; j++) {
      array3[i][j] = new Array(depth);
    }
  }
  return array3;
};

export function rgb(r, g, b) {
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

export function random(lower, upper) {
  return lower + Math.random() * (upper-lower);
};

let getElapsedTime = (function() {
  let start = +new Date();
  return function () {
    return (new Date() - start)/1000.;
  }
}());

export {getElapsedTime};
