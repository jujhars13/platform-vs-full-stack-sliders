const expect = require("chai").expect;
const calculator =
  require("./thresholdCalculator.js").calculatePlatformTeamThreshold;

describe("calculation correctness", () => {
  it("throws on teamCapabilitiesScore out of range", () => {
    expect(() => {
      calculator(22, 2);
    }).to.throw(RangeError, "teamCapabilitiesScore out of range 1-5");
  });

  it("throws on problemComplexityScore out of range", () => {
    expect(() => {
      calculator(3, 44);
    }).to.throw(RangeError, "problemComplexityScore out of range 1-5");
  });

  it("returns a value between 1 and 5 for good inputs", () => {
    expect(calculator(1, 1)).to.be.at.least(1);
    expect(calculator(1, 1)).to.be.at.most(5);
  });

  it("returns the right value for expected inputs", () => {

    // expected output is between 1 - 5
    // 1 is no support required, you're on your own
    // 5 is support required
    const expected = [
      // low team, low complexity, they still might mess things up
      {
        teamCapabilitiesScore: 1,
        problemComplexityScore: 1,
        expectedThreshHoldValue: 3,
      },
      // low team, medium complexity, they will need some support
      {
        teamCapabilitiesScore: 1,
        problemComplexityScore: 3,
        expectedThreshHoldValue: 4,
      },
      // low team, high complexity, they're defo gonna need support
      {
        teamCapabilitiesScore: 1,
        problemComplexityScore: 5,
        expectedThreshHoldValue: 5,
      },
      // medium team, low complexity
      {
        teamCapabilitiesScore: 3,
        problemComplexityScore: 1,
        expectedThreshHoldValue: 1,
      },
      // medium team, medium complexity,
      // might need occasional support probably from an enabling team
      // it will be good to push them
      {
        teamCapabilitiesScore: 3,
        problemComplexityScore: 3,
        expectedThreshHoldValue: 3,
      },
      // medium team, high complexity, they're going to need support
      {
        teamCapabilitiesScore: 3,
        problemComplexityScore: 5,
        expectedThreshHoldValue: 5,
      },
      // high team, low complexity
      {
        teamCapabilitiesScore: 5,
        problemComplexityScore: 1,
        expectedThreshHoldValue: 1,
      },
      // high team, medium complexity
      {
        teamCapabilitiesScore: 5,
        problemComplexityScore: 3,
        expectedThreshHoldValue: 2,
      },
      // high team, high complexity,
      // will need some support maybe just enablement
      // but if you put them in a "golden cage" they will break out anyway
      {
        teamCapabilitiesScore: 5,
        problemComplexityScore: 5,
        expectedThreshHoldValue: 3,
      },
    ];

    expected.forEach((el) => {
      expect(
        calculator(el.teamCapabilitiesScore, el.problemComplexityScore)
      ).equals(el.expectedThreshHoldValue);
    });

  });
});
