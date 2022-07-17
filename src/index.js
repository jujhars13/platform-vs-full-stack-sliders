const dictionary = require("./js/threshold.js");

const chart = generateChart({}, {});
document.getElementById("chart-div").append(chart);

function generateChart({
  width = 200, // Width of the circle
  height = 600, // Height of the circle
  margin = { top: 20, right: 20, bottom: 20, left: 20 }, //The margins of the SVG
  levels = 3, // How many levels or inner circles should there be drawn
  maxValue = 100, // What is the value that the biggest circle will represent
  labelFactor = 1.15, // How much farther than the radius of the outer circle should the labels be placed
  wrapWidth = 60, // The number of pixels after which a label needs to be given a new line
  opacityArea = 0.35, // The opacity of the area of the blob
  strokeWidth = 2, // The width of the stroke around each blob
  roundStrokes = false, // If true the area and stroke will follow a round path (cardinal-closed)
  legendLabelFontSize = 15, // legend label font size in px
  color = "steelblue",
  xLabel = "aloo",
  yLabel = "gobi",
} = {}) {

  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg
    .append("text")
    .attr("transform", "translate(100,0)")
    .attr("x", 50)
    .attr("y", 50)
    .attr("font-size", "24px")
    .text(xLabel);

  return svg.node();
}
// const aapl = [
//   { date: 2007 - 04 - 23, close: 93.24 },
//   { date: 2007 - 04 - 24, close: 95.35 },
//   { date: 2007 - 06 - 14, close: 120.5 },
//   { date: 2007 - 06 - 17, close: 125.09 },
// ];

// const chart = LineChart(aapl, {
//   x: (d) => d.date,
//   y: (d) => d.close,
//   yLabel: "↑ Daily close ($)",
//   width: 650,
//   height: 500,
//   color: "steelblue",
// });
// console.log(chart);

// document.getElementById("chart-div").append(chart);

// function LineChart(
//   data,
//   {
//     x = ([x]) => x, // given d in data, returns the (temporal) x-value
//     y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
//     defined, // for gaps in data
//     curve = d3.curveLinear, // method of interpolation between points
//     marginTop = 20, // top margin, in pixels
//     marginRight = 30, // right margin, in pixels
//     marginBottom = 30, // bottom margin, in pixels
//     marginLeft = 40, // left margin, in pixels
//     width = 640, // outer width, in pixels
//     height = 400, // outer height, in pixels
//     xType = d3.scaleUtc, // the x-scale type
//     xDomain, // [xmin, xmax]
//     xRange = [marginLeft, width - marginRight], // [left, right]
//     yType = d3.scaleLinear, // the y-scale type
//     yDomain, // [ymin, ymax]
//     yRange = [height - marginBottom, marginTop], // [bottom, top]
//     yFormat, // a format specifier string for the y-axis
//     yLabel, // a label for the y-axis
//     color = "currentColor", // stroke color of line
//     strokeLinecap = "round", // stroke line cap of the line
//     strokeLinejoin = "round", // stroke line join of the line
//     strokeWidth = 1.5, // stroke width of line, in pixels
//     strokeOpacity = 1, // stroke opacity of line
//   } = {}
// ) {
// Compute values.
//   const X = d3.map(data, x);
//   const Y = d3.map(data, y);
//   const I = d3.range(X.length);
//   if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
//   const D = d3.map(data, defined);

//   // Compute default domains.
//   if (xDomain === undefined) xDomain = d3.extent(X);
//   if (yDomain === undefined) yDomain = [0, d3.max(Y)];

//   // Construct scales and axes.
//   const xScale = xType(xDomain, xRange);
//   const yScale = yType(yDomain, yRange);
//   const xAxis = d3
//     .axisBottom(xScale)
//     .ticks(width / 80)
//     .tickSizeOuter(0);
//   const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

//   // Construct a line generator.
//   const line = d3
//     .line()
//     .defined((i) => D[i])
//     .curve(curve)
//     .x((i) => xScale(X[i]))
//     .y((i) => yScale(Y[i]));

//   const svg = d3
//     .create("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("viewBox", [0, 0, width, height])
//     .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

//   svg
//     .append("g")
//     .attr("transform", `translate(0,${height - marginBottom})`)
//     .call(xAxis);

//   svg
//     .append("g")
//     .attr("transform", `translate(${marginLeft},0)`)
//     .call(yAxis)
//     .call((g) => g.select(".domain").remove())
//     .call((g) =>
//       g
//         .selectAll(".tick line")
//         .clone()
//         .attr("x2", width - marginLeft - marginRight)
//         .attr("stroke-opacity", 0.1)
//     )
//     .call((g) =>
//       g
//         .append("text")
//         .attr("x", -marginLeft)
//         .attr("y", 10)
//         .attr("fill", "currentColor")
//         .attr("text-anchor", "start")
//         .text(yLabel)
//     );

//   svg
//     .append("path")
//     .attr("fill", "none")
//     .attr("stroke", color)
//     .attr("stroke-width", strokeWidth)
//     .attr("stroke-linecap", strokeLinecap)
//     .attr("stroke-linejoin", strokeLinejoin)
//     .attr("stroke-opacity", strokeOpacity)
//     .attr("d", line(I));

//   return svg.node();
// }
/**
 * easter-egg tribute to the early web
 * We don't know what we're doing with the css and design so
 * we're sticking in silly things to distract from that fact
 */
setTimeout(() => {
  const titleEl = document.getElementById("page-title");
  const marquee = document.createElement("marquee");
  titleEl.parentNode.insertBefore(marquee, titleEl);
  marquee.appendChild(titleEl);
}, 5000);
