uniform float time;
uniform vec3 dir;
varying vec4 n;

void main() {
  float x = sin(time);

  // gl_FragColor = vec4(dir, 1.0);
  gl_FragColor = n;
}
