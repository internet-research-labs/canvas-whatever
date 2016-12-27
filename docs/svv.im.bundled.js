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
	exports.SubtitleScript = exports.Subtitle = exports.LoadingCube = exports.Loading = exports.TriangleClipGrid = exports.TriangleMesh = exports.YeahYeahApp = exports.WaveApp = exports.TriOverlapApp = exports.TriangleClipGridApp = exports.SplotchApp = exports.SmileApp = exports.OverlapApp = exports.GoldGridApp = exports.CubeApp = exports.CircleGridApp = exports.CircleApp = exports.DripApp = undefined;

	var _DripApp = __webpack_require__(1);

	var _DripApp2 = _interopRequireDefault(_DripApp);

	var _CircleApp = __webpack_require__(4);

	var _CircleApp2 = _interopRequireDefault(_CircleApp);

	var _CircleGridApp = __webpack_require__(8);

	var _CircleGridApp2 = _interopRequireDefault(_CircleGridApp);

	var _CubeApp = __webpack_require__(9);

	var _CubeApp2 = _interopRequireDefault(_CubeApp);

	var _GoldGridApp = __webpack_require__(11);

	var _GoldGridApp2 = _interopRequireDefault(_GoldGridApp);

	var _OverlapApp = __webpack_require__(12);

	var _OverlapApp2 = _interopRequireDefault(_OverlapApp);

	var _SmileApp = __webpack_require__(13);

	var _SmileApp2 = _interopRequireDefault(_SmileApp);

	var _SplotchApp = __webpack_require__(16);

	var _SplotchApp2 = _interopRequireDefault(_SplotchApp);

	var _TriGridApp = __webpack_require__(17);

	var _TriGridApp2 = _interopRequireDefault(_TriGridApp);

	var _TriangleClipGridApp = __webpack_require__(18);

	var _TriangleClipGridApp2 = _interopRequireDefault(_TriangleClipGridApp);

	var _TriOverlapApp = __webpack_require__(21);

	var _TriOverlapApp2 = _interopRequireDefault(_TriOverlapApp);

	var _WaveApp = __webpack_require__(22);

	var _WaveApp2 = _interopRequireDefault(_WaveApp);

	var _YeahYeahApp = __webpack_require__(25);

	var _YeahYeahApp2 = _interopRequireDefault(_YeahYeahApp);

	var _TriangleMesh = __webpack_require__(19);

	var _TriangleMesh2 = _interopRequireDefault(_TriangleMesh);

	var _TriangleClipGrid = __webpack_require__(26);

	var _TriangleClipGrid2 = _interopRequireDefault(_TriangleClipGrid);

	var _Loading = __webpack_require__(28);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _LoadingCube = __webpack_require__(30);

	var _LoadingCube2 = _interopRequireDefault(_LoadingCube);

	var _Subtitles = __webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.DripApp = _DripApp2.default;
	exports.CircleApp = _CircleApp2.default;
	exports.CircleGridApp = _CircleGridApp2.default;
	exports.CubeApp = _CubeApp2.default;
	exports.GoldGridApp = _GoldGridApp2.default;
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
	exports.Subtitle = _Subtitles.Subtitle;
	exports.SubtitleScript = _Subtitles.SubtitleScript;

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

	var _THREE = __webpack_require__(10);

	var THREE = _interopRequireWildcard(_THREE);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Grid with disconnected (unsmoothed) faces.
	 * xy-coordinates follow this layout
	 *  +---*---*---*---*---*
	 *   \ / \ / \ / \ / \ / \
	 *    *---*---*---*---*---*
	 *   / \ / \ / \ / \ / \ /
	 *  *---*---*---*---*---*
	 *   \ / \ / \ / \ / \ / \
	 *    *---*---*---*---*---*
	 *   / \ / \ / \ / \ / \ /
	 *  *---*---*---*---*---*
	 */

	var TrianglePlane = function TrianglePlane(width, height) {
	  _classCallCheck(this, TrianglePlane);

	  this.geometry = new THREE.Geometry();
	};

	var GoldGridApp = function (_App) {
	  _inherits(GoldGridApp, _App);

	  function GoldGridApp(params) {
	    _classCallCheck(this, GoldGridApp);

	    var _this = _possibleConstructorReturn(this, (GoldGridApp.__proto__ || Object.getPrototypeOf(GoldGridApp)).call(this, params));

	    _this.el = params.el, _this.setup();
	    return _this;
	  }

	  /**
	   * Setup ...
	   */


	  _createClass(GoldGridApp, [{
	    key: 'setup',
	    value: function setup() {
	      // Camera
	      this.camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000);
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	      // Scene and rengerer
	      this.scene = new THREE.Scene();
	      this.renderer = new THREE.WebGLRenderer({
	        canvas: this.el
	      });

	      // Whatever work
	      this.renderer.setClearColor(0xFFFFFF, 1);
	    }

	    /**
	     * Update ...
	     */

	  }, {
	    key: 'update',
	    value: function update(params) {}

	    /**
	     * Draw ...
	     */

	  }, {
	    key: 'draw',
	    value: function draw(params) {
	      this.renderer.clear();
	      this.renderer.render(this.scene, this.camera);
	    }
	  }]);

	  return GoldGridApp;
	}(_App3.default);

	exports.default = GoldGridApp;

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Smile = __webpack_require__(14);

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
/* 14 */
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _utils = __webpack_require__(15);

	var _TriangleMesh = __webpack_require__(19);

	var _TriangleMesh2 = _interopRequireDefault(_TriangleMesh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function drawTransfer(ctx, image, destTri, _ref) {
	  var _ref2 = _slicedToArray(_ref, 4),
	      sx = _ref2[0],
	      sy = _ref2[1],
	      sw = _ref2[2],
	      sh = _ref2[3];

	  var points = destTri.getPointList();
	  var box = destTri.getBoundingBox();

	  ctx.save();
	  ctx.beginPath();
	  ctx.fillStyle = 'black';
	  ctx.strokeStyle = 'black';
	  ctx.imageSmoothingEnabled = true;

	  ctx.beginPath();
	  ctx.moveTo(points[0].x, points[0].y);
	  ctx.lineTo(points[1].x, points[1].y);
	  ctx.lineTo(points[2].x, points[2].y);

	  ctx.clip();

	  for (var i = 0; i < 3; i++) {
	    ctx.drawImage(image, sx, sy, sw, sh, box.x, box.y, box.w, box.h);
	  }

	  ctx.restore();
	}

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
	    _this.image = params.image;
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

	          var coinFlip = Math.floor(3 * Math.random()) == 0;

	          var bounds = tri.getBoundingBox();
	          if (!coinFlip) {
	            drawTriangle(this.ctx, tri, style);
	          } else {
	            drawTransfer(this.ctx, this.image, tri, [bounds.x, bounds.y, bounds.w, bounds.h]);
	          }
	        }
	      }
	    }
	  }]);

	  return TriangleClipGridApp;
	}(_App3.default);

	exports.default = TriangleClipGridApp;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _RegularTriangle = __webpack_require__(20);

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
/* 20 */
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
	  }, {
	    key: 'getAlteredTriangle',
	    value: function getAlteredTriangle(radius) {
	      return new RegularTriangle(this.x, this.y, radius, this.theta);
	    }
	  }]);

	  return RegularTriangle;
	}();

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _Grid = __webpack_require__(23);

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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Piece = __webpack_require__(24);

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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(2);

	var _App3 = _interopRequireDefault(_App2);

	var _TriangleMesh = __webpack_require__(19);

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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TriangleClip = __webpack_require__(27);

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
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(29);

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
/* 29 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Flow = __webpack_require__(31);

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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SubtitleScript = exports.Subtitle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _async = __webpack_require__(33);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Subtitle = exports.Subtitle = function () {
	  function Subtitle(text, style) {
	    _classCallCheck(this, Subtitle);

	    style = style || {};
	    this.text = text;
	    this.color = style.color || "black";
	    this.outlineColor = style.outlineColor || "white";
	    this.divWidth = style.width || "100%";
	    this.divHeight = style.height;
	    this.bottom = style.bottom || "0px";
	    this.left = style.left || "0px";

	    // 
	    this.domElement = this._createDomElement();
	  }

	  _createClass(Subtitle, [{
	    key: "_createDomElement",
	    value: function _createDomElement() {
	      var div = document.createElement("DIV");
	      var span = document.createElement("SPAN");
	      div.appendChild(span);
	      span.innerHTML = this.text;

	      div.style.color = this.color;
	      div.style.position = "fixed";
	      div.style.left = this.left;
	      div.style.bottom = this.bottom;
	      div.style.zIndex = "9000";
	      div.style.textShadow = "1px 1px white, -1px -1px white, -1px 1px white, 1px -1px white";
	      div.style.width = this.divWidth;
	      if (this.divHeight) {
	        div.style.height = this.divHeight;
	      }

	      div.style.textAlign = "center";

	      return div;
	    }
	  }, {
	    key: "showFor",
	    value: function showFor(milliseconds, callback) {
	      this.show();

	      setTimeout(function () {
	        this.hide();
	        if (callback != undefined) {
	          callback.apply(this);
	        }
	      }.bind(this), milliseconds);
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      document.body.appendChild(this.domElement);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      document.body.removeChild(this.domElement);
	    }
	  }]);

	  return Subtitle;
	}();

	var SubtitleScript = exports.SubtitleScript = function () {
	  function SubtitleScript(style) {
	    _classCallCheck(this, SubtitleScript);

	    this.style = style;
	    this.functions = [];
	  }

	  _createClass(SubtitleScript, [{
	    key: "add",
	    value: function add(text, duration) {
	      var _this = this;

	      this.functions.push(function (next) {
	        var sub = new Subtitle(text, _this.style);
	        sub.showFor(duration, _this.read.bind(_this));
	      });
	      return this;
	    }
	  }, {
	    key: "read",
	    value: function read() {
	      var fn = this.functions.shift();
	      if (fn) {
	        fn.call();
	      }
	    }
	  }]);

	  return SubtitleScript;
	}();

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate, process) {/*!
	 * async
	 * https://github.com/caolan/async
	 *
	 * Copyright 2010-2014 Caolan McMahon
	 * Released under the MIT license
	 */
	(function () {

	    var async = {};
	    function noop() {}
	    function identity(v) {
	        return v;
	    }
	    function toBool(v) {
	        return !!v;
	    }
	    function notId(v) {
	        return !v;
	    }

	    // global on the server, window in the browser
	    var previous_async;

	    // Establish the root object, `window` (`self`) in the browser, `global`
	    // on the server, or `this` in some virtual machines. We use `self`
	    // instead of `window` for `WebWorker` support.
	    var root = typeof self === 'object' && self.self === self && self ||
	            typeof global === 'object' && global.global === global && global ||
	            this;

	    if (root != null) {
	        previous_async = root.async;
	    }

	    async.noConflict = function () {
	        root.async = previous_async;
	        return async;
	    };

	    function only_once(fn) {
	        return function() {
	            if (fn === null) throw new Error("Callback was already called.");
	            fn.apply(this, arguments);
	            fn = null;
	        };
	    }

	    function _once(fn) {
	        return function() {
	            if (fn === null) return;
	            fn.apply(this, arguments);
	            fn = null;
	        };
	    }

	    //// cross-browser compatiblity functions ////

	    var _toString = Object.prototype.toString;

	    var _isArray = Array.isArray || function (obj) {
	        return _toString.call(obj) === '[object Array]';
	    };

	    // Ported from underscore.js isObject
	    var _isObject = function(obj) {
	        var type = typeof obj;
	        return type === 'function' || type === 'object' && !!obj;
	    };

	    function _isArrayLike(arr) {
	        return _isArray(arr) || (
	            // has a positive integer length property
	            typeof arr.length === "number" &&
	            arr.length >= 0 &&
	            arr.length % 1 === 0
	        );
	    }

	    function _arrayEach(arr, iterator) {
	        var index = -1,
	            length = arr.length;

	        while (++index < length) {
	            iterator(arr[index], index, arr);
	        }
	    }

	    function _map(arr, iterator) {
	        var index = -1,
	            length = arr.length,
	            result = Array(length);

	        while (++index < length) {
	            result[index] = iterator(arr[index], index, arr);
	        }
	        return result;
	    }

	    function _range(count) {
	        return _map(Array(count), function (v, i) { return i; });
	    }

	    function _reduce(arr, iterator, memo) {
	        _arrayEach(arr, function (x, i, a) {
	            memo = iterator(memo, x, i, a);
	        });
	        return memo;
	    }

	    function _forEachOf(object, iterator) {
	        _arrayEach(_keys(object), function (key) {
	            iterator(object[key], key);
	        });
	    }

	    function _indexOf(arr, item) {
	        for (var i = 0; i < arr.length; i++) {
	            if (arr[i] === item) return i;
	        }
	        return -1;
	    }

	    var _keys = Object.keys || function (obj) {
	        var keys = [];
	        for (var k in obj) {
	            if (obj.hasOwnProperty(k)) {
	                keys.push(k);
	            }
	        }
	        return keys;
	    };

	    function _keyIterator(coll) {
	        var i = -1;
	        var len;
	        var keys;
	        if (_isArrayLike(coll)) {
	            len = coll.length;
	            return function next() {
	                i++;
	                return i < len ? i : null;
	            };
	        } else {
	            keys = _keys(coll);
	            len = keys.length;
	            return function next() {
	                i++;
	                return i < len ? keys[i] : null;
	            };
	        }
	    }

	    // Similar to ES6's rest param (http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html)
	    // This accumulates the arguments passed into an array, after a given index.
	    // From underscore.js (https://github.com/jashkenas/underscore/pull/2140).
	    function _restParam(func, startIndex) {
	        startIndex = startIndex == null ? func.length - 1 : +startIndex;
	        return function() {
	            var length = Math.max(arguments.length - startIndex, 0);
	            var rest = Array(length);
	            for (var index = 0; index < length; index++) {
	                rest[index] = arguments[index + startIndex];
	            }
	            switch (startIndex) {
	                case 0: return func.call(this, rest);
	                case 1: return func.call(this, arguments[0], rest);
	            }
	            // Currently unused but handle cases outside of the switch statement:
	            // var args = Array(startIndex + 1);
	            // for (index = 0; index < startIndex; index++) {
	            //     args[index] = arguments[index];
	            // }
	            // args[startIndex] = rest;
	            // return func.apply(this, args);
	        };
	    }

	    function _withoutIndex(iterator) {
	        return function (value, index, callback) {
	            return iterator(value, callback);
	        };
	    }

	    //// exported async module functions ////

	    //// nextTick implementation with browser-compatible fallback ////

	    // capture the global reference to guard against fakeTimer mocks
	    var _setImmediate = typeof setImmediate === 'function' && setImmediate;

	    var _delay = _setImmediate ? function(fn) {
	        // not a direct alias for IE10 compatibility
	        _setImmediate(fn);
	    } : function(fn) {
	        setTimeout(fn, 0);
	    };

	    if (typeof process === 'object' && typeof process.nextTick === 'function') {
	        async.nextTick = process.nextTick;
	    } else {
	        async.nextTick = _delay;
	    }
	    async.setImmediate = _setImmediate ? _delay : async.nextTick;


	    async.forEach =
	    async.each = function (arr, iterator, callback) {
	        return async.eachOf(arr, _withoutIndex(iterator), callback);
	    };

	    async.forEachSeries =
	    async.eachSeries = function (arr, iterator, callback) {
	        return async.eachOfSeries(arr, _withoutIndex(iterator), callback);
	    };


	    async.forEachLimit =
	    async.eachLimit = function (arr, limit, iterator, callback) {
	        return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
	    };

	    async.forEachOf =
	    async.eachOf = function (object, iterator, callback) {
	        callback = _once(callback || noop);
	        object = object || [];

	        var iter = _keyIterator(object);
	        var key, completed = 0;

	        while ((key = iter()) != null) {
	            completed += 1;
	            iterator(object[key], key, only_once(done));
	        }

	        if (completed === 0) callback(null);

	        function done(err) {
	            completed--;
	            if (err) {
	                callback(err);
	            }
	            // Check key is null in case iterator isn't exhausted
	            // and done resolved synchronously.
	            else if (key === null && completed <= 0) {
	                callback(null);
	            }
	        }
	    };

	    async.forEachOfSeries =
	    async.eachOfSeries = function (obj, iterator, callback) {
	        callback = _once(callback || noop);
	        obj = obj || [];
	        var nextKey = _keyIterator(obj);
	        var key = nextKey();
	        function iterate() {
	            var sync = true;
	            if (key === null) {
	                return callback(null);
	            }
	            iterator(obj[key], key, only_once(function (err) {
	                if (err) {
	                    callback(err);
	                }
	                else {
	                    key = nextKey();
	                    if (key === null) {
	                        return callback(null);
	                    } else {
	                        if (sync) {
	                            async.setImmediate(iterate);
	                        } else {
	                            iterate();
	                        }
	                    }
	                }
	            }));
	            sync = false;
	        }
	        iterate();
	    };



	    async.forEachOfLimit =
	    async.eachOfLimit = function (obj, limit, iterator, callback) {
	        _eachOfLimit(limit)(obj, iterator, callback);
	    };

	    function _eachOfLimit(limit) {

	        return function (obj, iterator, callback) {
	            callback = _once(callback || noop);
	            obj = obj || [];
	            var nextKey = _keyIterator(obj);
	            if (limit <= 0) {
	                return callback(null);
	            }
	            var done = false;
	            var running = 0;
	            var errored = false;

	            (function replenish () {
	                if (done && running <= 0) {
	                    return callback(null);
	                }

	                while (running < limit && !errored) {
	                    var key = nextKey();
	                    if (key === null) {
	                        done = true;
	                        if (running <= 0) {
	                            callback(null);
	                        }
	                        return;
	                    }
	                    running += 1;
	                    iterator(obj[key], key, only_once(function (err) {
	                        running -= 1;
	                        if (err) {
	                            callback(err);
	                            errored = true;
	                        }
	                        else {
	                            replenish();
	                        }
	                    }));
	                }
	            })();
	        };
	    }


	    function doParallel(fn) {
	        return function (obj, iterator, callback) {
	            return fn(async.eachOf, obj, iterator, callback);
	        };
	    }
	    function doParallelLimit(fn) {
	        return function (obj, limit, iterator, callback) {
	            return fn(_eachOfLimit(limit), obj, iterator, callback);
	        };
	    }
	    function doSeries(fn) {
	        return function (obj, iterator, callback) {
	            return fn(async.eachOfSeries, obj, iterator, callback);
	        };
	    }

	    function _asyncMap(eachfn, arr, iterator, callback) {
	        callback = _once(callback || noop);
	        arr = arr || [];
	        var results = _isArrayLike(arr) ? [] : {};
	        eachfn(arr, function (value, index, callback) {
	            iterator(value, function (err, v) {
	                results[index] = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, results);
	        });
	    }

	    async.map = doParallel(_asyncMap);
	    async.mapSeries = doSeries(_asyncMap);
	    async.mapLimit = doParallelLimit(_asyncMap);

	    // reduce only has a series version, as doing reduce in parallel won't
	    // work in many situations.
	    async.inject =
	    async.foldl =
	    async.reduce = function (arr, memo, iterator, callback) {
	        async.eachOfSeries(arr, function (x, i, callback) {
	            iterator(memo, x, function (err, v) {
	                memo = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, memo);
	        });
	    };

	    async.foldr =
	    async.reduceRight = function (arr, memo, iterator, callback) {
	        var reversed = _map(arr, identity).reverse();
	        async.reduce(reversed, memo, iterator, callback);
	    };

	    async.transform = function (arr, memo, iterator, callback) {
	        if (arguments.length === 3) {
	            callback = iterator;
	            iterator = memo;
	            memo = _isArray(arr) ? [] : {};
	        }

	        async.eachOf(arr, function(v, k, cb) {
	            iterator(memo, v, k, cb);
	        }, function(err) {
	            callback(err, memo);
	        });
	    };

	    function _filter(eachfn, arr, iterator, callback) {
	        var results = [];
	        eachfn(arr, function (x, index, callback) {
	            iterator(x, function (v) {
	                if (v) {
	                    results.push({index: index, value: x});
	                }
	                callback();
	            });
	        }, function () {
	            callback(_map(results.sort(function (a, b) {
	                return a.index - b.index;
	            }), function (x) {
	                return x.value;
	            }));
	        });
	    }

	    async.select =
	    async.filter = doParallel(_filter);

	    async.selectLimit =
	    async.filterLimit = doParallelLimit(_filter);

	    async.selectSeries =
	    async.filterSeries = doSeries(_filter);

	    function _reject(eachfn, arr, iterator, callback) {
	        _filter(eachfn, arr, function(value, cb) {
	            iterator(value, function(v) {
	                cb(!v);
	            });
	        }, callback);
	    }
	    async.reject = doParallel(_reject);
	    async.rejectLimit = doParallelLimit(_reject);
	    async.rejectSeries = doSeries(_reject);

	    function _createTester(eachfn, check, getResult) {
	        return function(arr, limit, iterator, cb) {
	            function done() {
	                if (cb) cb(getResult(false, void 0));
	            }
	            function iteratee(x, _, callback) {
	                if (!cb) return callback();
	                iterator(x, function (v) {
	                    if (cb && check(v)) {
	                        cb(getResult(true, x));
	                        cb = iterator = false;
	                    }
	                    callback();
	                });
	            }
	            if (arguments.length > 3) {
	                eachfn(arr, limit, iteratee, done);
	            } else {
	                cb = iterator;
	                iterator = limit;
	                eachfn(arr, iteratee, done);
	            }
	        };
	    }

	    async.any =
	    async.some = _createTester(async.eachOf, toBool, identity);

	    async.someLimit = _createTester(async.eachOfLimit, toBool, identity);

	    async.all =
	    async.every = _createTester(async.eachOf, notId, notId);

	    async.everyLimit = _createTester(async.eachOfLimit, notId, notId);

	    function _findGetResult(v, x) {
	        return x;
	    }
	    async.detect = _createTester(async.eachOf, identity, _findGetResult);
	    async.detectSeries = _createTester(async.eachOfSeries, identity, _findGetResult);
	    async.detectLimit = _createTester(async.eachOfLimit, identity, _findGetResult);

	    async.sortBy = function (arr, iterator, callback) {
	        async.map(arr, function (x, callback) {
	            iterator(x, function (err, criteria) {
	                if (err) {
	                    callback(err);
	                }
	                else {
	                    callback(null, {value: x, criteria: criteria});
	                }
	            });
	        }, function (err, results) {
	            if (err) {
	                return callback(err);
	            }
	            else {
	                callback(null, _map(results.sort(comparator), function (x) {
	                    return x.value;
	                }));
	            }

	        });

	        function comparator(left, right) {
	            var a = left.criteria, b = right.criteria;
	            return a < b ? -1 : a > b ? 1 : 0;
	        }
	    };

	    async.auto = function (tasks, concurrency, callback) {
	        if (typeof arguments[1] === 'function') {
	            // concurrency is optional, shift the args.
	            callback = concurrency;
	            concurrency = null;
	        }
	        callback = _once(callback || noop);
	        var keys = _keys(tasks);
	        var remainingTasks = keys.length;
	        if (!remainingTasks) {
	            return callback(null);
	        }
	        if (!concurrency) {
	            concurrency = remainingTasks;
	        }

	        var results = {};
	        var runningTasks = 0;

	        var hasError = false;

	        var listeners = [];
	        function addListener(fn) {
	            listeners.unshift(fn);
	        }
	        function removeListener(fn) {
	            var idx = _indexOf(listeners, fn);
	            if (idx >= 0) listeners.splice(idx, 1);
	        }
	        function taskComplete() {
	            remainingTasks--;
	            _arrayEach(listeners.slice(0), function (fn) {
	                fn();
	            });
	        }

	        addListener(function () {
	            if (!remainingTasks) {
	                callback(null, results);
	            }
	        });

	        _arrayEach(keys, function (k) {
	            if (hasError) return;
	            var task = _isArray(tasks[k]) ? tasks[k]: [tasks[k]];
	            var taskCallback = _restParam(function(err, args) {
	                runningTasks--;
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                if (err) {
	                    var safeResults = {};
	                    _forEachOf(results, function(val, rkey) {
	                        safeResults[rkey] = val;
	                    });
	                    safeResults[k] = args;
	                    hasError = true;

	                    callback(err, safeResults);
	                }
	                else {
	                    results[k] = args;
	                    async.setImmediate(taskComplete);
	                }
	            });
	            var requires = task.slice(0, task.length - 1);
	            // prevent dead-locks
	            var len = requires.length;
	            var dep;
	            while (len--) {
	                if (!(dep = tasks[requires[len]])) {
	                    throw new Error('Has nonexistent dependency in ' + requires.join(', '));
	                }
	                if (_isArray(dep) && _indexOf(dep, k) >= 0) {
	                    throw new Error('Has cyclic dependencies');
	                }
	            }
	            function ready() {
	                return runningTasks < concurrency && _reduce(requires, function (a, x) {
	                    return (a && results.hasOwnProperty(x));
	                }, true) && !results.hasOwnProperty(k);
	            }
	            if (ready()) {
	                runningTasks++;
	                task[task.length - 1](taskCallback, results);
	            }
	            else {
	                addListener(listener);
	            }
	            function listener() {
	                if (ready()) {
	                    runningTasks++;
	                    removeListener(listener);
	                    task[task.length - 1](taskCallback, results);
	                }
	            }
	        });
	    };



	    async.retry = function(times, task, callback) {
	        var DEFAULT_TIMES = 5;
	        var DEFAULT_INTERVAL = 0;

	        var attempts = [];

	        var opts = {
	            times: DEFAULT_TIMES,
	            interval: DEFAULT_INTERVAL
	        };

	        function parseTimes(acc, t){
	            if(typeof t === 'number'){
	                acc.times = parseInt(t, 10) || DEFAULT_TIMES;
	            } else if(typeof t === 'object'){
	                acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
	                acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
	            } else {
	                throw new Error('Unsupported argument type for \'times\': ' + typeof t);
	            }
	        }

	        var length = arguments.length;
	        if (length < 1 || length > 3) {
	            throw new Error('Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)');
	        } else if (length <= 2 && typeof times === 'function') {
	            callback = task;
	            task = times;
	        }
	        if (typeof times !== 'function') {
	            parseTimes(opts, times);
	        }
	        opts.callback = callback;
	        opts.task = task;

	        function wrappedTask(wrappedCallback, wrappedResults) {
	            function retryAttempt(task, finalAttempt) {
	                return function(seriesCallback) {
	                    task(function(err, result){
	                        seriesCallback(!err || finalAttempt, {err: err, result: result});
	                    }, wrappedResults);
	                };
	            }

	            function retryInterval(interval){
	                return function(seriesCallback){
	                    setTimeout(function(){
	                        seriesCallback(null);
	                    }, interval);
	                };
	            }

	            while (opts.times) {

	                var finalAttempt = !(opts.times-=1);
	                attempts.push(retryAttempt(opts.task, finalAttempt));
	                if(!finalAttempt && opts.interval > 0){
	                    attempts.push(retryInterval(opts.interval));
	                }
	            }

	            async.series(attempts, function(done, data){
	                data = data[data.length - 1];
	                (wrappedCallback || opts.callback)(data.err, data.result);
	            });
	        }

	        // If a callback is passed, run this as a controll flow
	        return opts.callback ? wrappedTask() : wrappedTask;
	    };

	    async.waterfall = function (tasks, callback) {
	        callback = _once(callback || noop);
	        if (!_isArray(tasks)) {
	            var err = new Error('First argument to waterfall must be an array of functions');
	            return callback(err);
	        }
	        if (!tasks.length) {
	            return callback();
	        }
	        function wrapIterator(iterator) {
	            return _restParam(function (err, args) {
	                if (err) {
	                    callback.apply(null, [err].concat(args));
	                }
	                else {
	                    var next = iterator.next();
	                    if (next) {
	                        args.push(wrapIterator(next));
	                    }
	                    else {
	                        args.push(callback);
	                    }
	                    ensureAsync(iterator).apply(null, args);
	                }
	            });
	        }
	        wrapIterator(async.iterator(tasks))();
	    };

	    function _parallel(eachfn, tasks, callback) {
	        callback = callback || noop;
	        var results = _isArrayLike(tasks) ? [] : {};

	        eachfn(tasks, function (task, key, callback) {
	            task(_restParam(function (err, args) {
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                results[key] = args;
	                callback(err);
	            }));
	        }, function (err) {
	            callback(err, results);
	        });
	    }

	    async.parallel = function (tasks, callback) {
	        _parallel(async.eachOf, tasks, callback);
	    };

	    async.parallelLimit = function(tasks, limit, callback) {
	        _parallel(_eachOfLimit(limit), tasks, callback);
	    };

	    async.series = function(tasks, callback) {
	        _parallel(async.eachOfSeries, tasks, callback);
	    };

	    async.iterator = function (tasks) {
	        function makeCallback(index) {
	            function fn() {
	                if (tasks.length) {
	                    tasks[index].apply(null, arguments);
	                }
	                return fn.next();
	            }
	            fn.next = function () {
	                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
	            };
	            return fn;
	        }
	        return makeCallback(0);
	    };

	    async.apply = _restParam(function (fn, args) {
	        return _restParam(function (callArgs) {
	            return fn.apply(
	                null, args.concat(callArgs)
	            );
	        });
	    });

	    function _concat(eachfn, arr, fn, callback) {
	        var result = [];
	        eachfn(arr, function (x, index, cb) {
	            fn(x, function (err, y) {
	                result = result.concat(y || []);
	                cb(err);
	            });
	        }, function (err) {
	            callback(err, result);
	        });
	    }
	    async.concat = doParallel(_concat);
	    async.concatSeries = doSeries(_concat);

	    async.whilst = function (test, iterator, callback) {
	        callback = callback || noop;
	        if (test()) {
	            var next = _restParam(function(err, args) {
	                if (err) {
	                    callback(err);
	                } else if (test.apply(this, args)) {
	                    iterator(next);
	                } else {
	                    callback.apply(null, [null].concat(args));
	                }
	            });
	            iterator(next);
	        } else {
	            callback(null);
	        }
	    };

	    async.doWhilst = function (iterator, test, callback) {
	        var calls = 0;
	        return async.whilst(function() {
	            return ++calls <= 1 || test.apply(this, arguments);
	        }, iterator, callback);
	    };

	    async.until = function (test, iterator, callback) {
	        return async.whilst(function() {
	            return !test.apply(this, arguments);
	        }, iterator, callback);
	    };

	    async.doUntil = function (iterator, test, callback) {
	        return async.doWhilst(iterator, function() {
	            return !test.apply(this, arguments);
	        }, callback);
	    };

	    async.during = function (test, iterator, callback) {
	        callback = callback || noop;

	        var next = _restParam(function(err, args) {
	            if (err) {
	                callback(err);
	            } else {
	                args.push(check);
	                test.apply(this, args);
	            }
	        });

	        var check = function(err, truth) {
	            if (err) {
	                callback(err);
	            } else if (truth) {
	                iterator(next);
	            } else {
	                callback(null);
	            }
	        };

	        test(check);
	    };

	    async.doDuring = function (iterator, test, callback) {
	        var calls = 0;
	        async.during(function(next) {
	            if (calls++ < 1) {
	                next(null, true);
	            } else {
	                test.apply(this, arguments);
	            }
	        }, iterator, callback);
	    };

	    function _queue(worker, concurrency, payload) {
	        if (concurrency == null) {
	            concurrency = 1;
	        }
	        else if(concurrency === 0) {
	            throw new Error('Concurrency must not be zero');
	        }
	        function _insert(q, data, pos, callback) {
	            if (callback != null && typeof callback !== "function") {
	                throw new Error("task callback must be a function");
	            }
	            q.started = true;
	            if (!_isArray(data)) {
	                data = [data];
	            }
	            if(data.length === 0 && q.idle()) {
	                // call drain immediately if there are no tasks
	                return async.setImmediate(function() {
	                    q.drain();
	                });
	            }
	            _arrayEach(data, function(task) {
	                var item = {
	                    data: task,
	                    callback: callback || noop
	                };

	                if (pos) {
	                    q.tasks.unshift(item);
	                } else {
	                    q.tasks.push(item);
	                }

	                if (q.tasks.length === q.concurrency) {
	                    q.saturated();
	                }
	            });
	            async.setImmediate(q.process);
	        }
	        function _next(q, tasks) {
	            return function(){
	                workers -= 1;

	                var removed = false;
	                var args = arguments;
	                _arrayEach(tasks, function (task) {
	                    _arrayEach(workersList, function (worker, index) {
	                        if (worker === task && !removed) {
	                            workersList.splice(index, 1);
	                            removed = true;
	                        }
	                    });

	                    task.callback.apply(task, args);
	                });
	                if (q.tasks.length + workers === 0) {
	                    q.drain();
	                }
	                q.process();
	            };
	        }

	        var workers = 0;
	        var workersList = [];
	        var q = {
	            tasks: [],
	            concurrency: concurrency,
	            payload: payload,
	            saturated: noop,
	            empty: noop,
	            drain: noop,
	            started: false,
	            paused: false,
	            push: function (data, callback) {
	                _insert(q, data, false, callback);
	            },
	            kill: function () {
	                q.drain = noop;
	                q.tasks = [];
	            },
	            unshift: function (data, callback) {
	                _insert(q, data, true, callback);
	            },
	            process: function () {
	                while(!q.paused && workers < q.concurrency && q.tasks.length){

	                    var tasks = q.payload ?
	                        q.tasks.splice(0, q.payload) :
	                        q.tasks.splice(0, q.tasks.length);

	                    var data = _map(tasks, function (task) {
	                        return task.data;
	                    });

	                    if (q.tasks.length === 0) {
	                        q.empty();
	                    }
	                    workers += 1;
	                    workersList.push(tasks[0]);
	                    var cb = only_once(_next(q, tasks));
	                    worker(data, cb);
	                }
	            },
	            length: function () {
	                return q.tasks.length;
	            },
	            running: function () {
	                return workers;
	            },
	            workersList: function () {
	                return workersList;
	            },
	            idle: function() {
	                return q.tasks.length + workers === 0;
	            },
	            pause: function () {
	                q.paused = true;
	            },
	            resume: function () {
	                if (q.paused === false) { return; }
	                q.paused = false;
	                var resumeCount = Math.min(q.concurrency, q.tasks.length);
	                // Need to call q.process once per concurrent
	                // worker to preserve full concurrency after pause
	                for (var w = 1; w <= resumeCount; w++) {
	                    async.setImmediate(q.process);
	                }
	            }
	        };
	        return q;
	    }

	    async.queue = function (worker, concurrency) {
	        var q = _queue(function (items, cb) {
	            worker(items[0], cb);
	        }, concurrency, 1);

	        return q;
	    };

	    async.priorityQueue = function (worker, concurrency) {

	        function _compareTasks(a, b){
	            return a.priority - b.priority;
	        }

	        function _binarySearch(sequence, item, compare) {
	            var beg = -1,
	                end = sequence.length - 1;
	            while (beg < end) {
	                var mid = beg + ((end - beg + 1) >>> 1);
	                if (compare(item, sequence[mid]) >= 0) {
	                    beg = mid;
	                } else {
	                    end = mid - 1;
	                }
	            }
	            return beg;
	        }

	        function _insert(q, data, priority, callback) {
	            if (callback != null && typeof callback !== "function") {
	                throw new Error("task callback must be a function");
	            }
	            q.started = true;
	            if (!_isArray(data)) {
	                data = [data];
	            }
	            if(data.length === 0) {
	                // call drain immediately if there are no tasks
	                return async.setImmediate(function() {
	                    q.drain();
	                });
	            }
	            _arrayEach(data, function(task) {
	                var item = {
	                    data: task,
	                    priority: priority,
	                    callback: typeof callback === 'function' ? callback : noop
	                };

	                q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);

	                if (q.tasks.length === q.concurrency) {
	                    q.saturated();
	                }
	                async.setImmediate(q.process);
	            });
	        }

	        // Start with a normal queue
	        var q = async.queue(worker, concurrency);

	        // Override push to accept second parameter representing priority
	        q.push = function (data, priority, callback) {
	            _insert(q, data, priority, callback);
	        };

	        // Remove unshift function
	        delete q.unshift;

	        return q;
	    };

	    async.cargo = function (worker, payload) {
	        return _queue(worker, 1, payload);
	    };

	    function _console_fn(name) {
	        return _restParam(function (fn, args) {
	            fn.apply(null, args.concat([_restParam(function (err, args) {
	                if (typeof console === 'object') {
	                    if (err) {
	                        if (console.error) {
	                            console.error(err);
	                        }
	                    }
	                    else if (console[name]) {
	                        _arrayEach(args, function (x) {
	                            console[name](x);
	                        });
	                    }
	                }
	            })]));
	        });
	    }
	    async.log = _console_fn('log');
	    async.dir = _console_fn('dir');
	    /*async.info = _console_fn('info');
	    async.warn = _console_fn('warn');
	    async.error = _console_fn('error');*/

	    async.memoize = function (fn, hasher) {
	        var memo = {};
	        var queues = {};
	        var has = Object.prototype.hasOwnProperty;
	        hasher = hasher || identity;
	        var memoized = _restParam(function memoized(args) {
	            var callback = args.pop();
	            var key = hasher.apply(null, args);
	            if (has.call(memo, key)) {   
	                async.setImmediate(function () {
	                    callback.apply(null, memo[key]);
	                });
	            }
	            else if (has.call(queues, key)) {
	                queues[key].push(callback);
	            }
	            else {
	                queues[key] = [callback];
	                fn.apply(null, args.concat([_restParam(function (args) {
	                    memo[key] = args;
	                    var q = queues[key];
	                    delete queues[key];
	                    for (var i = 0, l = q.length; i < l; i++) {
	                        q[i].apply(null, args);
	                    }
	                })]));
	            }
	        });
	        memoized.memo = memo;
	        memoized.unmemoized = fn;
	        return memoized;
	    };

	    async.unmemoize = function (fn) {
	        return function () {
	            return (fn.unmemoized || fn).apply(null, arguments);
	        };
	    };

	    function _times(mapper) {
	        return function (count, iterator, callback) {
	            mapper(_range(count), iterator, callback);
	        };
	    }

	    async.times = _times(async.map);
	    async.timesSeries = _times(async.mapSeries);
	    async.timesLimit = function (count, limit, iterator, callback) {
	        return async.mapLimit(_range(count), limit, iterator, callback);
	    };

	    async.seq = function (/* functions... */) {
	        var fns = arguments;
	        return _restParam(function (args) {
	            var that = this;

	            var callback = args[args.length - 1];
	            if (typeof callback == 'function') {
	                args.pop();
	            } else {
	                callback = noop;
	            }

	            async.reduce(fns, args, function (newargs, fn, cb) {
	                fn.apply(that, newargs.concat([_restParam(function (err, nextargs) {
	                    cb(err, nextargs);
	                })]));
	            },
	            function (err, results) {
	                callback.apply(that, [err].concat(results));
	            });
	        });
	    };

	    async.compose = function (/* functions... */) {
	        return async.seq.apply(null, Array.prototype.reverse.call(arguments));
	    };


	    function _applyEach(eachfn) {
	        return _restParam(function(fns, args) {
	            var go = _restParam(function(args) {
	                var that = this;
	                var callback = args.pop();
	                return eachfn(fns, function (fn, _, cb) {
	                    fn.apply(that, args.concat([cb]));
	                },
	                callback);
	            });
	            if (args.length) {
	                return go.apply(this, args);
	            }
	            else {
	                return go;
	            }
	        });
	    }

	    async.applyEach = _applyEach(async.eachOf);
	    async.applyEachSeries = _applyEach(async.eachOfSeries);


	    async.forever = function (fn, callback) {
	        var done = only_once(callback || noop);
	        var task = ensureAsync(fn);
	        function next(err) {
	            if (err) {
	                return done(err);
	            }
	            task(next);
	        }
	        next();
	    };

	    function ensureAsync(fn) {
	        return _restParam(function (args) {
	            var callback = args.pop();
	            args.push(function () {
	                var innerArgs = arguments;
	                if (sync) {
	                    async.setImmediate(function () {
	                        callback.apply(null, innerArgs);
	                    });
	                } else {
	                    callback.apply(null, innerArgs);
	                }
	            });
	            var sync = true;
	            fn.apply(this, args);
	            sync = false;
	        });
	    }

	    async.ensureAsync = ensureAsync;

	    async.constant = _restParam(function(values) {
	        var args = [null].concat(values);
	        return function (callback) {
	            return callback.apply(this, args);
	        };
	    });

	    async.wrapSync =
	    async.asyncify = function asyncify(func) {
	        return _restParam(function (args) {
	            var callback = args.pop();
	            var result;
	            try {
	                result = func.apply(this, args);
	            } catch (e) {
	                return callback(e);
	            }
	            // if result is Promise object
	            if (_isObject(result) && typeof result.then === "function") {
	                result.then(function(value) {
	                    callback(null, value);
	                })["catch"](function(err) {
	                    callback(err.message ? err : new Error(err));
	                });
	            } else {
	                callback(null, result);
	            }
	        });
	    };

	    // Node.js
	    if (typeof module === 'object' && module.exports) {
	        module.exports = async;
	    }
	    // AMD / RequireJS
	    else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return async;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    // included directly via <script> tag
	    else {
	        root.async = async;
	    }

	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(34).setImmediate, __webpack_require__(35)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(35).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34).setImmediate, __webpack_require__(34).clearImmediate))

/***/ },
/* 35 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);