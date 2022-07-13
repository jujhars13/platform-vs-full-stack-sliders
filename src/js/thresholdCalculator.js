/**
 * Returns the full-stack vs platform  threshold value
 * for a given capability and complexity score
 *
 * output is between 1 - 5
 * 1 is no support required, you're on your own
 * 5 is support required
 * @param {int} teamCapabilitiesScore The team's capabilities
 * @param {int} problemComplexityScore The problem complexity
 * @returns int
 */
function calculatePlatformTeamThreshold(teamCapabilitiesScore, problemComplexityScore) {
  if (teamCapabilitiesScore < 1 || teamCapabilitiesScore > 5) {
    throw new RangeError("teamCapabilitiesScore out of range 1-5");
  }
  if (problemComplexityScore < 1 || problemComplexityScore > 5) {
    throw new RangeError("problemComplexityScore out of range 1-5");
  }

  if (teamCapabilitiesScore === 1 && problemComplexityScore === 1) {
    return 5;
  }

  return false;
}

module.exports = { calculatePlatformTeamThreshold };
