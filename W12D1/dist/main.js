/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Asteroid(options) {\n  options.origin = \"Sirius\";\n  options.color = \"crimson\";\n  options.radius = 7;\n  options.vel = Util.randomVec(Math.floor(Math.random() * 10));\n  MovingObject.call(this, options);\n};\n\nUtil.inherits(MovingObject, Asteroid);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nfunction Game(ctx) {\n    this.DIM_X = 800;\n    this.DIM_Y = 800;\n    this.NUM_ASTEROIDS = 73;\n    this.asteroids = [];\n    this.addAsteroids();\n};\n\nGame.prototype.randomPosition = function() {\n    const arr = [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_Y)];\n    return arr;\n};\n\nGame.prototype.addAsteroids = function() {\n\n    \n    while (this.asteroids.length !== this.NUM_ASTEROIDS) {\n        const game_pos = this.randomPosition();\n      this.asteroids.push(new Asteroid({ pos: game_pos, game: this }));\n    }\n};\n\n\nGame.prototype.draw = function(ctx) {\n  console.log(this.asteroids);\n  const canvas = document.getElementById('game-canvas');\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  this.asteroids.forEach(asteroid => {\n    asteroid.draw(ctx);\n  });\n}\n\nGame.prototype.moveObjects = function(ctx) {\n  this.asteroids.forEach(asteroid => {\n    asteroid.move(ctx);\n  });\n}\n\nGame.prototype.wrap = function(pos) {\n    if(pos[0] < 0) {\n        pos[0] += this.DIM_X;\n    } else if (pos[1] < 0) {\n        pos[1] += this.DIM_Y;\n    }\n  return [(pos[0] % this.DIM_X), (pos[1] % this.DIM_Y)];\n}\n\nGame.prototype.checkCollisions = function() {\n    this.asteroids.forEach((asteroid) => {\n        this.asteroids.forEach((asteroid2) => {\n\n        });\n    });\n};\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView(ctx) {\n    this.game = new Game(ctx);\n    this.drawingCtx = ctx\n\n    \n};\n\nGameView.prototype.start = function(drawingCtx) {\n    window.setInterval(() => {\n        this.game.moveObjects(drawingCtx);\n        this.game.draw(drawingCtx);\n    }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext(\"2d\");\n    console.log(\"Webpack is working!\");\n    window.MovingObject = MovingObject;\n    window.Util = Util;\n    window.Asteroid = Asteroid;\n    window.ctx = ctx;\n    window.Game = Game;\n    window.GameView = GameView;\n    let this_game = new GameView(ctx);\n    this_game.start(ctx);\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction MovingObject(object) {\n    this.pos = object[\"pos\"];\n    this.vel = object[\"vel\"];\n    this.radius = object[\"radius\"];\n    this.color = object[\"color\"];\n    this.game = object[\"game\"];\n\n};\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n    let newPos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])];\n    this.pos = this.game.wrap(newPos);\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  let x1 = this.pos[0];\n  let y1 = this.pos[1];\n  let x2 = otherObject.pos[0];\n  let y2 = otherObject.pos[1];\n  const dist = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));\n\n  if((this.radius + otherObject.radius) >= dist ) {\n    return true;\n  } else {\n    return false;\n  };\n};\n\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n\n  inherits: function (ParentClass, ChildClass) {\n    function Surrogate() {};\n    Surrogate.prototype = ParentClass.prototype;\n    ChildClass.prototype = new Surrogate();\n    ChildClass.prototype.constructor = ChildClass;\n  },\n  \n  randomVec: function (length) {\n    const deg = 2 * Math.PI * Math.random(); \n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n\n  // Scale the length of a vector by the given amount.\n  scale: function (vec, m) {\n  return [(vec[0] * m) + 1, (vec[1] * m) + 1];\n  }\n\n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });