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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass DOMNodeCollection {\n  constructor (arr) {\n    this.htmlEl = arr\n    \n  }\n\n  html(str){\n    if (str) {\n      this.htmlEl.forEach(element => {\n        element.innerHTML = str\n      });\n    } else {\n      return this.htmlEl[0].innerHTML\n    }\n  }\n\n  empty () {\n    this.htmlEl.forEach(element => {\n        element.innerHTML = \"\"\n    });\n  }\n\n  append (args) {\n    if (!(args instanceof Array)) {\n      args = [args]\n    }\n    this.htmlEl.forEach(element => {\n\n      args.forEach(argel => {\n        if (argel instanceof HTMLElement) {\n          argel = String(argel.outerHTML)\n        }\n        \n        element.innerHTML += argel;\n      })\n\n  })\n\n  }\n\n\n  attr (name, value) {\n    if (name && value){\n      this.htmlEl.forEach(element => {  \n          element.setAttribute(name, value)\n      })\n    } else if (name) {\n      return this.htmlEl[0].getAttribute(name);\n    }\n    \n  }\n\n  addClass (newClass) {\n      if (this.attr(\"class\")) {\n          let str = this.attr(\"class\");\n          str += ` ${newClass}`;\n          this.attr(\"class\", str);\n        } else {\n          this.attr(\"class\", newClass);\n        }\n  }\n};\n\n// a = document.createElement(\"p\")\n\n// var node = document.createTextNode(\"This is a new paragraph.\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMNodeCollection);\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n\n\nWindow.prototype.$1 = function(selectorString) {\n    if (selectorString instanceof HTMLElement) {\n        let DomN = new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([selectorString])\n        return DomN;\n    } else if (typeof selectorString === \"string\"){\n        const NodeList = document.querySelectorAll(selectorString);\n        const nodeArr = Array.from(NodeList);\n        let DomN = new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nodeArr);\n        return DomN;\n    };\n    \n\n    \n   \n};\n\nwindow.$1 = $1;\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });