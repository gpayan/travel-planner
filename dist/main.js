/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_displayResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/displayResults */ \"./client/js/displayResults.js\");\n/* harmony import */ var _js_validateReturnedData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/validateReturnedData */ \"./client/js/validateReturnedData.js\");\n/* harmony import */ var _js_configureDatesInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/configureDatesInput */ \"./client/js/configureDatesInput.js\");\n/* harmony import */ var _js_formValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/formValidation */ \"./client/js/formValidation.js\");\n/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/form.scss */ \"./client/styles/form.scss\");\n/* harmony import */ var _styles_results_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/results.scss */ \"./client/styles/results.scss\");\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/header.scss */ \"./client/styles/header.scss\");\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/footer.scss */ \"./client/styles/footer.scss\");\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, \"throw\" === context.method) { if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel; context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar url = 'http://localhost:8081/';\n\n\n\n\n\n\n\n\nvar startDateElement = document.querySelector('#start');\nvar endDateElement = document.querySelector('#end');\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_js_configureDatesInput__WEBPACK_IMPORTED_MODULE_2__.configureDatesInput)(startDateElement, endDateElement);\n});\nstartDateElement.addEventListener('change', function (event) {\n  console.log('Value of event.target.dispatchEvent');\n  console.log(event.target.id);\n  (0,_js_configureDatesInput__WEBPACK_IMPORTED_MODULE_2__.updateDatesInput)(event.target.value, event.target.id, startDateElement, endDateElement);\n});\nvar button = document.querySelector('#tripButton');\nbutton.addEventListener('click', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {\n    var city_entered, startDate, endDate, formValidated, trip, options, data, dataObject, displayAction;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            event.preventDefault();\n            city_entered = document.getElementById('city').value;\n            console.log('Value of city is:', city_entered);\n            startDate = document.getElementById('start').value;\n            endDate = document.getElementById('end').value;\n            formValidated = (0,_js_formValidation__WEBPACK_IMPORTED_MODULE_3__.formValidation)(city_entered, startDate, endDate);\n\n            if (!(formValidated.validation === false)) {\n              _context.next = 9;\n              break;\n            }\n\n            alert(formValidated.message);\n            return _context.abrupt(\"return\", false);\n\n          case 9:\n            console.log('Dates of the trip', startDate, endDate);\n            trip = {\n              city: city_entered,\n              startDate: startDate,\n              endDate: endDate\n            };\n            options = {\n              method: 'POST',\n              credentials: 'same-origin',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify(trip)\n            };\n            _context.next = 14;\n            return fetch(url, options);\n\n          case 14:\n            data = _context.sent;\n            _context.next = 17;\n            return data.json();\n\n          case 17:\n            dataObject = _context.sent;\n            console.log('Type de data', _typeof(dataObject));\n            console.log('value of data', dataObject);\n\n            if ((0,_js_validateReturnedData__WEBPACK_IMPORTED_MODULE_1__.validateReturnedData)(dataObject) === true) {\n              displayAction = (0,_js_displayResults__WEBPACK_IMPORTED_MODULE_0__.displayResults)(dataObject);\n              console.log(displayAction);\n            }\n\n            document.getElementById('city').value = '';\n            console.log('C est la fin du script');\n\n          case 23:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\n//# sourceURL=webpack://travel-planner/./client/index.js?");

/***/ }),

