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
  return vec3(0., .3, .3);
}

// Return rgb sky contribution
vec3 sky() {
  float l = 1./distance(normalize(vPosition), normalize(sunPosition))/4.0;
  return vec3(2.*l, l, l);
}

vec4 dash() {
  float l = mod(vPosition.y*100.0, 3.0) > 1.5 ? 1.0 : 0.0;
  return vec4(2.*l, l, l, 1.0);
}

void main() {
  float l = abs(cos(theta));
  float w = gl_FragCoord.w;
  float x = (vPosition.x+0.5);
  float y = (vPosition.y+0.5);
  float z = (vPosition.z+0.5);
  vec4 c = vec4(sky() + sun(), 1.0);
  gl_FragColor = c;
}
