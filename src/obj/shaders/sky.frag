uniform float time;
uniform vec3 dir;
varying vec4 n;

uniform float theta;

void main() {
  vec4 u = normalize(vec4(dir, 1.0));
  vec4 v = normalize(n);
  float l = dot(u, v);
  l = abs(cos(theta));
  float x = l*gl_FragCoord.x/400.0;
  float y = l*gl_FragCoord.y/400.0;
  gl_FragColor = vec4(x, y, l, 1.0);
}