/***/ "./client/js/cleanupDate.js":
/*!**********************************!*\
  !*** ./client/js/cleanupDate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanupDate\": () => (/* binding */ cleanupDate)\n/* harmony export */ });\nfunction cleanupDate(date) {\n  var rawDate = new Date(date);\n  var raw_day = rawDate.getDay();\n  var day_number = rawDate.getDate();\n  var raw_month = rawDate.getMonth();\n  var day_long = '';\n  var day_short = '';\n\n  switch (raw_day) {\n    case 0:\n      day_long = 'Sunday';\n      day_short = 'Sun';\n      break;\n\n    case 1:\n      day_long = 'Monday';\n      day_short = 'Mon';\n      break;\n\n    case 2:\n      day_long = 'Tuesday';\n      day_short = 'Tue';\n      break;\n\n    case 3:\n      day_short = 'Wed';\n      day_long = 'Wednesday';\n      break;\n\n    case 4:\n      day_short = 'Thu';\n      day_long = 'Thursday';\n      break;\n\n    case 5:\n      day_short = 'Fri';\n      day_long = 'Friday';\n      break;\n\n    case 6:\n      day_short = 'Sat';\n      day_long = 'Saturday';\n      break;\n  }\n\n  var month_long = '';\n  var month_short = '';\n\n  switch (raw_month) {\n    case 0:\n      month_long = 'January';\n      month_short = 'Jan';\n      break;\n\n    case 1:\n      month_long = 'February';\n      month_short = 'Feb';\n      break;\n\n    case 2:\n      month_long = 'March';\n      month_short = 'Mar';\n      break;\n\n    case 3:\n      month_long = 'April';\n      month_short = 'Apr';\n      break;\n\n    case 4:\n      month_long = 'May';\n      month_short = 'May';\n      break;\n\n    case 5:\n      month_long = 'June';\n      month_short = 'Jun';\n      break;\n\n    case 6:\n      month_long = 'July';\n      month_short = 'Jul';\n      break;\n\n    case 7:\n      month_long = 'August';\n      month_short = 'Aug';\n      break;\n\n    case 8:\n      month_long = 'September';\n      month_short = 'Sep';\n      break;\n\n    case 9:\n      month_long = 'October';\n      month_short = 'Oct';\n      break;\n\n    case 10:\n      month_long = 'November';\n      month_short = 'Nov';\n      break;\n\n    case 11:\n      month_long = 'December';\n      month_short = 'Dec';\n      break;\n  }\n\n  var date_long = day_long + ', ' + month_long + ' ' + day_number;\n  var date_short = day_short + ', ' + month_short + ' ' + day_number;\n  return {\n    date_long: date_long,\n    date_short: date_short\n  };\n}\n\n\n\n//# sourceURL=webpack://travel-planner/./client/js/cleanupDate.js?");

/***/ }),

/***/ "./client/js/configureDatesInput.js":
/*!******************************************!*\
  !*** ./client/js/configureDatesInput.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configureDatesInput\": () => (/* binding */ configureDatesInput),\n/* harmony export */   \"updateDatesInput\": () => (/* binding */ updateDatesInput)\n/* harmony export */ });\nfunction formatDate(date) {\n  var year = date.getFullYear();\n  var day = date.getDate();\n  var day_display = '';\n\n  if (day < 10) {\n    day_display = '0' + day;\n  } else {\n    day_display = day;\n  }\n\n  var month = date.getMonth() + 1;\n  var month_display = '';\n\n  if (month < 10) {\n    month_display = '0' + month;\n  } else {\n    month_display = month;\n  }\n\n  var dateFormatted = year + '-' + month_display + '-' + day_display;\n  return dateFormatted;\n}\n\nfunction configureDatesInput(startDateElement, endDateElement) {\n  var today = new Date();\n  var maxDateStart = new Date();\n  var minDateStart = new Date();\n  var maxDateEnd = new Date(); //maxDateStart is 15 days from today, so + 14\n\n  maxDateStart.setDate(maxDateStart.getDate() + 14);\n  console.log('maxDateStart is:', maxDateStart);\n  var todayFormatted = formatDate(today);\n  console.log('Value of today is:', todayFormatted);\n  var maxDateStartFormatted = formatDate(maxDateStart);\n  console.log('Value of maxDateStart:', maxDateStartFormatted);\n  startDateElement.setAttribute('min', todayFormatted);\n  startDateElement.setAttribute('max', maxDateStartFormatted);\n  minDateStart.setDate(minDateStart.getDate() + 1);\n  maxDateEnd.setDate(maxDateEnd.getDate() + 15);\n  var minDateStartFormatted = formatDate(minDateStart);\n  console.log('Value of minDateStart:', minDateStartFormatted);\n  var maxDateEndFormatted = formatDate(maxDateEnd);\n  console.log('Value of maxDateEnd:', maxDateEndFormatted);\n  endDateElement.setAttribute('min', minDateStartFormatted);\n  endDateElement.setAttribute('max', maxDateEndFormatted);\n}\n\nfunction updateDatesInput(newValue, elementID, startDateElement, endDateElement) {\n  if (elementID === \"start\") {\n    var newDate = new Date(newValue);\n    newDate.setDate(newDate.getDate() + 1);\n    var newDateFormatted = formatDate(newDate);\n    endDateElement.setAttribute('min', newDateFormatted);\n  }\n\n  ;\n}\n\n\n\n//# sourceURL=webpack://travel-planner/./client/js/configureDatesInput.js?");

