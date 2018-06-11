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


// Return hex value from a hex string
export function stringToHex(str) {
  return parseInt(str.substring(1), 16);
}

export {getElapsedTime};



export function round(f, n) {
  let s = Math.pow(10, n);
  return Math.round(s*f)/s;
}



// Return Cartesian Coordinates from Normalized Spherical [Theta,Fi]
export function cartesian([r, theta, fi]) {
  return [
    round(r*Math.sin(theta)*Math.cos(fi), 3),
    round(r*Math.sin(theta)*Math.sin(fi), 3),
    round(r*Math.cos(theta), 3),
  ];
}


