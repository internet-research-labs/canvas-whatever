// precision mediump float;
// precision mediump int;

// uniform mat4 modelViewMatrix; // optional
// uniform mat4 projectionMatrix; // optional

uniform float size;

varying vec3 vPosition;

void main() {
  vPosition = position/size;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
