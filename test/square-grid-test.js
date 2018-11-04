let assert = require("assert");


import {getMapping} from '../src/square-grid.js';

describe("square-grid utils", () => {
  describe("#getmapping", () => {
    it("should be bijective", () => {
      let [f, g] = getMapping(30);

      function biject(c) {
        let [a, b] = f(c);
        assert.equal(g(a, b), c);
      }

      biject(0);
      biject(30*30-1);
    });
  });
});