/***/ }),

/***/ "./client/js/displayResults.js":
/*!*************************************!*\
  !*** ./client/js/displayResults.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayResults\": () => (/* binding */ displayResults)\n/* harmony export */ });\n/* harmony import */ var _cleanupDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cleanupDate */ \"./client/js/cleanupDate.js\");\n\n\nfunction displayResults(results) {\n  //console.log('we are in display results');\n  //console.log(results);\n  //getting a handle on main element\n  var element = document.querySelector('main'); //creating a new fragment\n\n  var fragment = document.createDocumentFragment();\n  var newDiv = document.createElement('div');\n  newDiv.classList.add(\"results\"); //fragment.appendChild(newDiv);\n\n  var destinationElement = document.createElement('div');\n  destinationElement.innerText = results.destination;\n  destinationElement.classList.add(\"destination-title\");\n  var imageElement = document.createElement('img'); //console.log(results.image);\n\n  imageElement.setAttribute(\"src\", results.image);\n  imageElement.classList.add(\"picture-box\"); //const weatherBox = document.createElement('div').classList.add('weather-box');\n  //const weatherDisplay = docuent.createElement('div').classList.add('weather-display');\n\n  var weatherElement = document.createElement('div');\n  weatherElement.classList.add('weather-box');\n  var weatherData = results.weather; //console.log(weatherData);\n  //console.log('Length of WeatherData', weatherData.length);\n\n  for (var i = 0; i < weatherData.length; i++) {\n    var weatherDisplay = document.createElement('div');\n    weatherDisplay.classList.add('weather-display');\n    var dateDiv = document.createElement('div');\n    dateDiv.classList.add(\"date-box\");\n    var formatted_dates = (0,_cleanupDate__WEBPACK_IMPORTED_MODULE_0__.cleanupDate)(weatherData[i].date); //console.log('Long date:', formatted_dates.date_long);\n    //console.log('Short date:', formatted_dates.date_short);\n\n    dateDiv.innerText = formatted_dates.date_short;\n    var weatherTextDiv = document.createElement('div');\n    weatherTextDiv.classList.add(\"text-box\");\n    weatherTextDiv.innerText = weatherData[i].weather.description;\n    var weatherIconDiv = document.createElement('img');\n    var imageURL = 'https://www.weatherbit.io/static/img/icons/' + weatherData[i].weather.icon + '.png';\n    weatherIconDiv.setAttribute(\"src\", imageURL);\n    weatherIconDiv.classList.add('icon-box'); //weatherIconDiv.classList.add('icon-settings');\n    //const tempDiv = document.createElement('div');\n    //tempDiv.classList.add('icon-box');\n    //tempDiv.appendChild(weatherIconDiv);\n\n    weatherDisplay.appendChild(dateDiv);\n    weatherDisplay.appendChild(weatherTextDiv);\n    weatherDisplay.appendChild(weatherIconDiv); //weatherDisplay.appendChild(tempDiv);\n\n    weatherElement.appendChild(weatherDisplay);\n  }\n\n  ; //weatherElement.innerText = JSON.stringify(results.weather);\n  //newDiv.appendChild(destinationElement);\n\n  newDiv.appendChild(imageElement);\n  newDiv.appendChild(weatherElement);\n  var mainDiv = document.createElement('div');\n  mainDiv.classList.add(\"main-div\");\n  mainDiv.appendChild(destinationElement);\n  mainDiv.appendChild(newDiv);\n  fragment.appendChild(mainDiv);\n  element.appendChild(fragment);\n  return {\n    message: 'success'\n  };\n}\n\n;\n\n\n//# sourceURL=webpack://travel-planner/./client/js/displayResults.js?");

