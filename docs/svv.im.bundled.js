var svv =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.YeahYeahApp = exports.WaveApp = exports.CircleApp = exports.DripApp = undefined;

	var _DripApp = __webpack_require__(1);

	var _DripApp2 = _interopRequireDefault(_DripApp);

	var _CircleApp = __webpack_require__(4);

	var _CircleApp2 = _interopRequireDefault(_CircleApp);

	var _TriGridApp = __webpack_require__(8);

	var _TriGridApp2 = _interopRequireDefault(_TriGridApp);

	var _WaveApp = __webpack_require__(12);

	var _WaveApp2 = _interopRequireDefault(_WaveApp);

	var _YeahYeahApp = __webpack_require__(9);

	var _YeahYeahApp2 = _interopRequireDefault(_YeahYeahApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.DripApp = _DripApp2.default;
	exports.CircleApp = _CircleApp2.default;
	exports.WaveApp = _WaveApp2.default;
	exports.YeahYeahApp = _YeahYeahApp2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Line = __webpack_require__(3);

	var _Line2 = _interopRequireDefault(_Line);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function random_between(low, high) {
	  return (high - low) * Math.random() + low;
	}

	var DripApp = function (_App) {
	  _inherits(DripApp, _App);

	  function DripApp(params) {
	    _classCallCheck(this, DripApp);

	    var _this = _possibleConstructorReturn(this, (DripApp.__proto__ || Object.getPrototypeOf(DripApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.width = _this.el.width;
	    _this.height = _this.el.height;
	    _this.ctx = _this.el.getContext('2d');
	    _this.lines = [];
	    return _this;
	  }

	  _createClass(DripApp, [{
	    key: 'setup',
	    value: function setup() {
	      for (var i = 0; i < 5; i++) {
	        this.lines.unshift(new _Line2.default(300 + 40 * i, 500 + 80 * i + 20 * Math.random(), 40 + 30 + 40 * i + random_between(-30, 80), 450 + random_between(-100, 100)));
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "black";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.clear();
	      var ctx = this.ctx;
	      var width = this.width;
	      ctx.imageSmoothingEnabled = true;
	      this.lines.forEach(function (val) {
	        val.draw(ctx, width);
	      });
	    }
	  }]);

	  return DripApp;
	}(_App3.default);

	exports.default = DripApp;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
	  function App(params) {
	    _classCallCheck(this, App);
	  }

	  _createClass(App, [{
	    key: 'setup',
	    value: function setup(params) {
	      throw new Error('Calling empty setup function');
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {
	      throw new Error('Calling empty update function');
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      throw new Error('Calling empty draw function');
	    }
	  }, {
	    key: 'loop',
	    value: function loop() {
	      this.update();
	      this.draw();
	      requestAnimationFrame(this.loop.bind(this));
	    }
	  }]);

	  return App;
	}();

	exports.default = App;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Line = function () {
	  function Line(top, bottom, width, mid) {
	    _classCallCheck(this, Line);

	    this.bot = bottom;
	    this.top = top;
	    this.width = width;
	    this.mid = mid;
	  }

	  _createClass(Line, [{
	    key: 'drawDip',
	    value: function drawDip(ctx, w) {
	      var mid = this.mid;
	      var m = mid;
	      var d = Math.floor(this.width / 2);
	      ctx.moveTo(m - d, this.top);
	      sCurveTo(ctx, m - d, this.top, m, this.bot);
	      sCurveTo(ctx, m, this.bot, m + d, this.top);
	    }
	  }, {
	    key: 'drawShape',
	    value: function drawShape(ctx, w) {
	      var mid = this.mid;
	      var m = mid;
	      var d = Math.floor(this.width / 2);
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx, w) {
	      var mid = this.mid;
	      var m = mid;
	      var d = Math.floor(this.width / 2);

	      ctx.save();
	      ctx.beginPath();
	      this.drawDip(ctx, w);
	      ctx.closePath();
	      ctx.fillStyle = 'black';
	      ctx.strokeStyle = 'white';
	      ctx.lineWidth = '2.5';
	      ctx.fill();
	      ctx.restore();

	      ctx.beginPath();
	      ctx.closePath();

	      ctx.save();
	      ctx.moveTo(0, this.top);
	      ctx.lineTo(m - d, this.top);

	      ctx.moveTo(m + d, this.top);
	      ctx.lineTo(w, this.top);

	      this.drawDip(ctx, w);

	      ctx.strokeStyle = 'white';
	      ctx.lineWidth = '4.5';
	      ctx.stroke();
	      ctx.restore();
	    }
	  }]);

	  return Line;
	}();

	exports.default = Line;


	function sCurveTo(ctx, x0, y0, x1, y1) {
	  var x_mid = x0 + Math.floor((x1 - x0) / 2);
	  var y_mid = y0 + Math.floor((y1 - y0) / 2);
	  ctx.bezierCurveTo(x_mid, y0, x_mid, y1, x1, y1);
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _TriGrid = __webpack_require__(5);

	var _TriGrid2 = _interopRequireDefault(_TriGrid);

	var _colors = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CircleApp = function (_App) {
	  _inherits(CircleApp, _App);

	  function CircleApp(params) {
	    _classCallCheck(this, CircleApp);

	    var _this = _possibleConstructorReturn(this, (CircleApp.__proto__ || Object.getPrototypeOf(CircleApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(CircleApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');
	      this.grid = new _TriGrid2.default(4, 4, 60, 60, 'red');
	      this.setupDots();
	    }
	  }, {
	    key: 'setupDots',
	    value: function setupDots() {
	      var x = Math.floor(this.width * Math.random());
	      var y = Math.floor(this.width * Math.random());
	      var size = 10;

	      var r = Math.floor(Math.random() * 255);
	      var g = Math.floor(Math.random() * 255);
	      var b = Math.floor(Math.random() * 255);
	      var a = 1;
	      var rgb = (0, _colors.rgba)(r, g, b, a);
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "white";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      ctx.save();
	      ctx.globalCompositeOperation = 'darken';
	      this.grid.draw(ctx);
	      ctx.restore();
	    }
	  }]);

	  return CircleApp;
	}(_App3.default);

	exports.default = CircleApp;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tri = __webpack_require__(6);

	var _Tri2 = _interopRequireDefault(_Tri);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TriGrid = function () {
	  function TriGrid(x, y, rad, size, color, theta) {
	    _classCallCheck(this, TriGrid);

	    this.theta = theta;
	    this.x = x;
	    this.y = y;
	    this.dx = this.rad;
	    this.dy = this.rad;
	    this.dots = [];
	    this.size = size;
	    this.rad = rad;
	    this.col = color;
	    this.dx = 1.73 / 2. * this.rad;
	    this.dy = this.rad / 2.;

	    // Final
	    this.setup();
	  }

	  _createClass(TriGrid, [{
	    key: 'get',
	    value: function get(i, j) {

	      var row = Math.floor(i / 2);

	      var x = j * this.dx;
	      var y = (4 * i - 2 * row) * this.dy;

	      if (i % 2 == 0 && j % 2 == 0) {
	        y += this.dy;
	      } else if (j % 2 == 0) {
	        y -= this.dy;
	      }

	      return {
	        'x': Math.round(x),
	        'y': Math.round(y)
	      };
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      var p1 = this.get(1, 1);
	      var p2 = this.get(2, 1);
	      var p3 = this.get(3, 1);
	      var p4 = this.get(4, 1);
	      var p5 = this.get(5, 1);

	      var q1 = this.get(1, 2);
	      var q2 = this.get(2, 2);
	      var q3 = this.get(3, 2);
	      var q4 = this.get(4, 2);
	      var q5 = this.get(5, 2);

	      var r2 = this.get(2, 3);
	      var s2 = this.get(2, 4);

	      this.grid = [new _Tri2.default(p1.x, p1.y, this.rad, 'black', -Math.PI / 2.), new _Tri2.default(p2.x, p2.y, this.rad, 'cyan', Math.PI / 2.), new _Tri2.default(p3.x, p3.y, this.rad, 'magenta', -Math.PI / 2.), new _Tri2.default(p4.x, p4.y, this.rad, 'gray', Math.PI / 2.), new _Tri2.default(p5.x, p5.y, this.rad, 'pink', -Math.PI / 2.), new _Tri2.default(q1.x, q1.y, this.rad, 'black', Math.PI / 2.), new _Tri2.default(q2.x, q2.y, this.rad, 'red', -Math.PI / 2.), new _Tri2.default(q3.x, q3.y, this.rad, 'magenta', Math.PI / 2.), new _Tri2.default(q4.x, q4.y, this.rad, 'red', -Math.PI / 2.), new _Tri2.default(q5.x, q5.y, this.rad, 'pink', Math.PI / 2.), new _Tri2.default(r2.x, r2.y, this.rad, 'yellow', Math.PI / 2.), new _Tri2.default(s2.x, s2.y, this.rad, 'blue', -Math.PI / 2.)];
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var self = this;
	      ctx.save();
	      self.grid.forEach(function (tri, i) {
	        tri.draw(ctx);
	      });
	      ctx.restore();
	    }
	  }]);

	  return TriGrid;
	}();

	exports.default = TriGrid;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tri = function () {
	  function Tri() {
	    _classCallCheck(this, Tri);
	  }

	  _createClass(Tri, [{
	    key: "constuctor",
	    value: function constuctor(x, y, rad, color, theta, up) {
	      this.x = x;
	      this.y = y;
	      this.rad = rad;
	      this.color = color;
	      this.theta = theta;
	      this.up = up;
	    }
	  }]);

	  return Tri;
	}();

	exports.default = Tri;


	Tri.prototype.draw = function (ctx) {
	  var sig = this.up ? -1 : +1;
	  var t = this.theta;

	  ctx.save();
	  ctx.beginPath();
	  ctx.fillStyle = this.color;
	  ctx.strokeStyle = this.color;
	  ctx.lineWidth = 0.90;

	  ctx.moveTo(Math.round(this.x + this.rad * Math.cos(t)), Math.round(this.y + this.rad * Math.sin(t)));

	  for (var i = 1; i < 3; i++) {
	    var theta = i * 2 * Math.PI / 3;
	    var u = this.x + sig * this.rad * Math.cos(theta + t);
	    var v = this.y + sig * this.rad * Math.sin(theta + t);
	    u = Math.round(u);
	    v = Math.round(v);
	    ctx.lineTo(u, v);
	  }

	  ctx.closePath();
	  ctx.stroke();
	  ctx.fill();

	  var d = 1.73 / 2. * this.rad;
	  //  var w = 1.73*this.rad;
	  //  var h = 1.5*this.rad;
	  //  var x = this.x - w/2.;
	  //  var y = this.y - this.rad;
	  //  ctx.beginPath();
	  //  ctx.strokeStyle = 'black';
	  //  ctx.rect(x, y, w, h);
	  //  ctx.stroke();

	  //  ctx.beginPath();
	  //  ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
	  //  ctx.stroke();
	  ctx.restore();
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function rgba(r, g, b, a) {
	  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
	}

	function randomRGB() {
	  var r = Math.floor(Math.random() * 255);
	  var g = Math.floor(Math.random() * 255);
	  var b = Math.floor(Math.random() * 255);
	  var a = 1;
	  return rgba(r, g, b, a);
	}

	exports.rgba = rgba;
	exports.randomRGB = randomRGB;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Line = __webpack_require__(3);

	var _Line2 = _interopRequireDefault(_Line);

	var _TriGrid = __webpack_require__(5);

	var _TriGrid2 = _interopRequireDefault(_TriGrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TriGridApp = function (_App) {
	  _inherits(TriGridApp, _App);

	  function TriGridApp(params) {
	    _classCallCheck(this, TriGridApp);

	    return _possibleConstructorReturn(this, (TriGridApp.__proto__ || Object.getPrototypeOf(TriGridApp)).call(this, params));
	  }

	  _createClass(TriGridApp, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'clear',
	    value: function clear() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }]);

	  return TriGridApp;
	}(_App3.default);

	exports.default = TriGridApp;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _TriangleMesh = __webpack_require__(10);

	var _TriangleMesh2 = _interopRequireDefault(_TriangleMesh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YeahYeahApp = function (_App) {
	  _inherits(YeahYeahApp, _App);

	  function YeahYeahApp(params) {
	    _classCallCheck(this, YeahYeahApp);

	    var _this = _possibleConstructorReturn(this, (YeahYeahApp.__proto__ || Object.getPrototypeOf(YeahYeahApp)).call(this, params));

	    _this.id = params.id;
	    _this.el = document.getElementById(_this.id);
	    _this.ctx = _this.el.getContext('2d');

	    _this.image = params.image;

	    _this.size = params.size || 30;
	    _this.width = _this.el.width;
	    _this.height = _this.el.height;

	    _this.triMesh = new _TriangleMesh2.default(_this.size);
	    return _this;
	  }

	  _createClass(YeahYeahApp, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'clear',
	    value: function clear(style) {
	      var ctx = this.ctx;
	      ctx.save();
	      ctx.beginPath();
	      ctx.fillStyle = style || 'white';
	      ctx.clearRect(0, 0, this.width, this.height);
	      ctx.fillRect(0, 0, this.width, this.height);
	      ctx.restore();
	    }

	    /**
	     * Transfer from srcBox of image to destTri
	     */

	  }, {
	    key: 'drawTransfer',
	    value: function drawTransfer(destTri, _ref) {
	      var _ref2 = _slicedToArray(_ref, 4);

	      var sx = _ref2[0];
	      var sy = _ref2[1];
	      var sw = _ref2[2];
	      var sh = _ref2[3];

	      var ctx = this.ctx;
	      var points = destTri.getPointList();
	      var box = destTri.getBoundingBox();

	      ctx.save();
	      ctx.beginPath();
	      ctx.fillStyle = 'white';
	      ctx.strokeStyle = 'white';
	      ctx.imageSmoothingEnabled = true;
	      ctx.globalCompositeOperation = 'source-atop';
	      ctx.beginPath();
	      ctx.moveTo(points[0].x, points[0].y);
	      ctx.lineTo(points[1].x, points[1].y);
	      ctx.lineTo(points[2].x, points[2].y);
	      ctx.clip();

	      ctx.fillRect(box.x, box.y, box.w, box.h);
	      ctx.stroke();

	      ctx.drawImage(this.image, sx, sy, sw, sh, box.x, box.y, box.w, box.h);

	      ctx.restore();
	    }

	    /**
	     * Draw Triangle
	     */

	  }, {
	    key: 'drawTriangle',
	    value: function drawTriangle(tri, style) {
	      var ctx = this.ctx;
	      var points = tri.getPointList();
	      ctx.save();
	      ctx.beginPath();
	      ctx.fillStyle = style || 'black';
	      ctx.strokeStyle = style || 'white';
	      ctx.lineWidth = 1;
	      ctx.moveTo(points[0].x, points[0].y);
	      ctx.lineTo(points[1].x, points[1].y);
	      ctx.lineTo(points[2].x, points[2].y);
	      ctx.fill();
	      ctx.fill();
	      ctx.fill();
	      ctx.fill();
	      ctx.stroke();
	      ctx.restore();
	    }
	  }, {
	    key: 'draw',
	    value: function draw(update) {
	      this.clear('white');

	      var ctx = this.ctx;
	      var tri1 = this.triMesh.get(0, 0);
	      var tri2 = this.triMesh.get(1, 1);
	      var tri3 = this.triMesh.get(2, 2);

	      this.drawTriangle(this.triMesh.get(0, 0));
	      this.drawTriangle(this.triMesh.get(1, 1));
	      this.drawTriangle(this.triMesh.get(2, 2));
	      this.drawTriangle(this.triMesh.get(3, 3));

	      this.drawTransfer(this.triMesh.get(1, 0), [200, 30, 300, 300]);

	      ctx.save();
	      ctx.beginPath();
	      ctx.fillStyle = 'cyan';
	      ctx.font = '200px bold sans-serif';
	      ctx.fillText("Whatever", 0, 200);
	      ctx.fillText("forever", 0, 400);
	      ctx.restore();

	      this.drawTriangle(this.triMesh.get(1, 3), 'red');

	      this.drawTransfer(this.triMesh.get(1, 1), [200, 30, 300, 300]);

	      this.drawBottom();
	    }
	  }, {
	    key: 'drawBottom',
	    value: function drawBottom() {
	      var colors = ['#000000', '#333333', '#AAAAAA', '#CCCCCC'];
	      for (var i = 5; i < 100; i++) {
	        for (var j = 0; j < 15; j++) {
	          this.drawTriangle(this.triMesh.get(i, j), random(colors));
	        }
	      }
	    }
	  }]);

	  return YeahYeahApp;
	}(_App3.default);

	exports.default = YeahYeahApp;


	function random(lis) {
	  return lis[Math.floor(Math.random() * lis.length)];
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _RegularTriangle = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * --------------------------------------
	 * \1,1 /\1,3 /\1,1 /\1,3 /\   1 /\1,
	 *  \  /  \  /  \  /  \  /  \   /  \ 
	 *   \/1,2 \/1,  \/1,2 \/1,4 \ /1,2 \
	 *  ---------------------------------
	 *   /\2,2 /\    /\2,2 /\    / \2,2 /
	 *  /  \  /  \  /  \  /  \  /   \  / 
	 *   2,1\/    \/ 2,1\/    \/   ,1\/  
	 * --------------------------------------
	 */
	var TriangleMesh = function () {

	  /**
	   * Construct a grid where xy-coordinates correspond to triangles instead of squares
	   *  This class mostly just wraps the Triangle method with some math to know
	   *  exactly where everything is located.
	   */
	  function TriangleMesh(rad, props) {
	    _classCallCheck(this, TriangleMesh);

	    props = props || {};

	    this.x = props.x || 0;
	    this.y = props.y || 0;
	    this.rad = rad;

	    // This is probably rounded-off too much, and creating
	    // a slight overlap along the edges of the triangles
	    // TODO: Generalize this for a given theta
	    this.dx = 1.73 / 2. * this.rad;
	    this.dy = this.rad / 2.;
	  }

	  /**
	   * Return the xy-coordinate
	   */


	  _createClass(TriangleMesh, [{
	    key: 'getCenter',
	    value: function getCenter(i, j) {
	      var row = Math.floor(i / 2);
	      var x = j * this.dx;
	      var y = (4 * i - 2 * row) * this.dy;

	      if (i % 2 == 0 && j % 2 == 0) {
	        y += this.dy;
	      } else if (j % 2 == 0) {
	        y -= this.dy;
	      }

	      return {
	        'x': Math.round(x),
	        'y': Math.round(y)
	      };
	    }
	  }, {
	    key: 'getPoints',


	    /**
	     * Return the xy-coordinate
	     */
	    value: function getPoints(i, j) {
	      var row = Math.floor(i / 2);
	      var x = j * this.dx;
	      var y = (4 * i - 2 * row) * this.dy;

	      if (i % 2 == 0 && j % 2 == 0) {
	        y += this.dy;
	      } else if (j % 2 == 0) {
	        y -= this.dy;
	      }

	      return {
	        'x': Math.round(x),
	        'y': Math.round(y)
	      };
	    }
	  }, {
	    key: 'getBoundingBox',


	    /**
	     * Return the xy-coordinate
	     */
	    value: function getBoundingBox(i, j) {
	      var row = Math.floor(i / 2);
	      var x = j * this.dx;
	      var y = (4 * i - 2 * row) * this.dy;

	      if (i % 2 == 0 && j % 2 == 0) {
	        y += this.dy;
	      } else if (j % 2 == 0) {
	        y -= this.dy;
	      }

	      return {
	        'x': Math.round(x),
	        'y': Math.round(y)
	      };
	    }
	  }, {
	    key: 'get',


	    /**
	     * Return the Triangle defined at i, j
	     */
	    value: function get(i, j) {
	      var center = this.getCenter(i, j);
	      var theta = (i + j) % 2 ? Math.PI / 2 : -Math.PI / 2;
	      return new _RegularTriangle.RegularTriangle(center.x, center.y, this.rad, theta);
	    }
	  }]);

	  return TriangleMesh;
	}();

	exports.default = TriangleMesh;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Abstraction for a regular triangle
	 */
	var RegularTriangle = exports.RegularTriangle = function () {
	  function RegularTriangle(x, y, size, theta) {
	    _classCallCheck(this, RegularTriangle);

	    this.x = x;
	    this.y = y;
	    this.size = size;
	    this.theta = theta || 0;
	  }

	  /**
	   * Return the center point
	   */


	  _createClass(RegularTriangle, [{
	    key: 'getCenter',
	    value: function getCenter() {
	      return {
	        'x': this.x,
	        'y': this.y
	      };
	    }

	    /**
	     * Return a list of points used to draw, etc. this triangle
	     */

	  }, {
	    key: 'getPointList',
	    value: function getPointList() {
	      var t = this.theta;
	      var rad = this.size;
	      var points = [];

	      for (var i = 0; i < 3; i++) {
	        var theta = i * 2 * Math.PI / 3;

	        var u = this.x + rad * Math.cos(t + theta);
	        var v = this.y + rad * Math.sin(t + theta);

	        u = Math.round(u);
	        v = Math.round(v);

	        points.push({
	          'x': u,
	          'y': v
	        });
	      }

	      return points;
	    }
	  }, {
	    key: 'getBoundingBox',


	    /**
	     * Return an xy-coord bounding box
	     */
	    value: function getBoundingBox() {
	      var points = this.getPointList();
	      var x = { 'min': +Infinity, 'max': -Infinity };
	      var y = { 'min': +Infinity, 'max': -Infinity };

	      // Naive
	      points.forEach(function (val) {
	        x.min = Math.min(x.min, val.x);
	        x.max = Math.max(x.max, val.x);
	        y.min = Math.min(y.min, val.y);
	        y.max = Math.max(y.max, val.y);
	      });

	      return {
	        'x': x.min,
	        'y': y.min,
	        'w': x.max - x.min,
	        'h': y.max - y.min
	      };
	    }
	  }]);

	  return RegularTriangle;
	}();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Grid = __webpack_require__(13);

	var _Grid2 = _interopRequireDefault(_Grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WaveApp = function (_App) {
	  _inherits(WaveApp, _App);

	  function WaveApp(params) {
	    _classCallCheck(this, WaveApp);

	    var _this = _possibleConstructorReturn(this, (WaveApp.__proto__ || Object.getPrototypeOf(WaveApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(WaveApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');
	      this.grid3 = new _Grid2.default(this.el, 6, 6, 'red');
	      this.grid4 = new _Grid2.default(this.el, 6, 6, 'blue');
	    }
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      ctx.save();
	      ctx.globalCompositeOperation = 'darken';
	      this.grid3.draw(ctx);
	      this.grid4.draw(ctx);
	      ctx.restore();
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "white";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }]);

	  return WaveApp;
	}(_App3.default);

	exports.default = WaveApp;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Piece = __webpack_require__(14);

	var _Piece2 = _interopRequireDefault(_Piece);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Grid = function () {
	  function Grid(el, x, y, col) {
	    _classCallCheck(this, Grid);

	    this.width = el.width;
	    this.height = el.height;
	    this.x = x;
	    this.y = y;
	    this.grid = null;
	    this.col = col;
	    this.setupGrid();
	  }

	  _createClass(Grid, [{
	    key: 'setupGrid',
	    value: function setupGrid() {
	      var self = this;
	      this.grid = new Array(this.x);
	      for (var j = 0; j < this.x; j++) {
	        this.grid[j] = new Array(this.y);
	      }

	      var w = this.width / this.x;
	      var h = this.height / this.y;

	      for (var x = 0; x < this.x; x++) {
	        for (var y = 0; y < this.y; y++) {
	          self.grid[x][y] = new _Piece2.default(x * w, y * h, w, h, self.col);
	        }
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      this.grid.forEach(function (row, x) {
	        row.forEach(function (val, y) {
	          val.draw(ctx);
	        });
	      });
	    }
	  }]);

	  return Grid;
	}();

	exports.default = Grid;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function random(x, y) {
	  return Math.random() * (y - x) + x;
	}

	var Piece = function () {
	  function Piece(x, y, w, h, color) {
	    _classCallCheck(this, Piece);

	    this.x = x;
	    this.y = y;
	    this.w = w;
	    this.h = h;
	    this.col = color;
	    this.image = new Image();
	    this.image.src = 'img/wave-3.jpg';
	    this.box = this.randomSlice(100, 100);
	  }

	  _createClass(Piece, [{
	    key: 'randomSlice',
	    value: function randomSlice(w, h) {
	      var sx = Math.floor(random(0, this.image.width - w));
	      var sy = Math.floor(random(0, this.image.height - h));
	      return {
	        'sx': sx,
	        'sy': sy,
	        'sw': w,
	        'sh': h
	      };
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var box = this.box;

	      ctx.save();
	      ctx.drawImage(this.image, box.sx, box.sy, box.sw, box.sh, this.x, this.y, this.w, this.h);
	      ctx.globalCompositeOperation = 'lighten';

	      ctx.fillStyle = this.col;
	      ctx.rect(this.x, this.y, this.w, this.h);
	      ctx.fill();
	      ctx.restore();
	    }
	  }]);

	  return Piece;
	}();

	exports.default = Piece;

/***/ }
/******/ ]);