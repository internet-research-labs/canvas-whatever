function rgba (r, g, b, a) {
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

function randomRGB() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var a = 1;
  return rgba(r, g, b, a);
}

export {
  rgba,
  randomRGB,
};
