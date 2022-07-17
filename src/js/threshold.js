
/**
 * score
 * low=1
 * medium=2
 * high=3
 */
const dictionary = [
  // low team, low complexity, they still might mess things up
  {
    teamCapabilitiesScore: 1,
    problemComplexityScore: 1,
    expectedThreshHoldValue: 3,
  },
  // low team, medium complexity, they will need some support
  {
    teamCapabilitiesScore: 1,
    problemComplexityScore: 2,
    expectedThreshHoldValue: 4,
  },
  // low team, high complexity, they're defo gonna need support
  {
    teamCapabilitiesScore: 1,
    problemComplexityScore: 3,
    expectedThreshHoldValue: 5,
  },
  // medium team, low complexity
  {
    teamCapabilitiesScore: 2,
    problemComplexityScore: 1,
    expectedThreshHoldValue: 1,
  },
  // medium team, medium complexity,
  // might need occasional support probably from an enabling team
  // it will be good to push them
  {
    teamCapabilitiesScore: 2,
    problemComplexityScore: 2,
    expectedThreshHoldValue: 3,
  },
  // medium team, high complexity, they're going to need support
  {
    teamCapabilitiesScore: 2,
    problemComplexityScore: 3,
    expectedThreshHoldValue: 5,
  },
  // high team, low complexity
  {
    teamCapabilitiesScore: 3,
    problemComplexityScore: 1,
    expectedThreshHoldValue: 1,
  },
  // high team, medium complexity
  {
    teamCapabilitiesScore: 3,
    problemComplexityScore: 2,
    expectedThreshHoldValue: 2,
  },
  // high team, high complexity,
  // will need some support maybe just enablement
  // but if you put them in a "golden cage" they will break out anyway
  {
    teamCapabilitiesScore: 3,
    problemComplexityScore: 3,
    expectedThreshHoldValue: 3,
  },
];

module.exports = dictionary;
