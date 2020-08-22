module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/jasonleibowitz/Code/side-projects/jasonleibowitz.github.io/pages/about.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction About({\n  className\n}) {\n  return __jsx(\"div\", {\n    className: className,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, \"About\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus eros, tempus sit amet nisi non, sollicitudin pulvinar lectus. Aliquam placerat pharetra ligula, a elementum ligula blandit nec. Phasellus mattis, diam non convallis pellentesque, lacus orci laoreet tellus, quis fermentum quam lorem convallis velit. Nullam suscipit et velit quis molestie. Ut vitae imperdiet nulla. Donec tincidunt luctus est id volutpat. Sed rutrum volutpat dui. Morbi scelerisque dignissim nibh at facilisis. Donec tristique, nulla eget commodo sagittis, ex massa dignissim eros, sed molestie lectus lorem eu neque. Ut hendrerit, mi vel iaculis dignissim, enim nisi mattis ante, nec viverra nisl velit nec libero. Curabitur malesuada diam ut tincidunt gravida.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, \"Sed lectus lectus, fringilla in laoreet fermentum, euismod a est. Ut feugiat velit eget est semper, nec aliquam sem semper. Donec sollicitudin quam non sapien bibendum, vitae ullamcorper odio scelerisque. Sed porta sodales pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam euismod ultrices turpis eget condimentum. Ut rutrum turpis ac sapien tempus condimentum. Aenean sit amet pharetra massa, ut imperdiet felis. Nullam ullamcorper nisi id massa tempus viverra. Proin et odio iaculis diam venenatis consectetur. \"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC50c3g/NGRhMyJdLCJuYW1lcyI6WyJBYm91dCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBOEI7QUFDM0MsU0FDRTtBQUFLLGFBQVMsRUFBRUEsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaXZCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxva0JBSEYsQ0FERjtBQU9EIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoeyBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBsYWN1cyBlcm9zLCB0ZW1wdXMgc2l0IGFtZXQgbmlzaSBub24sIHNvbGxpY2l0dWRpbiBwdWx2aW5hciBsZWN0dXMuIEFsaXF1YW0gcGxhY2VyYXQgcGhhcmV0cmEgbGlndWxhLCBhIGVsZW1lbnR1bSBsaWd1bGEgYmxhbmRpdCBuZWMuIFBoYXNlbGx1cyBtYXR0aXMsIGRpYW0gbm9uIGNvbnZhbGxpcyBwZWxsZW50ZXNxdWUsIGxhY3VzIG9yY2kgbGFvcmVldCB0ZWxsdXMsIHF1aXMgZmVybWVudHVtIHF1YW0gbG9yZW0gY29udmFsbGlzIHZlbGl0LiBOdWxsYW0gc3VzY2lwaXQgZXQgdmVsaXQgcXVpcyBtb2xlc3RpZS4gVXQgdml0YWUgaW1wZXJkaWV0IG51bGxhLiBEb25lYyB0aW5jaWR1bnQgbHVjdHVzIGVzdCBpZCB2b2x1dHBhdC4gU2VkIHJ1dHJ1bSB2b2x1dHBhdCBkdWkuIE1vcmJpIHNjZWxlcmlzcXVlIGRpZ25pc3NpbSBuaWJoIGF0IGZhY2lsaXNpcy4gRG9uZWMgdHJpc3RpcXVlLCBudWxsYSBlZ2V0IGNvbW1vZG8gc2FnaXR0aXMsIGV4IG1hc3NhIGRpZ25pc3NpbSBlcm9zLCBzZWQgbW9sZXN0aWUgbGVjdHVzIGxvcmVtIGV1IG5lcXVlLiBVdCBoZW5kcmVyaXQsIG1pIHZlbCBpYWN1bGlzIGRpZ25pc3NpbSwgZW5pbSBuaXNpIG1hdHRpcyBhbnRlLCBuZWMgdml2ZXJyYSBuaXNsIHZlbGl0IG5lYyBsaWJlcm8uIEN1cmFiaXR1ciBtYWxlc3VhZGEgZGlhbSB1dCB0aW5jaWR1bnQgZ3JhdmlkYS48L3A+XG4gICAgICA8cD5TZWQgbGVjdHVzIGxlY3R1cywgZnJpbmdpbGxhIGluIGxhb3JlZXQgZmVybWVudHVtLCBldWlzbW9kIGEgZXN0LiBVdCBmZXVnaWF0IHZlbGl0IGVnZXQgZXN0IHNlbXBlciwgbmVjIGFsaXF1YW0gc2VtIHNlbXBlci4gRG9uZWMgc29sbGljaXR1ZGluIHF1YW0gbm9uIHNhcGllbiBiaWJlbmR1bSwgdml0YWUgdWxsYW1jb3JwZXIgb2RpbyBzY2VsZXJpc3F1ZS4gU2VkIHBvcnRhIHNvZGFsZXMgcGVsbGVudGVzcXVlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgTnVsbGFtIGV1aXNtb2QgdWx0cmljZXMgdHVycGlzIGVnZXQgY29uZGltZW50dW0uIFV0IHJ1dHJ1bSB0dXJwaXMgYWMgc2FwaWVuIHRlbXB1cyBjb25kaW1lbnR1bS4gQWVuZWFuIHNpdCBhbWV0IHBoYXJldHJhIG1hc3NhLCB1dCBpbXBlcmRpZXQgZmVsaXMuIE51bGxhbSB1bGxhbWNvcnBlciBuaXNpIGlkIG1hc3NhIHRlbXB1cyB2aXZlcnJhLiBQcm9pbiBldCBvZGlvIGlhY3VsaXMgZGlhbSB2ZW5lbmF0aXMgY29uc2VjdGV0dXIuIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });