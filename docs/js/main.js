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

eval("const thresholdDictionary = __webpack_require__(/*! ./js/threshold.js */ \"./src/js/threshold.js\");\nlet teamCapabilityScore = 3;\nlet domainComplexityScore = 3;\nconst gauge = new JustGage({\n  id: \"gauge\", // the id of the html element\n  value: 2.5,\n  min: 0,\n  max: 5,\n  decimals: 2,\n  gaugeWidthScale: 0.6,\n  shadowSize: 5,\n  shadowVerticalOffset: 3,\n  shadowOpacity: 0.3,\n});\n\nfunction renderGaugeValues(tCScore = 1, dCScore = 1) {\n  // lookup threshold value from data dictionary\n  const matchedElement = Object.values(thresholdDictionary).find((el) => {\n    return (\n      el.teamCapabilitiesScore === tCScore &&\n      el.domainComplexityScore === dCScore\n    );\n  });\n  gauge.refresh(matchedElement.expectedThreshHoldValue);\n}\n\n// attach event to slider change\nconst teamCapabilitySlider = document.getElementById(\"team-capability\");\nconst domainComplexitySlider = document.getElementById(\"domain-complexity\");\nteamCapabilitySlider.oninput = function () {\n  teamCapabilityScore = parseInt(this.value);\n  renderGaugeValues(teamCapabilityScore, domainComplexityScore);\n};\ndomainComplexitySlider.oninput = function () {\n  domainComplexityScore = parseInt(this.value);\n  renderGaugeValues(teamCapabilityScore, domainComplexityScore);\n};\n\n/**\n * easter-egg tribute to the early web\n * We don't know what we're doing with the css and design so\n * we're sticking in silly things to distract from that fact\n */\nsetTimeout(() => {\n  const titleEl = document.getElementById(\"page-title\");\n  const marquee = document.createElement(\"marquee\");\n  titleEl.parentNode.insertBefore(marquee, titleEl);\n  marquee.appendChild(titleEl);\n}, 5000);\n\n\n//# sourceURL=webpack://platform-vs-full-stack-sliders/./src/index.js?");

/***/ }),

/***/ "./src/js/threshold.js":
/*!*****************************!*\
  !*** ./src/js/threshold.js ***!
  \*****************************/
/***/ ((module) => {

eval("\n/**\n * score\n * low=1\n * medium=2\n * high=3\n */\nconst dictionary = [\n  // low team, low complexity, they still might mess things up\n  {\n    teamCapabilitiesScore: 1,\n    domainComplexityScore: 1,\n    expectedThreshHoldValue: 3,\n  },\n  // low team, medium complexity, they will need some support\n  {\n    teamCapabilitiesScore: 1,\n    domainComplexityScore: 2,\n    expectedThreshHoldValue: 4,\n  },\n  // low team, high complexity, they're defo gonna need support\n  {\n    teamCapabilitiesScore: 1,\n    domainComplexityScore: 3,\n    expectedThreshHoldValue: 5,\n  },\n  // medium team, low complexity\n  {\n    teamCapabilitiesScore: 2,\n    domainComplexityScore: 1,\n    expectedThreshHoldValue: 1,\n  },\n  // medium team, medium complexity,\n  // might need occasional support probably from an enabling team\n  // it will be good to push them\n  {\n    teamCapabilitiesScore: 2,\n    domainComplexityScore: 2,\n    expectedThreshHoldValue: 3,\n  },\n  // medium team, high complexity, they're going to need support\n  {\n    teamCapabilitiesScore: 2,\n    domainComplexityScore: 3,\n    expectedThreshHoldValue: 5,\n  },\n  // high team, low complexity\n  {\n    teamCapabilitiesScore: 3,\n    domainComplexityScore: 1,\n    expectedThreshHoldValue: 1,\n  },\n  // high team, medium complexity\n  {\n    teamCapabilitiesScore: 3,\n    domainComplexityScore: 2,\n    expectedThreshHoldValue: 2,\n  },\n  // high team, high complexity,\n  // will need some support maybe just enablement\n  // but if you put them in a \"golden cage\" they will break out anyway\n  {\n    teamCapabilitiesScore: 3,\n    domainComplexityScore: 3,\n    expectedThreshHoldValue: 3,\n  },\n];\n\nmodule.exports = dictionary;\n\n\n//# sourceURL=webpack://platform-vs-full-stack-sliders/./src/js/threshold.js?");

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