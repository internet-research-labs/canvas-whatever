/**
 * Compose
 * @param ... an object with an update(Object) and draw(context) method
 * @return an object with an update(Object) and draw(context) method
 */
function Compose() {
  this.scene = arguments;
}

/**
 * Add a object to render to the scene
 * @param obj Object an object to attach to the scene
 * @return self
 */
Compose.prototype.add = function (obj) {
  this.scene.push(obj);
  return this;
};

/**
 * Return a list of objects that are being updated/drawn
 * @return list[Object] a list of objects passed into the Compose constructor
 */
Compose.prototype.getObjects = function () {
  return this.scene;
};

/**
 * Update each object withs params
 * @param params Object an object containing a dict of values that may-or-may-not be
 *    relevant for each object composed
 * @return self
 *
 */
Compose.prototype.update = function (params) {
  this.scene.forEach(function (val) {
    val.update(params);
  });
  return this;
};


/**
 * Draw each object with context
 * @param ctx Context a rendering context
 * @return self
 *
 */
Compose.protoype.draw = function (ctx) {
  this.scene.forEach(function (val) {
    val.draw(ctx);
  });
  return this;
};
