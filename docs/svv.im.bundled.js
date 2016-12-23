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
	exports.LoadingCube = exports.Loading = exports.TriangleClipGrid = exports.TriangleMesh = exports.YeahYeahApp = exports.WaveApp = exports.TriOverlapApp = exports.TriangleClipGridApp = exports.SplotchApp = exports.SmileApp = exports.OverlapApp = exports.CubeApp = exports.CircleGridApp = exports.CircleApp = exports.DripApp = undefined;

	var _DripApp = __webpack_require__(1);

	var _DripApp2 = _interopRequireDefault(_DripApp);

	var _CircleApp = __webpack_require__(4);

	var _CircleApp2 = _interopRequireDefault(_CircleApp);

	var _CircleGridApp = __webpack_require__(8);

	var _CircleGridApp2 = _interopRequireDefault(_CircleGridApp);

	var _CubeApp = __webpack_require__(9);

	var _CubeApp2 = _interopRequireDefault(_CubeApp);

	var _OverlapApp = __webpack_require__(11);

	var _OverlapApp2 = _interopRequireDefault(_OverlapApp);

	var _SmileApp = __webpack_require__(29);

	var _SmileApp2 = _interopRequireDefault(_SmileApp);

	var _SplotchApp = __webpack_require__(12);

	var _SplotchApp2 = _interopRequireDefault(_SplotchApp);

	var _TriGridApp = __webpack_require__(13);

	var _TriGridApp2 = _interopRequireDefault(_TriGridApp);

	var _TriangleClipGridApp = __webpack_require__(14);

	var _TriangleClipGridApp2 = _interopRequireDefault(_TriangleClipGridApp);

	var _TriOverlapApp = __webpack_require__(18);

	var _TriOverlapApp2 = _interopRequireDefault(_TriOverlapApp);

	var _WaveApp = __webpack_require__(19);

	var _WaveApp2 = _interopRequireDefault(_WaveApp);

	var _YeahYeahApp = __webpack_require__(22);

	var _YeahYeahApp2 = _interopRequireDefault(_YeahYeahApp);

	var _TriangleMesh = __webpack_require__(16);

	var _TriangleMesh2 = _interopRequireDefault(_TriangleMesh);

	var _TriangleClipGrid = __webpack_require__(23);

	var _TriangleClipGrid2 = _interopRequireDefault(_TriangleClipGrid);

	var _Loading = __webpack_require__(25);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _LoadingCube = __webpack_require__(27);

	var _LoadingCube2 = _interopRequireDefault(_LoadingCube);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.DripApp = _DripApp2.default;
	exports.CircleApp = _CircleApp2.default;
	exports.CircleGridApp = _CircleGridApp2.default;
	exports.CubeApp = _CubeApp2.default;
	exports.OverlapApp = _OverlapApp2.default;
	exports.SmileApp = _SmileApp2.default;
	exports.SplotchApp = _SplotchApp2.default;
	exports.TriangleClipGridApp = _TriangleClipGridApp2.default;
	exports.TriOverlapApp = _TriOverlapApp2.default;
	exports.WaveApp = _WaveApp2.default;
	exports.YeahYeahApp = _YeahYeahApp2.default;
	exports.TriangleMesh = _TriangleMesh2.default;
	exports.TriangleClipGrid = _TriangleClipGrid2.default;
	exports.Loading = _Loading2.default;
	exports.LoadingCube = _LoadingCube2.default;

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
	    value: function loop(params) {
	      requestAnimationFrame(function () {
	        this.loop(params);
	      }.bind(this));
	      this.update(params);
	      this.draw();
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dot = function () {
	  function Dot(x, y, rad, color) {
	    _classCallCheck(this, Dot);

	    this.x = x;
	    this.y = y;
	    this.rad = rad;
	    this.col = color;
	  }

	  _createClass(Dot, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.fillStyle = this.col;
	      ctx.lineWidth = "1";
	      ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
	      ctx.fill();
	    }
	  }]);

	  return Dot;
	}();

	var Grid = function () {
	  function Grid(x, y, rad, size, color, theta) {
	    _classCallCheck(this, Grid);

	    this.theta = theta;
	    this.x = x;
	    this.y = y;
	    this.dx = this.rad;
	    this.dy = this.rad;
	    this.dots = [];
	    this.size = size;
	    this.rad = rad;
	    this.col = color;
	    this.setup();
	    // this.center_dot = new Dot(this.x, this.y, this.rad, 'white');
	  }

	  _createClass(Grid, [{
	    key: 'setup',
	    value: function setup() {
	      var self = this;
	      var rows_x = 2 * this.size + 1;
	      var rows_y = 2 * this.size + 1;

	      self.dots = new Array(rows_y);

	      for (var i = 0; i < self.dots.length; i++) {
	        self.dots[i] = new Array(rows_x);
	      }

	      var center = [this.x, this.y];

	      for (var i = 0; i < self.dots.length; i++) {
	        var row = self.dots[i];
	        for (var j = 0; j < row.length; j++) {

	          var u = i - this.size;
	          var v = j - this.size;
	          var dxy = 2 * this.rad + 10;

	          if (j % 2 == 1) {
	            u += 0.5;
	          }

	          var x = u * dxy;
	          var y = v * dxy;
	          var t = this.theta;

	          x = x * Math.cos(t) - y * Math.sin(t);
	          y = x * Math.sin(t) + y * Math.cos(t);

	          x += this.x;
	          y += this.y;
	          self.dots[i][j] = new Dot(x, y, self.rad, this.col);
	        }
	      }
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var self = this;
	      ctx.save();
	      self.dots.forEach(function (row, i) {
	        row.forEach(function (dot, j) {
	          dot.draw(ctx);
	        });
	      });
	      // self.center_dot.draw(ctx);
	      ctx.restore();
	    }
	  }]);

	  return Grid;
	}();

	var CircleGridApp = function (_App) {
	  _inherits(CircleGridApp, _App);

	  function CircleGridApp(params) {
	    _classCallCheck(this, CircleGridApp);

	    var _this = _possibleConstructorReturn(this, (CircleGridApp.__proto__ || Object.getPrototypeOf(CircleGridApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(CircleGridApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');
	      this.setupDots();
	    }
	  }, {
	    key: 'setupDots',
	    value: function setupDots() {
	      var x = Math.floor(this.width * Math.random());
	      var y = Math.floor(this.width * Math.random());
	      var size = Math.floor(15 + 30 * Math.random());
	      var theta2 = Math.random() * Math.PI / 20 - Math.PI / 20;

	      this.grid1 = new Grid(x, y, size, 29, 'rgba(255, 0, 0, 1)', 0);
	      this.grid2 = new Grid(x, y, size, 29, 'rgba(0, 200, 255, 1)', theta2);
	    }
	  }, {
	    key: 'update',
	    value: function update(_) {}
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
	      this.grid1.draw(ctx);
	      this.grid2.draw(ctx);
	      ctx.restore();
	    }
	  }]);

	  return CircleGridApp;
	}(_App3.default);

	exports.default = CircleGridApp;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var THREE = __webpack_require__(10);

	var CubeApp = function (_App) {
	  _inherits(CubeApp, _App);

	  function CubeApp(params) {
	    _classCallCheck(this, CubeApp);

	    return _possibleConstructorReturn(this, (CubeApp.__proto__ || Object.getPrototypeOf(CubeApp)).call(this, params));
	  }

	  _createClass(CubeApp, [{
	    key: 'setup',
	    value: function setup(params) {}
	  }, {
	    key: 'update',
	    value: function update(params) {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }]);

	  return CubeApp;
	}(_App3.default);

	exports.default = CubeApp;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = THREE;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OverlapApp = function (_App) {
	  _inherits(OverlapApp, _App);

	  function OverlapApp(params) {
	    _classCallCheck(this, OverlapApp);

	    var _this = _possibleConstructorReturn(this, (OverlapApp.__proto__ || Object.getPrototypeOf(OverlapApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(OverlapApp, [{
	    key: 'addOverlap',
	    value: function addOverlap() {
	      if (!this.overlaps) {
	        this.overlaps = [new Lap(150, 150, 30)];
	        return;
	      }

	      var newPos = this.overlaps.slice(-1)[0].randomEdge();
	      var rad = 10 + Math.random() * 10;

	      this.overlaps.push(new Lap(newPos[0], newPos[1], rad));
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');

	      for (var i = 0; i < 4000; i++) {
	        this.addOverlap();
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      this.overlaps.forEach(function (val) {
	        val.draw(ctx);
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "black";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }]);

	  return OverlapApp;
	}(_App3.default);

	exports.default = OverlapApp;

	var Lap = function () {
	  function Lap(x, y, rad) {
	    _classCallCheck(this, Lap);

	    this.x = x;
	    this.y = y;
	    this.rad = rad;
	  }

	  _createClass(Lap, [{
	    key: 'randomEdge',
	    value: function randomEdge() {
	      var randomAngle = Math.random() * 2 * Math.PI;
	      return [this.x + this.rad * Math.cos(randomAngle), this.y + this.rad * Math.sin(randomAngle)];
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.strokeStyle = 'white';
	      ctx.lineWidth = "1";
	      ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
	      ctx.stroke();
	    }
	  }]);

	  return Lap;
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Splotch = function () {
	  function Splotch(x, y, size) {
	    _classCallCheck(this, Splotch);

	    this.x = x;
	    this.y = y;
	    this.r = size;
	    this.dots = [];
	    this.addEdge();
	    this.addEdge();
	    this.addEdge();
	    this.addEdge();
	  }

	  _createClass(Splotch, [{
	    key: 'addEdge',
	    value: function addEdge() {
	      var lastDot = this.dots.slice(-1);
	      lastDot = lastDot.length ? lastDot[0] : false;

	      if (!lastDot) {
	        this.dots = [{ x: this.x, y: this.y, r: this.r / 3 }];
	      } else {
	        var randomAngle = Math.random() * 2 * Math.PI;
	        this.dots.push({
	          x: lastDot.x + lastDot.r * Math.cos(randomAngle),
	          y: lastDot.y + lastDot.r * Math.sin(randomAngle),
	          r: this.r / 3.
	        });
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw(ctx, callback) {
	      var self = this;
	      var colors = ['cyan', 'yellow', 'magenta'];
	      var i = 0;
	      this.dots.forEach(function (dot) {
	        ctx.save();

	        ctx.globalCompositeOperation = 'lighter';
	        i++;
	        ctx.fillStyle = colors[i % colors.length];
	        ctx.beginPath();
	        ctx.arc(dot.x, dot.y, dot.r, 0, 2 * Math.PI);
	        ctx.fill();
	        ctx.restore();

	        if (callback) {
	          callback.call(self, ctx);
	        }
	      });
	    }
	  }, {
	    key: 'nudged',
	    value: function nudged(dx, dy, dr) {
	      return new Splotch(this.x + dx, this.y + dy, this.r + dr);
	    }
	  }]);

	  return Splotch;
	}();

	var SplotchApp = function (_App) {
	  _inherits(SplotchApp, _App);

	  function SplotchApp(params) {
	    _classCallCheck(this, SplotchApp);

	    var _this = _possibleConstructorReturn(this, (SplotchApp.__proto__ || Object.getPrototypeOf(SplotchApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(SplotchApp, [{
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');
	      this.splotches = [];

	      for (var i = 0; i < 100; i++) {
	        var x = Math.random() * this.width;
	        var y = Math.random() * this.height;
	        var r = 10 + Math.random() * 20;
	        this.splotches.push(new Splotch(x, y, r));
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      this.splotches.forEach(function (s) {
	        s.draw(ctx);
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "black";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }]);

	  return SplotchApp;
	}(_App3.default);

	exports.default = SplotchApp;

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _utils = __webpack_require__(15);

	var _TriangleMesh = __webpack_require__(16);

	var _TriangleMesh2 = _interopRequireDefault(_TriangleMesh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 *
	 */
	function drawTriangle(ctx, tri, style) {
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

	var TriangleClipGridApp = function (_App) {
	  _inherits(TriangleClipGridApp, _App);

	  function TriangleClipGridApp(params) {
	    _classCallCheck(this, TriangleClipGridApp);

	    var _this = _possibleConstructorReturn(this, (TriangleClipGridApp.__proto__ || Object.getPrototypeOf(TriangleClipGridApp)).call(this, params));

	    _this.el = params.el;
	    _this.ctx = _this.el.getContext('2d');
	    _this.size = params.size || 30;
	    _this.width = _this.el.width;
	    _this.height = _this.el.height;
	    _this.mesh = new _TriangleMesh2.default(_this.size, { x: 0, y: 0 });
	    _this.colors = params.colors;
	    return _this;
	  }

	  _createClass(TriangleClipGridApp, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      for (var i = 0; i < 11; i++) {
	        for (var j = 0; j < 21; j++) {
	          var tri = this.mesh.get(i, j);
	          var style = (0, _utils.select)(this.colors);
	          drawTriangle(this.ctx, tri, style);
	        }
	      }
	    }
	  }]);

	  return TriangleClipGridApp;
	}(_App3.default);

	exports.default = TriangleClipGridApp;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.select = select;
	exports.makeArray3 = makeArray3;
	exports.rgb = rgb;
	function select(list) {
	  return list[Math.floor(Math.random() * list.length)];
	}

	/**
	 * Make 3 dimensional multi array
	 *
	 */
	function makeArray3(height, width, depth) {
	  var array3 = new Array(height);
	  for (var i = 0; i < height; i++) {
	    array3[i] = new Array(width);
	    for (var j = 0; j < width; j++) {
	      array3[i][j] = new Array(depth);
	    }
	  }
	  return array3;
	}

	function rgb(r, g, b) {
	  return "rgb(" + r + ", " + g + ", " + b + ")";
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _RegularTriangle = __webpack_require__(17);

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

	    /**
	     * Return the Triangle defined at i, j
	     */

	  }, {
	    key: 'get',
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
/* 17 */
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

	    /**
	     * Return an xy-coord bounding box
	     */

	  }, {
	    key: 'getBoundingBox',
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tri = function () {
	  function Tri(x, y, rad) {
	    _classCallCheck(this, Tri);

	    this.x = x;
	    this.y = y;
	    this.rad = rad;
	  }

	  _createClass(Tri, [{
	    key: 'randomEdge',
	    value: function randomEdge() {
	      var randomAngle = Math.random() * 2 * Math.PI;
	      return [this.x + this.rad * Math.cos(randomAngle), this.y + this.rad * Math.sin(randomAngle)];
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.strokeStyle = 'cyan';
	      ctx.lineWidth = "1";

	      ctx.moveTo(this.x + this.rad, this.y);

	      for (var i = 1; i < 3; i++) {
	        var theta = i * 2 * Math.PI / 3;
	        var u = this.x + this.rad * Math.cos(theta);
	        var v = this.y + this.rad * Math.sin(theta);
	        ctx.lineTo(u, v);
	      }

	      ctx.closePath();
	      ctx.stroke();
	    }
	  }]);

	  return Tri;
	}();

	var TriangleOverlapApp = function (_App) {
	  _inherits(TriangleOverlapApp, _App);

	  function TriangleOverlapApp(params) {
	    _classCallCheck(this, TriangleOverlapApp);

	    var _this = _possibleConstructorReturn(this, (TriangleOverlapApp.__proto__ || Object.getPrototypeOf(TriangleOverlapApp)).call(this, params));

	    _this.id = params.id;
	    return _this;
	  }

	  _createClass(TriangleOverlapApp, [{
	    key: 'addOverlap',
	    value: function addOverlap() {
	      if (!this.overlaps) {
	        this.overlaps = [new Tri(150, 150, 30)];
	        return;
	      }

	      var newPos = this.overlaps.slice(-1)[0].randomEdge();
	      var rad = 10 + Math.random() * 10;

	      this.overlaps.push(new Tri(newPos[0], newPos[1], rad));
	    }
	  }, {
	    key: 'setup',
	    value: function setup() {
	      this.el = document.getElementById(this.id);
	      this.width = this.el.width;
	      this.height = this.el.height;
	      this.ctx = this.el.getContext('2d');

	      for (var i = 0; i < 4000; i++) {
	        this.addOverlap();
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      this.clear();
	      this.overlaps.forEach(function (val) {
	        val.draw(ctx);
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var ctx = this.ctx;
	      ctx.fillStyle = "black";
	      ctx.fillRect(0, 0, this.width, this.height);
	    }
	  }]);

	  return TriangleOverlapApp;
	}(_App3.default);

	exports.default = TriangleOverlapApp;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Grid = __webpack_require__(20);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Piece = __webpack_require__(21);

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
/* 21 */
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

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _TriangleMesh = __webpack_require__(16);

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
	      var _ref2 = _slicedToArray(_ref, 4),
	          sx = _ref2[0],
	          sy = _ref2[1],
	          sw = _ref2[2],
	          sh = _ref2[3];

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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TriangleClip = __webpack_require__(24);

	var _TriangleClip2 = _interopRequireDefault(_TriangleClip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Construct a grid where xy-coordinates correspond to triangles instead of squares
	 * --------------------------------------
	 * \1,1 /\1,3 /\
	 *  \  /  \  /  \
	 *   \/1,2 \/1,4 \
	 *  ---------------
	 *   /\2,2 /\    /
	 *  /  \  /  \  /
	 *   2,1\/    \/
	 *  ---------------
	 */
	var TriangleClipGrid = function () {
	  function TriangleClipGrid(x, y, rad, image) {
	    _classCallCheck(this, TriangleClipGrid);

	    this.x = x;
	    this.y = y;
	    this.dx = this.rad;
	    this.dy = this.rad;
	    this.dots = [];
	    this.rad = rad;
	    this.image = image;

	    // This is probably round-off too much, and creating
	    // a slight overlap along the edges of the triangles
	    this.dx = 1.73 / 2. * this.rad;
	    this.dy = this.rad / 2.;

	    // Final
	    this.setup();
	  }

	  /**
	   *
	   */


	  _createClass(TriangleClipGrid, [{
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
	      var img = this.image;
	      this.grid = [];

	      for (var i = 0; i < 20; i++) {
	        for (var j = 0; j < 20; j++) {
	          var sig = (i + j) % 2 ? 1 : -1;
	          var theta = sig * Math.PI / 2.;
	          var p = this.get(i, j);
	          this.grid.push(new _TriangleClip2.default(p.x, p.y, this.rad, img, 'black', theta));
	        }
	      }
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

	  return TriangleClipGrid;
	}();

	exports.default = TriangleClipGrid;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Construct a Triangle Clip Object
	 */
	var TriangleClip = function () {
	  function TriangleClip(x, y, rad, image, color, theta) {
	    _classCallCheck(this, TriangleClip);

	    this.x = x;
	    this.y = y;
	    this.rad = rad;
	    this.color = color;
	    this.image = image;
	    this.theta = theta;
	  }

	  _createClass(TriangleClip, [{
	    key: 'getPointList',
	    value: function getPointList() {
	      var t = this.theta;
	      var points = [];

	      for (var i = 0; i < 3; i++) {
	        var theta = i * 2 * Math.PI / 3;

	        var u = this.x + this.rad * Math.cos(t + theta);
	        var v = this.y + this.rad * Math.sin(t + theta);

	        u = Math.round(u);
	        v = Math.round(v);

	        points.push({
	          'x': u,
	          'y': v
	        });
	      }

	      return points;
	    }

	    /**
	     * Return an xy-coord bounding box
	     */

	  }, {
	    key: 'getBoundingBox',
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

	    /**
	     * Retrun the dimensions of a random slice for size w, h
	     */

	  }, {
	    key: 'getRandomImageSlice',
	    value: function getRandomImageSlice(w, h) {
	      return {
	        'sx': Math.floor((this.image.width - w) * Math.random()),
	        'sy': Math.floor((this.image.height - h) * Math.random()),
	        'sw': w,
	        'sh': h
	      };
	    }

	    /**
	     * Render a triangle onto a context
	     * @param ctx ...
	     */

	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      var sig = this.up ? -1 : +1;
	      var t = this.theta;

	      ctx.save();

	      ctx.fillStyle = this.color;
	      ctx.strokeStyle = this.color;
	      ctx.lineWidth = 0.90;
	      ctx.beginPath();

	      var points = this.getPointList();

	      ctx.moveTo(points[0].x, points[0].y);
	      ctx.lineTo(points[1].x, points[1].y);
	      ctx.lineTo(points[2].x, points[2].y);

	      ctx.closePath();
	      // ctx.clip();
	      // ctx.rect(0, 0, 1000, 1000);
	      // ctx.fill();
	      // ctx.stroke();
	      // ctx.fill();


	      // ctx.fill();


	      // Draw bounding box
	      // ctx.save();
	      var size = 2 * this.rad;
	      var box = this.getRandomImageSlice(size, size);
	      var tri_box = this.getBoundingBox();

	      // ctx.beginPath();
	      ctx.clip();
	      ctx.fillStyle = 'red';
	      ctx.strokeStyle = 'black';
	      ctx.drawImage(this.image, box.sx, box.sy, box.sw, box.sh, tri_box.x, tri_box.y, tri_box.w, tri_box.h);
	      // ctx.stroke();
	      ctx.restore();
	    }
	  }]);

	  return TriangleClip;
	}();

	exports.default = TriangleClip;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(26);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loading = function (_React$Component) {
	  _inherits(Loading, _React$Component);

	  function Loading() {
	    _classCallCheck(this, Loading);

	    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
	  }

	  _createClass(Loading, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        null,
	        'Fuck'
	      );
	    }
	  }]);

	  return Loading;
	}(_react2.default.Component);

	exports.default = Loading;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Flow = __webpack_require__(28);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var THREE = __webpack_require__(10);

	var FLOW_STATES = new _Flow.FlowBuilder().addState("starting").addState("thinking").addState("success").addState("failure").addConnection("starting", "thinking").addConnection("thinking", "success").addConnection("thinking", "failure").build();

	var SplittableCube = function () {
	  function SplittableCube(position, cubeSize, spacing) {
	    _classCallCheck(this, SplittableCube);

	    this.position = position || new THREE.Vector3(0, 0, 0);
	    this.smallCubeSize = cubeSize || 1;
	    this.spacing = spacing || 0.1 * cubeSize;

	    this.isSplit = true;
	    this.group = new THREE.Group();
	    this._setupSmallCubes(this.smallCubeSize);

	    this._forCubes(function (cube) {
	      this.group.add(cube);
	    });

	    this.group.rotation.x += 1.0;
	    this.group.rotation.y += 1.6;
	    this.group.rotation.z -= 2.0;
	  }

	  _createClass(SplittableCube, [{
	    key: '_newCube',
	    value: function _newCube() {
	      var geometry = new THREE.BoxGeometry(this.smallCubeSize, this.smallCubeSize, this.smallCubeSize);
	      var material = new THREE.MeshNormalMaterial();
	      return new THREE.Mesh(geometry, material);
	    }

	    /**
	     * Worst function ever
	     */

	  }, {
	    key: '_setupSmallCubes',
	    value: function _setupSmallCubes(cubeSize) {
	      this.cubes = (0, _utils.makeArray3)(3, 3, 3);

	      this._forCubes(function (_, i, j, k) {
	        var x = this.position.x + (j - 1) * (this.smallCubeSize + this.spacing);
	        var y = this.position.y + (i - 1) * (this.smallCubeSize + this.spacing);
	        var z = this.position.z + (k - 1) * (this.smallCubeSize + this.spacing);

	        this.cubes[i][j][k] = this._newCube();
	        cube = this.cubes[i][j][k];
	        cube.position.x = x;
	        cube.position.y = y;
	        cube.position.z = z;
	      });
	    }
	  }, {
	    key: '_forCubes',
	    value: function _forCubes(callback) {
	      for (var i = 0; i < 3; i++) {
	        for (var j = 0; j < 3; j++) {
	          for (var k = 0; k < 3; k++) {
	            callback.call(this, this.cubes[i][j][k], i, j, k);
	          }
	        }
	      }
	    }
	  }, {
	    key: '_positionSmallCubes',
	    value: function _positionSmallCubes() {}
	  }, {
	    key: 'split',
	    value: function split(distance) {}
	  }, {
	    key: 'unsplit',
	    value: function unsplit() {}
	  }]);

	  return SplittableCube;
	}();

	var LoadingCube = function () {
	  function LoadingCube(params) {
	    _classCallCheck(this, LoadingCube);

	    this.el = params.el;
	    this.apect = this.el.width / this.el.height;

	    var geometry = new THREE.BoxGeometry(1, 1, 1);
	    var material = new THREE.MeshBasicMaterial({
	      // wireframe: true,
	      color: 0x000000
	    });
	    this.singleCube = new THREE.Mesh(geometry, material);

	    this.cubeList = [];

	    // this.camera.position.x = 5;
	    // this.camera.position.y = 5;
	    this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000);

	    this.camera.position.z = 5;
	    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	    this.state = 'starting';
	    this.scene = new THREE.Scene();

	    // ...
	    this.splittableCube = new SplittableCube(new THREE.Vector3(0, 0, 0), 1);
	    this.scene.add(this.splittableCube.group);

	    // Setup renderer
	    this.isRunning = true;

	    // ....
	    this.renderer = new THREE.WebGLRenderer();
	    this.renderer.setPixelRatio(window.devicePixelRatio);
	    this.renderer.setSize(300, 300);
	    this.renderer.setClearColor(0xFFFFFF, 1);

	    // Attach canvas
	    this.el.appendChild(this.renderer.domElement);

	    this.currentState = FLOW_STATES.getState("starting");
	  }

	  _createClass(LoadingCube, [{
	    key: 'getStates',
	    value: function getStates() {
	      throw new Error("Implement getStates");
	    }
	  }, {
	    key: 'setState',
	    value: function setState(stateId) {
	      var newState = FLOW_STATES.getState(stateId);
	      FLOW_STATES.hasConnection(this.currentState, newState);
	      this.currentState = newState;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      // Do nothing
	      if (!this.isRunning) {
	        return;
	      }

	      this._draw();
	    }
	  }, {
	    key: '_draw',
	    value: function _draw() {
	      this.renderer.clear();
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return LoadingCube;
	}();

	exports.default = LoadingCube;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Node of a Graph
	 */
	var FlowState = exports.FlowState = function () {
	  function FlowState(idName, props) {
	    _classCallCheck(this, FlowState);

	    this.idName = idName;
	    this.connected = {};
	    this.props = props;
	  }

	  _createClass(FlowState, [{
	    key: "connect",
	    value: function connect(state) {
	      this.connected[state.idName] = state;
	    }
	  }, {
	    key: "disconnect",
	    value: function disconnect(state) {
	      delete this.connected[state.idName];
	    }
	  }, {
	    key: "hasConnection",
	    value: function hasConnection(state) {
	      return this.connected.hasOwnProperty(state.idName);
	    }
	  }]);

	  return FlowState;
	}();

	/**
	 * Digraph
	 * Maybe this should be immutable... and we should just use the builder/make
	 * make function to make these.
	 */


	var Flow = exports.Flow = function () {
	  function Flow() {
	    _classCallCheck(this, Flow);

	    this.lookup = {};
	  }

	  _createClass(Flow, [{
	    key: "addState",
	    value: function addState(flowState) {
	      this.lookup[flowState.idName] = flowState;
	    }
	  }, {
	    key: "connectStates",
	    value: function connectStates(startState, endState) {
	      var start = this.lookup[startState.idName];
	      var end = this.lookup[endState.idName];
	      start.connect(end);
	    }
	  }, {
	    key: "getState",
	    value: function getState(idName) {
	      return this.lookup[idName];
	    }

	    /**
	     * Return a list of nodes
	     */

	  }, {
	    key: "getNodes",
	    value: function getNodes() {
	      return Object.values(this.lookup);
	    }

	    /**
	     * Return a list of edges
	     */

	  }, {
	    key: "getEdges",
	    value: function getEdges() {
	      throw new Error("getEdges is Unimplemented");
	      return undefined;
	    }
	  }, {
	    key: "hasState",
	    value: function hasState(id) {
	      return this.lookup.hasOwnProperty(id);
	    }
	  }, {
	    key: "hasConnection",
	    value: function hasConnection(startId, endId) {
	      var start = this.getState(startId);
	      var end = this.getState(endId);
	      if (start == undefined || end == undefined) {
	        return false;
	      } else {
	        return start.hasConnection(end);
	      }
	    }
	  }]);

	  return Flow;
	}();

	var FlowBuilder = exports.FlowBuilder = function () {
	  function FlowBuilder() {
	    _classCallCheck(this, FlowBuilder);

	    this.flow = new Flow();
	  }

	  _createClass(FlowBuilder, [{
	    key: "addState",
	    value: function addState(idName, props) {
	      this.flow.addState(new FlowState(idName, props));
	      return this;
	    }
	  }, {
	    key: "addConnection",
	    value: function addConnection(startId, endId) {
	      var start = this.flow.getState(startId);
	      var end = this.flow.getState(endId);
	      this.flow.connectStates(start, end);
	      return this;
	    }
	  }, {
	    key: "build",
	    value: function build() {
	      return this.flow;
	    }
	  }]);

	  return FlowBuilder;
	}();

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Smile = __webpack_require__(30);

	var _Smile2 = _interopRequireDefault(_Smile);

	var _utils = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SmileApp = function (_App) {
	  _inherits(SmileApp, _App);

	  function SmileApp(params) {
	    _classCallCheck(this, SmileApp);

	    var _this = _possibleConstructorReturn(this, (SmileApp.__proto__ || Object.getPrototypeOf(SmileApp)).call(this, params));

	    _this.el = params.el;
	    console.log(_this.el);
	    _this.width = _this.el.width;
	    _this.height = _this.el.height;
	    _this.ctx = _this.el.getContext('2d');
	    _this.color = "rgb(0, 200, 100)";

	    _this.smile = new _Smile2.default({
	      position: [_this.width / 2., _this.height / 2.],
	      size: 30
	    });
	    return _this;
	  }

	  _createClass(SmileApp, [{
	    key: 'update',
	    value: function update(params) {
	      this.color = params.color || "#000000";
	      this.smile.update(params);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      this.ctx.save();
	      this.ctx.clearRect(0, 0, this.width, this.height);
	      this.ctx.restore();

	      this.ctx.save();
	      this.ctx.lineWidth = 3;
	      this.ctx.fillStyle = this.ctx.strokeStyle = this.color;
	      this.smile.draw(this.ctx);
	      this.ctx.restore();
	    }
	  }]);

	  return SmileApp;
	}(_App3.default);

	exports.default = SmileApp;

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Smile = function () {
	  function Smile(params) {
	    _classCallCheck(this, Smile);

	    this.position = params.position;
	    this.faceSize = params.faceSize;
	    this.eyeSize = this.faceSize / 9.;
	    this.eyeDistance = this.faceSize / 3.;
	    this.eyeSpacing = this.faceSize / 1.3;
	  }

	  _createClass(Smile, [{
	    key: "update",
	    value: function update(params) {
	      this.faceSize = params.faceSize;
	      this.eyeSize = params.eyeSize || this.faceSize / 9.;
	      this.eyeSpacing = params.eyeSpacing || this.faceSize / 1.3;
	      this.eyeDistance = params.eyeDistance || this.faceSize / 3.;
	      this.mouthDistance = params.mouthDistance;
	      this.mouthWidth = params.mouthWidth;
	      this.mouthCrookedFactor = params.mouthCrookedFactor || 0.;
	    }
	  }, {
	    key: "drawFace",
	    value: function drawFace(ctx) {
	      ctx.save();
	      ctx.beginPath();
	      ctx.arc(this.position[0], this.position[1], this.faceSize, 0, 2 * Math.PI);
	      ctx.stroke();
	      ctx.restore();
	    }
	  }, {
	    key: "drawEyes",
	    value: function drawEyes(ctx) {
	      ctx.save();
	      var x = this.position[0];
	      var y = this.position[1] - this.eyeDistance;
	      ctx.beginPath();
	      ctx.arc(x - this.eyeSpacing / 2., y, this.eyeSize, 0, 2 * Math.PI);
	      ctx.fill();
	      ctx.closePath();

	      ctx.beginPath();
	      ctx.arc(x + this.eyeSpacing / 2., y, this.eyeSize, 0, 2 * Math.PI);
	      ctx.fill();
	      ctx.closePath();
	      ctx.restore();
	    }
	  }, {
	    key: "drawMouth",
	    value: function drawMouth(ctx) {
	      ctx.save();
	      var x = this.position[0] - this.mouthWidth / 2.;
	      var y = this.position[1] + this.mouthDistance;
	      var kink = this.mouthCrookedFactor;
	      ctx.beginPath();
	      ctx.moveTo(x, y);
	      ctx.quadraticCurveTo(x + this.mouthWidth / 2. + kink, y + 10, x + this.mouthWidth, y + kink);
	      ctx.stroke();
	      ctx.restore();
	    }
	  }, {
	    key: "draw",
	    value: function draw(ctx) {
	      this.drawFace(ctx);
	      this.drawEyes(ctx);
	      this.drawMouth(ctx);
	    }
	  }]);

	  return Smile;
	}();

	exports.default = Smile;

/***/ }
/******/ ]);