// precision mediump float;
// precision mediump int;

// uniform float time;
// uniform vec3 dir;
// varying vec4 n;

uniform float theta;
uniform vec3 sunPosition;

varying vec3 vPosition;


//  Return rgb sun contribution
vec3 sun() {
  return vec3(0.);
}

// Return rgb sky contribution
vec3 sky() {
  return vec3(1./distance(normalize(vPosition), normalize(sunPosition)))/10.0;
}

void main() {
  float l = abs(cos(theta));
  float w = gl_FragCoord.w;
  float x = (vPosition.x+0.5);
  float y = (vPosition.y+0.5);
  float z = (vPosition.z+0.5);
  vec4 c = vec4(sky() + sun(), 1.0);
  gl_FragColor = c + vec4(x, y, z, 1.0);
}
