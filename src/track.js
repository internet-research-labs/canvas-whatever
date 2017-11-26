import {add, sub, scale, normalize} from './math3.js';


/**
 * Class to sequence camera pans
 */
export class CameraSequence {
  constructor() {
    this.tracks = [];
    this.durations = [];
    this.stops = [0];
    this.pieces = [];
  }

  /**
   * Monotonically increasing
   */
  add(track, duration) {
    this.tracks.push(track);
    this.stops.push(this.stops[this.stops.length-1]+duration);
    return this;
  }

  /**
   * Return ...
   */
  getIndex(t) {
    for (let i=0; i < this.stops.length; i++) {
      if (t < this.stops[i]) {
        return i-1;
      }
    }
    return this.stops.length-1;
  }

  /**
   * Return Camera Position
   */
  at(t) {
    let offset = this.stops[this.getIndex(t)];
    return this.tracks[this.getIndex(t)].at(t-offset);
  }
}

/**
 * Camera Track
 */
class CameraTrack {
  constructor() {
  }

  at() {
  }
}

/**
 * Continually moving forward from points A -> B
 */
export class LinearCameraTrack {
  constructor(start, end, duration) {
    this.start = start;
    this.end = end;
    this.direction = normalize(sub(this.end, this.start));
    this.up = [0, 1, 0];
    this.duration = duration || 1.0;
  }

  at(t) {
    return new CameraState(
      line(this.start, this.end, t/this.duration),
      this.up,
      undefined,
    );
  }
}


/**
 * Capture basic information to represent a camera
 * To be honest, dog, I ain't feelin your energy
 */
export class CameraState {
  constructor(position, up, fov) {
    this.position = position;
    this.up = up;
    this.fov = fov;
  }
}


/**
 * Return ...
 * @param p Vector3 ...
 * @param q Vector3 ...
 * @param t Vector3 ...
 */
export function line(p, q, t) {
  return add(
    scale(q, t),
    scale(p, 1-t),
  );
}

/**
 * Return a camera state for a 
 */
export function linearTrack(p, q, t) {
  return new CameraState(
    line(p, q, t),
    [0, 1, 0],
    undefined,
  );
}
