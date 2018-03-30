uniform float time;
uniform vec3 dir;

void main() {
  float x = sin(time);

  gl_FragColor = vec4(dir, 1.0);
}
