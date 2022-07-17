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

eval("const dictionary = __webpack_require__(/*! ./js/threshold.js */ \"./src/js/threshold.js\");\n\nconst chart = generateChart({}, {});\ndocument.getElementById(\"chart-div\").append(chart);\n\nfunction generateChart({\n  width = 200, // Width of the circle\n  height = 600, // Height of the circle\n  margin = { top: 20, right: 20, bottom: 20, left: 20 }, //The margins of the SVG\n  levels = 3, // How many levels or inner circles should there be drawn\n  maxValue = 100, // What is the value that the biggest circle will represent\n  labelFactor = 1.15, // How much farther than the radius of the outer circle should the labels be placed\n  wrapWidth = 60, // The number of pixels after which a label needs to be given a new line\n  opacityArea = 0.35, // The opacity of the area of the blob\n  strokeWidth = 2, // The width of the stroke around each blob\n  roundStrokes = false, // If true the area and stroke will follow a round path (cardinal-closed)\n  legendLabelFontSize = 15, // legend label font size in px\n  color = \"steelblue\",\n  xLabel = \"aloo\",\n  yLabel = \"gobi\",\n} = {}) {\n\n  const svg = d3\n    .create(\"svg\")\n    .attr(\"width\", width)\n    .attr(\"height\", height)\n    .attr(\"viewBox\", [0, 0, width, height])\n    .attr(\"style\", \"max-width: 100%; height: auto; height: intrinsic;\");\n\n  svg\n    .append(\"text\")\n    .attr(\"transform\", \"translate(100,0)\")\n    .attr(\"x\", 50)\n    .attr(\"y\", 50)\n    .attr(\"font-size\", \"24px\")\n    .text(xLabel);\n\n  return svg.node();\n}\n// const aapl = [\n//   { date: 2007 - 04 - 23, close: 93.24 },\n//   { date: 2007 - 04 - 24, close: 95.35 },\n//   { date: 2007 - 06 - 14, close: 120.5 },\n//   { date: 2007 - 06 - 17, close: 125.09 },\n// ];\n\n// const chart = LineChart(aapl, {\n//   x: (d) => d.date,\n//   y: (d) => d.close,\n//   yLabel: \"↑ Daily close ($)\",\n//   width: 650,\n//   height: 500,\n//   color: \"steelblue\",\n// });\n// console.log(chart);\n\n// document.getElementById(\"chart-div\").append(chart);\n\n// function LineChart(\n//   data,\n//   {\n//     x = ([x]) => x, // given d in data, returns the (temporal) x-value\n//     y = ([, y]) => y, // given d in data, returns the (quantitative) y-value\n//     defined, // for gaps in data\n//     curve = d3.curveLinear, // method of interpolation between points\n//     marginTop = 20, // top margin, in pixels\n//     marginRight = 30, // right margin, in pixels\n//     marginBottom = 30, // bottom margin, in pixels\n//     marginLeft = 40, // left margin, in pixels\n//     width = 640, // outer width, in pixels\n//     height = 400, // outer height, in pixels\n//     xType = d3.scaleUtc, // the x-scale type\n//     xDomain, // [xmin, xmax]\n//     xRange = [marginLeft, width - marginRight], // [left, right]\n//     yType = d3.scaleLinear, // the y-scale type\n//     yDomain, // [ymin, ymax]\n//     yRange = [height - marginBottom, marginTop], // [bottom, top]\n//     yFormat, // a format specifier string for the y-axis\n//     yLabel, // a label for the y-axis\n//     color = \"currentColor\", // stroke color of line\n//     strokeLinecap = \"round\", // stroke line cap of the line\n//     strokeLinejoin = \"round\", // stroke line join of the line\n//     strokeWidth = 1.5, // stroke width of line, in pixels\n//     strokeOpacity = 1, // stroke opacity of line\n//   } = {}\n// ) {\n// Compute values.\n//   const X = d3.map(data, x);\n//   const Y = d3.map(data, y);\n//   const I = d3.range(X.length);\n//   if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);\n//   const D = d3.map(data, defined);\n\n//   // Compute default domains.\n//   if (xDomain === undefined) xDomain = d3.extent(X);\n//   if (yDomain === undefined) yDomain = [0, d3.max(Y)];\n\n//   // Construct scales and axes.\n//   const xScale = xType(xDomain, xRange);\n//   const yScale = yType(yDomain, yRange);\n//   const xAxis = d3\n//     .axisBottom(xScale)\n//     .ticks(width / 80)\n//     .tickSizeOuter(0);\n//   const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);\n\n//   // Construct a line generator.\n//   const line = d3\n//     .line()\n//     .defined((i) => D[i])\n//     .curve(curve)\n//     .x((i) => xScale(X[i]))\n//     .y((i) => yScale(Y[i]));\n\n//   const svg = d3\n//     .create(\"svg\")\n//     .attr(\"width\", width)\n//     .attr(\"height\", height)\n//     .attr(\"viewBox\", [0, 0, width, height])\n//     .attr(\"style\", \"max-width: 100%; height: auto; height: intrinsic;\");\n\n//   svg\n//     .append(\"g\")\n//     .attr(\"transform\", `translate(0,${height - marginBottom})`)\n//     .call(xAxis);\n\n//   svg\n//     .append(\"g\")\n//     .attr(\"transform\", `translate(${marginLeft},0)`)\n//     .call(yAxis)\n//     .call((g) => g.select(\".domain\").remove())\n//     .call((g) =>\n//       g\n//         .selectAll(\".tick line\")\n//         .clone()\n//         .attr(\"x2\", width - marginLeft - marginRight)\n//         .attr(\"stroke-opacity\", 0.1)\n//     )\n//     .call((g) =>\n//       g\n//         .append(\"text\")\n//         .attr(\"x\", -marginLeft)\n//         .attr(\"y\", 10)\n//         .attr(\"fill\", \"currentColor\")\n//         .attr(\"text-anchor\", \"start\")\n//         .text(yLabel)\n//     );\n\n//   svg\n//     .append(\"path\")\n//     .attr(\"fill\", \"none\")\n//     .attr(\"stroke\", color)\n//     .attr(\"stroke-width\", strokeWidth)\n//     .attr(\"stroke-linecap\", strokeLinecap)\n//     .attr(\"stroke-linejoin\", strokeLinejoin)\n//     .attr(\"stroke-opacity\", strokeOpacity)\n//     .attr(\"d\", line(I));\n\n//   return svg.node();\n// }\n/**\n * easter-egg tribute to the early web\n * We don't know what we're doing with the css and design so\n * we're sticking in silly things to distract from that fact\n */\nsetTimeout(() => {\n  const titleEl = document.getElementById(\"page-title\");\n  const marquee = document.createElement(\"marquee\");\n  titleEl.parentNode.insertBefore(marquee, titleEl);\n  marquee.appendChild(titleEl);\n}, 5000);\n\n\n//# sourceURL=webpack://platform-vs-full-stack-sliders/./src/index.js?");

