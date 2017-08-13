import TriangleMesh from './TriangleMesh.js';

/**
 * Construct a surface with a triangular mesh
 * [x, y, f(x, y)], where x,y in set of triangular points
 *
 */
export default class TriangleSurface {


  constructor(f, radius, width, height) {
    this.f = function (x, y) {
      return 0;
    }
    this.mesh = new TriangleMesh(radius);
  }

  build() {

    let k = 0;
    let f = this.f;
    let geo = new THREE.Geometry();

    for (let i=-10; i < 10; i++) {
      for (let j=-10; j < 10; j++) {

        // console.log(i, j);

        let [a, b, c] = this.mesh.get(i, j).getPointList();
        let n = new THREE.Vector3(0, 1, 0);

        this.mesh.get(i, j).getPointList().forEach(function (t) {
          geo.vertices.push(new THREE.Vector3(t.x, f(t.x, t.y), t.y));
          console.log(i, j, "::", t.x, t.y);
        });

        geo.faces.push(new THREE.Face3(k+0, k+1, k+2, n));

        k += 3;
      }
    }

    return geo;
  }

}
