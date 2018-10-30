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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/joshuamarx/Documents/HackReactor/Booking/client/index.jsx: JSX attributes must only be assigned a non-empty expression (97:40)\\n\\n\\u001b[0m \\u001b[90m  95 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m  96 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  97 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mPrice\\u001b[39m rates\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mrates} total\\u001b[33m=\\u001b[39m{}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m                                        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  98 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mReviews\\u001b[39m reviews\\u001b[33m=\\u001b[39m{review_count} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  99 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mCalendar\\u001b[39m start\\u001b[33m=\\u001b[39m{start_date} end\\u001b[33m=\\u001b[39m{end_date} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 100 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mGuest\\u001b[39m guests\\u001b[33m=\\u001b[39m{max_guests} handleGuestCountChange\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mhandleGuestCountChange} \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at _class.raise (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3939:15)\\n    at _class.jsxParseAttributeValue (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3459:24)\\n    at _class.jsxParseAttribute (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3512:46)\\n    at _class.jsxParseOpeningElementAfterName (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3532:30)\\n    at _class.jsxParseOpeningElementAt (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3525:19)\\n    at _class.jsxParseElementAt (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3557:33)\\n    at _class.jsxParseElementAt (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3573:34)\\n    at _class.jsxParseElement (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3626:19)\\n    at _class.parseExprAtom (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3633:21)\\n    at _class.parseExprSubscripts (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5924:21)\\n    at _class.parseMaybeUnary (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5903:21)\\n    at _class.parseExprOps (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5812:21)\\n    at _class.parseMaybeConditional (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5784:21)\\n    at _class.parseMaybeAssign (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5731:21)\\n    at _class.parseParenAndDistinguishExpression (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:6482:28)\\n    at _class.parseExprAtom (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:6284:21)\\n    at _class.parseExprAtom (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:3635:52)\\n    at _class.parseExprSubscripts (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5924:21)\\n    at _class.parseMaybeUnary (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5903:21)\\n    at _class.parseExprOps (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5812:21)\\n    at _class.parseMaybeConditional (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5784:21)\\n    at _class.parseMaybeAssign (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5731:21)\\n    at _class.parseExpression (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:5684:21)\\n    at _class.parseReturnStatement (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:7508:28)\\n    at _class.parseStatementContent (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:7187:21)\\n    at _class.parseStatement (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:7153:17)\\n    at _class.parseBlockOrModuleBlockBody (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:7707:23)\\n    at _class.parseBlockBody (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:7694:10)\\n    at _class.parseBlock (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:7683:10)\\n    at _class.parseFunctionBody (/Users/joshuamarx/Documents/HackReactor/Booking/node_modules/@babel/parser/lib/index.js:6933:24)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvaW5kZXguanN4LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/index.jsx\n");

/***/ })

/******/ });