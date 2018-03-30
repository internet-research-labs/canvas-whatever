uniform float time;

void main() {
  float x = sin(time);

  gl_FragColor = vec4(x, x, x, 1.0);
}
