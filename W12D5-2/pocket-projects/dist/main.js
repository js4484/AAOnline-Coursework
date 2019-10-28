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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n\n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n\n        // 3. Call printTime.\n        this.printTime();\n\n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n        // Use console.log to print it.\n        return timeString;\n    }\n\n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n\n        // 2. Call printTime.\n        this.printTime();\n    }\n\n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\n\n\n\nmodule.exports = Clock;\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dropDown = {\n  dogs: {\n    \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n    \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n    \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n    \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n    \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n    \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n    \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\"\n  },\n  \n  dogLinkCreator: function () {\n    const dogArr = [];\n    const keys = Object.keys(this.dogs);\n    keys.forEach((key) => {\n      let aTag = document.createElement(\"a\");\n      aTag.innerHTML = key;\n      aTag.href = this.dogs[key];\n      let liTag = document.createElement(\"li\");\n      liTag.className = \"dog-link\";\n      \n      liTag.append(aTag);\n      dogArr.push(liTag);\n    })\n    return dogArr;\n  },\n\n  attachDogLinks: function () {\n    const listEl = document.getElementsByClassName(\"drop-down-dog-list\");\n    const dogLinks = this.dogLinkCreator();\n\n    dogLinks.forEach(link => {\n  \n      listEl[0].append(link);\n    })\n    \n  }\n \n};\nmodule.exports = dropDown;\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const WarmUp = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\nconst Clock = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\nconst dropDown = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\nconst addTodo = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n\n    const partyHeader = document.getElementById('party');\n    WarmUp.htmlGenerator('Party Time.', partyHeader);\n\n    const clock = new Clock();\n    const clockHeader = document.getElementById('clock');\n\n    WarmUp.htmlGenerator(clock.printTime(), clockHeader);\n\n    dropDown.attachDogLinks();\n\n    const mouseTarget = document.getElementsByClassName('drop-down-dog-nav');\n    \n    mouseTarget[0].addEventListener(\"mouseenter\", e => {\n        const doglist = document.getElementsByClassName('drop-down-dog-list');\n       \n        doglist[0].classList.add(\"showing\");\n    });\n    mouseTarget[0].addEventListener(\"mouseleave\", e => {\n        const doglist = document.getElementsByClassName('drop-down-dog-list');\n\n        doglist[0].classList.remove(\"showing\");\n\n    });\n    \n    addTodo();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const addTodo = function () {\n\n    let todoArray;\n\n    const checkStorage = function() {\n\n        const toCheck = localStorage.getItem(\"todoArr\");\n        console.log(toCheck);\n        if (toCheck !== null) {\n            debugger;\n            todoArray = JSON.parse(localStorage.getItem(\"todoArr\"));\n        } else {\n            todoArray = [];\n        }\n    };\n    console.log(todoArray);\n    \n    \n\n    // const todoArr = localStorage.getItem(\"todoArr\") || [];\n    const ulEl = document.getElementsByClassName('todos');\n    \n    const formEL = document.getElementsByClassName('add-todo-form');\n    formEL[0].addEventListener('submit', (event) => {\n        checkStorage();\n\n        event.preventDefault();\n        const formValue = document.getElementById('add-todo').value;\n        const liEl = document.createElement(\"li\");\n        const inputEl = document.createElement(\"input\");\n\n        const todo = {text: formValue, done: false}\n\n        // inputEl.setAttribute(\"type\", \"checkbox\");\n        // inputEl.setAttribute(\"checked\", \"true\");\n        // const labelEl = document.createElement(\"label\");\n        // labelEl.innerHTML = formValue;\n        // liEl.append(inputEl);\n        // liEl.append(labelEl);\n\n        todoArray.push(todo);\n        populateList(todoArray);\n        document.getElementById('add-todo').value = \"\";\n        debugger;\n        localStorage.setItem(\"todoArr\", JSON.stringify(todoArray))\n    });\n\n    const populateList = function(todoArray){\n      inputArr.forEach((liEl)=>{\n        ulEl[0].append(liEl);\n      });\n    };\n    \n    \n    \n\n    // put arr in storage\n   \n};\n\nmodule.exports = addTodo;\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\nconst htmlGenerator = (string, htmlElement) => {\n    if (htmlElement.children.length > 0) {\n      for (let i = 0; i < htmlElement.children.length; i++) {\n        htmlElement.removeChild(htmlElement.childNodes[i]);\n      }\n    }\n    let element = document.createElement(\"p\");\n    element.innerHTML = string;\n    htmlElement.appendChild(element);\n};\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });