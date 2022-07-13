/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const dictionary = __webpack_require__(/*! ./js/threshold.js */ \"./src/js/threshold.js\");\n\n\nconsole.log(dictionary);\n\n/**\n * easter-egg tribute to the early web\n * We don't know what we're doing with the css and design so\n * we're sticking in silly things to distract from that fact\n */\n setTimeout(() => {\n  const titleEl = document.getElementById(\"page-title\");\n  const marquee = document.createElement(\"marquee\");\n  titleEl.parentNode.insertBefore(marquee, titleEl);\n  marquee.appendChild(titleEl);\n}, 5000);\n\n\n//# sourceURL=webpack://platform-vs-full-stack-sliders/./src/index.js?");

/***/ }),

/***/ "./src/js/threshold.js":
/*!*****************************!*\
  !*** ./src/js/threshold.js ***!
  \*****************************/
/***/ ((module) => {

eval("const dictionary = [\n  // low team, low complexity, they still might mess things up\n  {\n    teamCapabilitiesScore: \"low\",\n    problemComplexityScore: \"low\",\n    expectedThreshHoldValue: 3,\n  },\n  // low team, medium complexity, they will need some support\n  {\n    teamCapabilitiesScore: \"low\",\n    problemComplexityScore: \"medium\",\n    expectedThreshHoldValue: 4,\n  },\n  // low team, high complexity, they're defo gonna need support\n  {\n    teamCapabilitiesScore: \"low\",\n    problemComplexityScore: \"high\",\n    expectedThreshHoldValue: 5,\n  },\n  // medium team, low complexity\n  {\n    teamCapabilitiesScore: \"medium\",\n    problemComplexityScore: \"low\",\n    expectedThreshHoldValue: 1,\n  },\n  // medium team, medium complexity,\n  // might need occasional support probably from an enabling team\n  // it will be good to push them\n  {\n    teamCapabilitiesScore: \"medium\",\n    problemComplexityScore: \"medium\",\n    expectedThreshHoldValue: 3,\n  },\n  // medium team, high complexity, they're going to need support\n  {\n    teamCapabilitiesScore: \"medium\",\n    problemComplexityScore: \"high\",\n    expectedThreshHoldValue: 5,\n  },\n  // high team, low complexity\n  {\n    teamCapabilitiesScore: \"high\",\n    problemComplexityScore: \"low\",\n    expectedThreshHoldValue: 1,\n  },\n  // high team, medium complexity\n  {\n    teamCapabilitiesScore: \"high\",\n    problemComplexityScore: \"medium\",\n    expectedThreshHoldValue: 2,\n  },\n  // high team, high complexity,\n  // will need some support maybe just enablement\n  // but if you put them in a \"golden cage\" they will break out anyway\n  {\n    teamCapabilitiesScore: \"high\",\n    problemComplexityScore: \"high\",\n    expectedThreshHoldValue: 3,\n  },\n];\n\nmodule.exports = dictionary;\n\n\n//# sourceURL=webpack://platform-vs-full-stack-sliders/./src/js/threshold.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;