/***/ }),

/***/ "./client/js/formValidation.js":
/*!*************************************!*\
  !*** ./client/js/formValidation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formValidation\": () => (/* binding */ formValidation)\n/* harmony export */ });\nfunction formValidation(city, startDate, endDate) {\n  var formValidated = true;\n  var messageSentBack = '';\n  console.log('In formValidation');\n  console.log(city, startDate, endDate); //Validating that city is defined\n\n  if (!city) {\n    formValidated = false;\n    messageSentBack += 'Please enter destination.\\n';\n  } //Validating that city is written with letters\n\n\n  if (city) {\n    var res = city.match(/^[a-zA-Z]*$/);\n\n    if (res === null) {\n      formValidated = false;\n      messageSentBack += \"Destination can only contain letters.\\n\";\n    }\n  } //Validating that startDate is defined\n\n\n  if (startDate === \"\") {\n    formValidated = false;\n    messageSentBack += \"Please enter the start date for your trip.\\n\";\n  } //Validating that endDate is defined\n\n\n  if (endDate === \"\") {\n    formValidated = false;\n    messageSentBack += \"Please enter the end date for your trip.\\n\";\n  } //making sure startDate comes before endDate\n\n\n  if (startDate && endDate) {\n    var newStart = new Date(startDate);\n    var newEnd = new Date(endDate);\n\n    if (newEnd - newStart < 0) {\n      formValidated = false;\n      messageSentBack += \"End date before start date. Please re-enter the dates of your trip.\\n\";\n    }\n  }\n\n  ;\n  return {\n    validation: formValidated,\n    message: messageSentBack\n  };\n}\n\n\n\n//# sourceURL=webpack://travel-planner/./client/js/formValidation.js?");

/***/ }),

/***/ "./client/js/validateReturnedData.js":
/*!*******************************************!*\
  !*** ./client/js/validateReturnedData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateReturnedData\": () => (/* binding */ validateReturnedData)\n/* harmony export */ });\nfunction validateReturnedData(dataReturned) {\n  if (dataReturned.weather === undefined) {\n    alert('Destination entered is invalid');\n    return false;\n  }\n\n  return true;\n}\n\n\n\n//# sourceURL=webpack://travel-planner/./client/js/validateReturnedData.js?");

/***/ }),

/***/ "./client/styles/footer.scss":
/*!***********************************!*\
  !*** ./client/styles/footer.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://travel-planner/./client/styles/footer.scss?");

/***/ }),

/***/ "./client/styles/form.scss":
/*!*********************************!*\
  !*** ./client/styles/form.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://travel-planner/./client/styles/form.scss?");

/***/ }),

/***/ "./client/styles/header.scss":
/*!***********************************!*\
  !*** ./client/styles/header.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://travel-planner/./client/styles/header.scss?");

/***/ }),

/***/ "./client/styles/results.scss":
/*!************************************!*\
  !*** ./client/styles/results.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://travel-planner/./client/styles/results.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/index.js");
/******/ 	
/******/ })()
;