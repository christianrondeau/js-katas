var jasmine = require("jasmine");

var pooregexMatchers = {
	toPoomatch: function(util, customEqualityTesters) {
		return {
			compare: function(actual, expected) {
				var result={};
				if(!expected) {
					result.pass = actual.success;
					if(result.pass) {
						result.message = "Expected not to match. Matched: '" + actual.matches + "'";
					} else {
						result.message = "Expected to match something";
					}
				} else {
					result.pass = actual.success && util.equals(actual.matches, expected, customEqualityTesters);

					if(result.pass) {
						result.message = "Expected Pooregex not to match, but it did. Matched: " + actual.matches;
					} else {
						result.message = "Expected Pooregex to match '" + expected + "', but it did not.";
						if(actual.success) {
							result.message += " Matched: '" + actual.matches + "'"
						}
					}
				}
				return result;
			}
		}
	}};

module.exports = pooregexMatchers;