/***/ }),

/***/ "./src/js/threshold.js":
/*!*****************************!*\
  !*** ./src/js/threshold.js ***!
  \*****************************/
/***/ ((module) => {

eval("\n/**\n * score\n * low=1\n * medium=2\n * high=3\n */\nconst dictionary = [\n  // low team, low complexity, they still might mess things up\n  {\n    teamCapabilitiesScore: 1,\n    problemComplexityScore: 1,\n    expectedThreshHoldValue: 3,\n  },\n  // low team, medium complexity, they will need some support\n  {\n    teamCapabilitiesScore: 1,\n    problemComplexityScore: 2,\n    expectedThreshHoldValue: 4,\n  },\n  // low team, high complexity, they're defo gonna need support\n  {\n    teamCapabilitiesScore: 1,\n    problemComplexityScore: 3,\n    expectedThreshHoldValue: 5,\n  },\n  // medium team, low complexity\n  {\n    teamCapabilitiesScore: 2,\n    problemComplexityScore: 1,\n    expectedThreshHoldValue: 1,\n  },\n  // medium team, medium complexity,\n  // might need occasional support probably from an enabling team\n  // it will be good to push them\n  {\n    teamCapabilitiesScore: 2,\n    problemComplexityScore: 2,\n    expectedThreshHoldValue: 3,\n  },\n  // medium team, high complexity, they're going to need support\n  {\n    teamCapabilitiesScore: 2,\n    problemComplexityScore: 3,\n    expectedThreshHoldValue: 5,\n  },\n  // high team, low complexity\n  {\n    teamCapabilitiesScore: 3,\n    problemComplexityScore: 1,\n    expectedThreshHoldValue: 1,\n  },\n  // high team, medium complexity\n  {\n    teamCapabilitiesScore: 3,\n    problemComplexityScore: 2,\n    expectedThreshHoldValue: 2,\n  },\n  // high team, high complexity,\n  // will need some support maybe just enablement\n  // but if you put them in a \"golden cage\" they will break out anyway\n  {\n    teamCapabilitiesScore: 3,\n    problemComplexityScore: 3,\n    expectedThreshHoldValue: 3,\n  },\n];\n\nmodule.exports = dictionary;\n\n\n//# sourceURL=webpack://platform-vs-full-stack-sliders/./src/js/threshold.js?");

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