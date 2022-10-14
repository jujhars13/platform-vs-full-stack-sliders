const thresholdDictionary = require("./js/threshold.js");
const teamCapabilitySlider = document.getElementById("team-capability");
const domainComplexitySlider = document.getElementById("domain-complexity");
let teamCapabilityScore = parseInt(teamCapabilitySlider.value);
let domainComplexityScore = parseInt(domainComplexitySlider.value);

const gauge = new JustGage({
  id: "gauge", // the id of the html element
  value: 3,
  min: 1,
  max: 5,
  decimals: 0,
  gaugeWidthScale: 0.6,
  shadowSize: 5,
  shadowVerticalOffset: 3,
  shadowOpacity: 0.3,
});
renderGaugeValues(teamCapabilityScore, domainComplexityScore);

function renderGaugeValues(tCScore = 1, dCScore = 1) {
  // lookup threshold value from data dictionary
  const matchedElement = Object.values(thresholdDictionary).find((el) => {
    return (
      el.teamCapabilitiesScore === tCScore &&
      el.domainComplexityScore === dCScore
    );
  });
  console.log(matchedElement);
  gauge.refresh(matchedElement.expectedThreshHoldValue, undefined, undefined, "label");
}

// attach event to slider change
teamCapabilitySlider.oninput = function () {
  teamCapabilityScore = parseInt(this.value);
  renderGaugeValues(teamCapabilityScore, domainComplexityScore);
};
domainComplexitySlider.oninput = function () {
  domainComplexityScore = parseInt(this.value);
  renderGaugeValues(teamCapabilityScore, domainComplexityScore);
};

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
