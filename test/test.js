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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clocktimer = __webpack_require__(1);

var _clocktimer2 = _interopRequireDefault(_clocktimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function () {
  function Test() {
    _classCallCheck(this, Test);

    new _clocktimer2.default(_clocktimer2.default.EVERY_HOURS, _clocktimer2.default.EVERY_MINUTES, [0, 10, 20, 30, 40, 50], this.onHit);
  }

  _createClass(Test, [{
    key: 'onHit',
    value: function onHit() {
      console.log('Timer Called');
    }
  }]);

  return Test;
}();

exports.default = Test;


new Test();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClockTimer = function () {
  _createClass(ClockTimer, null, [{
    key: "EVERY_HOURS",
    get: function get() {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }
  }, {
    key: "EVERY_AM",
    get: function get() {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }
  }, {
    key: "EVERY_PM",
    get: function get() {
      return [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }
  }, {
    key: "EVERY_MINUTES",
    get: function get() {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
    }
  }, {
    key: "EVERY_SECONDS",
    get: function get() {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
    }

    /**
     *
     * 24 時間のうち任意のタイミングでイベントを発火します。
     * どの時刻に発火させるかは配列で指定します。
     *
     * 以下のような指定で、秒針が 10, 20, 30, 40, 50 のときのみイベントを発火させます
     * new ClockTimer(ClockTimer.EVERY_HOURS, ClockTimer.EVERY_MINUTES, [0, 10, 20, 30, 40, 50], this.callback);
     *
     * @param hoursArray [0-24]
     * @param minutesArray [0-60]
     * @param secondsArray [0-60]
     * @param callback function
     */

  }]);

  function ClockTimer(hoursArray, minutesArray, secondsArray, callback) {
    _classCallCheck(this, ClockTimer);

    this._timeout = 0;
    this._callback = callback;

    this._hoursArray = hoursArray;
    this._minutesArray = minutesArray;
    this._secondsArray = secondsArray;

    this._hitHours = -1;
    this._hitMinutes = -1;
    this._hitSeconds = -1;

    this._timer();
  }

  /**
   *
   * @private
   */


  _createClass(ClockTimer, [{
    key: "_timer",
    value: function _timer() {
      var _this = this;

      this._timeout = setTimeout(function () {
        _this._check();
      }, 1000 / 30);
    }

    /**
     *
     * @private
     */

  }, {
    key: "_stop",
    value: function _stop() {
      clearTimeout(this._timeout);
    }

    /**
     *
     * @private
     */

  }, {
    key: "_check",
    value: function _check() {
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();

      if (this._hoursArray.indexOf(hours) >= 0 && this._minutesArray.indexOf(minutes) >= 0 && this._secondsArray.indexOf(seconds) >= 0 && !(hours === this._hitHours && minutes === this._hitMinutes && seconds === this._hitSeconds)) {
        this._hitHours = hours;
        this._hitMinutes = minutes;
        this._hitSeconds = seconds;
        this._currentTime = time;
        this._callback();
      }

      this._timer();
    }
  }, {
    key: "CurrentTime",
    get: function get() {
      return this._currentTime;
    }
  }]);

  return ClockTimer;
}();

exports.default = ClockTimer;

/***/ })
/******/ ]);