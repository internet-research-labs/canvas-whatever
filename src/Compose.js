class Compose {
  /**
   *
   */
  constructor (...objects) {
    this.scenes = objects;
  };

  /**
   *
   */
  setup () {
    this.scenes.forEach((scene) => {
      scene.setup();
    });
  };

  /**
   *
   */
  update (params) {
    this.scenes.forEach((scene) => {
      scene.update(params);
    });
  };

  /**
   */
  draw (ctx) {
    this.scenes.forEach((scene) => {
      scene.draw(ctx);
    });
  };
};

export {Compose};
