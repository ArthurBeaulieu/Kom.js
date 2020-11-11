/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
window.Kom =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Kom.js":
/*!********************!*\
  !*** ./src/Kom.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HttpStatusCode = Object.freeze({\n  OK: 200,\n  // The HTTP call worked properly\n  NOT_FOUND: 404,\n  // The url wasn't found\n  FORBIDDEN: 403,\n  // The url cannot be accessed\n  INTERNAL_ERROR: 500 // The server encountered a problem\n\n});\n\nvar Kom = /*#__PURE__*/function () {\n  /** @summary <h1>Server communication abstraction</h1>\r\n   * @author Arthur Beaulieu\r\n   * @since June 2020\r\n   * @description <blockquote>This class is the main object to deal with when requesting something from the server.<br>\r\n   * It handle all urls calls (<code>GET</code>, <code>POST</code>), treat responses or handle errors using\r\n   * <code>Promise</code>.<br>Because it uses <code>Promise</code>, success and errors are to be handled in the caller\r\n   * function, using <code>.then()</code> and <code>.catch()</code>. To properly deal with <code>POST</code> request,\r\n   * the session must contain a csrf token in cookies. Otherwise, those <code>POST</code> call may fail.</blockquote> */\n  function Kom() {\n    _classCallCheck(this, Kom);\n\n    /** @private\r\n     * @member {string} - User session CSRF token to use in POST request */\n    this._csrfToken = this._getCsrfCookie();\n    /** @private\r\n     * @member {array[]} - Array of HTTP headers to be used in HTTP calls */\n\n    this._headers = this._createRequestHeaders();\n  }\n  /*  --------------------------------------------------------------------------------------------------------------- */\n\n  /*  -------------------------------------------  CLASS INIT UTILS  -----------------------------------------------  */\n\n  /*  --------------------------------------------------------------------------------------------------------------- */\n\n  /** @method\r\n   * @name _getCsrfCookie\r\n   * @private\r\n   * @memberof Kom\r\n   * @description <blockquote>Extract CSRF token value from client cookies and returns it as a string. Returns an empty\r\n   * string by default. This method is required to be called on construction.</blockquote>\r\n   * @return {string} - The CSRF token string */\n\n\n  _createClass(Kom, [{\n    key: \"_getCsrfCookie\",\n    value: function _getCsrfCookie() {\n      if (document.cookie && document.cookie !== '') {\n        var cookies = document.cookie.split(';');\n\n        for (var i = 0; i < cookies.length; ++i) {\n          // Parse current cookie to extract its properties\n          var cookie = cookies[i].trim().match(/(\\w+)=(.*)/);\n\n          if (cookie !== undefined && cookie[1] === 'csrftoken') {\n            // Found a matching cookie for csrftoken value, return as decoded string\n            return decodeURIComponent(cookie[2]);\n          }\n        }\n      } // Return empty string by default, POST calls may fail\n\n\n      return '';\n    }\n    /** @method\r\n     * @name _createRequestHeaders\r\n     * @private\r\n     * @memberof Kom\r\n     * @description <blockquote>Fills Kom <code>_headers</code> private member array, to use in HTTP requests later on.\r\n     * This method is required to be called on construction.</blockquote>\r\n     * @return {array[]} - The headers array, length 3, to be used in HTTP requests */\n\n  }, {\n    key: \"_createRequestHeaders\",\n    value: function _createRequestHeaders() {\n      return [['Content-Type', 'application/json; charset=UTF-8'], ['Accept', 'application/json'], ['X-CSRFToken', this._csrfToken]];\n    }\n    /*  --------------------------------------------------------------------------------------------------------------- */\n\n    /*  -------------------------------------------  PRIVATE METHODS  ------------------------------------------------  */\n\n    /*  --------------------------------------------------------------------------------------------------------------- */\n\n    /** @method\r\n     * @name _getErrorCodeFromHTTPStatus\r\n     * @private\r\n     * @memberof Kom\r\n     * @description <blockquote>This method is called whenever a server request didn't went well. In case a request (from\r\n     * any type) fails, its HTTP status code have to be handle in the method, so it returns an error code can be handled\r\n     * in the user interface (with notification, console or else).</blockquote>\r\n     * @param {number} code - The HTTP status code to handle, in supported ones from HttpStatusCode enumeration\r\n     * @return {string} The HTTP status as an error code */\n\n  }, {\n    key: \"_getErrorCodeFromHTTPStatus\",\n    value: function _getErrorCodeFromHTTPStatus(code) {\n      if (code === HttpStatusCode.NOT_FOUND) {\n        return 'B_KOM_NOT_FOUND';\n      } else if (code === HttpStatusCode.FORBIDDEN) {\n        return 'B_KOM_ACCESS_FORBIDDEN';\n      } else if (code === HttpStatusCode.INTERNAL_ERROR) {\n        return 'B_KOM_INTERNAL_ERROR';\n      } else {\n        return \"B_KOM_UNKNOWN_ERROR\";\n      }\n    }\n    /** @method\r\n     * @async\r\n     * @name _resolveAsJSON\r\n     * @private\r\n     * @memberof Kom\r\n     * @description <blockquote>Tool method used by public methods on fetch responses to format output data as JSON to be\r\n     * read in JavaScript code as objects.</blockquote>\r\n     * @param {Object} response - The <code>fetch</code> response object\r\n     * @returns {Promise} The request <code>Promise</code>, format response as an object on resolve, as error code string on reject */\n\n  }, {\n    key: \"_resolveAsJSON\",\n    value: function _resolveAsJSON(response) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        if (response) {\n          if (response.ok) {\n            resolve(response.json());\n          } else {\n            reject(_this._getErrorCodeFromHTTPStatus(response.status));\n          }\n        } else {\n          reject('F_KOM_MISSING_ARGUMENT');\n        }\n      });\n    }\n    /** @method\r\n     * @async\r\n     * @name _resolveAsText\r\n     * @private\r\n     * @memberof Kom\r\n     * @description <blockquote>Tool method used by public methods on fetch responses to format output data as text to be\r\n     * read in JavaScript code as string (mostly to parse HTML templates).</blockquote>\r\n     * @param {Object} response - The <code>fetch</code> response object\r\n     * @returns {Promise} The request <code>Promise</code>, format response as a string on resolve, as error code string on reject */\n\n  }, {\n    key: \"_resolveAsText\",\n    value: function _resolveAsText(response) {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        if (response) {\n          if (response.ok) {\n            resolve(response.text());\n          } else {\n            reject(_this2._getErrorCodeFromHTTPStatus(response.status));\n          }\n        } else {\n          reject('F_KOM_MISSING_ARGUMENT');\n        }\n      });\n    }\n    /** @method\r\n     * @async\r\n     * @name _resolveAsRaw\r\n     * @private\r\n     * @memberof Kom\r\n     * @description <blockquote>Tool method used by XmlHTTPRequests to format server response as raw binary data.</blockquote>\r\n     * @param {Object} response - The <code>XmlHTTPRequest</code> response status object\r\n     * @returns {Promise} The request <code>Promise</code>, doesn't format response on resolve, send error code string on reject */\n\n  }, {\n    key: \"_resolveAsRaw\",\n    value: function _resolveAsRaw(response) {\n      var _this3 = this;\n\n      return new Promise(function (resolve, reject) {\n        if (response) {\n          if (response.status === HttpStatusCode.OK) {\n            resolve(response.responseText);\n          } else {\n            reject(_this3._getErrorCodeFromHTTPStatus(response.status));\n          }\n        } else {\n          reject('F_KOM_MISSING_ARGUMENT');\n        }\n      });\n    }\n    /*  --------------------------------------------------------------------------------------------------------------- */\n\n    /*  --------------------------------------------  PUBLIC METHODS  ------------------------------------------------  */\n\n    /*  --------------------------------------------------------------------------------------------------------------- */\n\n    /** @method\r\n     * @async\r\n     * @name checkValidity\r\n     * @public\r\n     * @memberof Kom\r\n     * @description <blockquote>Check the Kom instance validity to ensure its properties validity. Useful to call after\r\n     * component instantiation to ensure all its headers are properly set.</blockquote>\r\n     * @returns {Promise} The validity <code>Promise</code>, rejected if csrf token not set, resolved otherwise  */\n\n  }, {\n    key: \"checkValidity\",\n    value: function checkValidity() {\n      var _this4 = this;\n\n      return new Promise(function (resolve, reject) {\n        if (_this4._csrfToken !== '' && _this4._headers.length !== null) {\n          resolve();\n        } else {\n          reject('F_KOM_INIT_FAILED');\n        }\n      });\n    }\n    /*  --------------------------------------------------------------------------------------------------------------- */\n\n    /*  ---------------------------------------  HTTP SERVER CALLS METHODS  ------------------------------------------  */\n\n    /*  --------------------------------------------------------------------------------------------------------------- */\n\n    /** @method\r\n     * @async\r\n     * @name get\r\n     * @public\r\n     * @memberof Kom\r\n     * @description <blockquote><code>GET</code> HTTP request using the fetch API.<br><code>resolve</code> returns the\r\n     * response as an <code>Object</code>.<br><code>reject</code> returns an error key as a <code>String</code>.\r\n     * It is meant to perform API call to access database through the user interface.</blockquote>\r\n     * @param {String} url - The <code>GET</code> url to fetch data from, in supported back URLs\r\n     * @returns {Promise} The request <code>Promise</code> */\n\n  }, {\n    key: \"get\",\n    value: function get(url) {\n      var _this5 = this;\n\n      return new Promise(function (resolve, reject) {\n        var options = {\n          method: 'GET',\n          headers: new Headers([_this5._headers[0]]) // Content type to JSON\n\n        };\n        fetch(url, options).then(_this5._resolveAsJSON).then(resolve)[\"catch\"](reject);\n      });\n    }\n    /** @method\r\n     * @async\r\n     * @name getText\r\n     * @public\r\n     * @memberof Kom\r\n     * @description <blockquote><code>GET</code> HTTP request using the fetch API.<br><code>resolve</code> returns the\r\n     * response as a <code>String</code>.<br><code>reject</code> returns an error key as a <code>String</code>. It is\r\n     * meant to perform API call to get HTML templates as string to be parsed as documents/documents fragments.</blockquote>\r\n     * @param {String} url - The <code>GET</code> url to fetch data from, in supported back URLs\r\n     * @returns {Promise} The request <code>Promise</code> */\n\n  }, {\n    key: \"getText\",\n    value: function getText(url) {\n      var _this6 = this;\n\n      return new Promise(function (resolve, reject) {\n        var options = {\n          method: 'GET',\n          headers: new Headers([_this6._headers[0]]) // Content type to JSON\n\n        };\n        fetch(url, options).then(_this6._resolveAsText.bind(_this6)).then(resolve)[\"catch\"](reject);\n      });\n    }\n    /** @method\r\n     * @async\r\n     * @name getRaw\r\n     * @public\r\n     * @memberof Kom\r\n     * @description <blockquote><code>GET</code> HTTP request using an <code>XMLHttpRequest</code>, with an override\r\n     * mime type hack to pass bytes through unprocessed.<br><code>resolve</code> returns the response as raw binary data.<br><code>reject</code>\r\n     * returns an error code as a <code>String</code>.</blockquote>\r\n     * @param {String} url - The url to fetch raw data from\r\n     * @returns {Promise} The request <code>Promise</code> */\n\n  }, {\n    key: \"getRaw\",\n    value: function getRaw(url) {\n      var _this7 = this;\n\n      return new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n        xhr.open('GET', url, true);\n        xhr.overrideMimeType('text/plain; charset=x-user-defined');\n\n        xhr.onreadystatechange = function (response) {\n          // Keep old js function definition since this is the request response object\n          if (response.target.readyState === 4) {\n            // Ready state changed has reach the response state\n            _this7._resolveAsRaw(response.target).then(resolve)[\"catch\"](reject);\n          }\n        };\n\n        xhr.onerror = reject('F_KOM_XHR_ERROR');\n        xhr.send();\n      });\n    }\n    /** @method\r\n     * @async\r\n     * @name post\r\n     * @public\r\n     * @memberof Kom\r\n     * @description <blockquote><code>POST</code> HTTP request using the fetch API.<br>Beware that the given options\r\n     * object match the url expectations.<br><code>resolve</code>\r\n     * returns the response as an <code>Object</code>.<br><code>reject</code> returns an error key as a <code>String</code>.</blockquote>\r\n     * @param {String} url - The <code>POST</code> url to fetch data from\r\n     * @param {Object} data - The <code>JSON</code> object that contains <code>POST</code> parameters\r\n     * @returns {Promise} The request <code>Promise</code> */\n\n  }, {\n    key: \"post\",\n    value: function post(url, data) {\n      var _this8 = this;\n\n      return new Promise(function (resolve, reject) {\n        var options = {\n          method: 'POST',\n          headers: new Headers(_this8._headers),\n          // POST needs all previously defined headers\n          body: JSON.stringify(data)\n        };\n        fetch(url, options).then(_this8._resolveAsJSON).then(resolve)[\"catch\"](reject);\n      });\n    }\n  }]);\n\n  return Kom;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Kom);\n\n//# sourceURL=webpack://Kom/./src/Kom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/Kom.js");
/******/ })()
.default;