"use strict";

require("jasmine");
var pooregexMatchers = require("./pooregex-matchers");

describe("toPoomatch", () => {
	var matcher, matchersUtil;
	beforeEach(() => {
		matcher = pooregexMatchers.toPoomatch(jasmine.matchersUtil);
	});

	it("succeeds with specific match", () => {
		var result = matcher.compare({ success: true, matches: ["expected"]}, ["expected"]);

		expect(result.pass).toEqual(true);
	});

	it("succeeds with unspecified match", () => {
		var result = matcher.compare({ success: true, matches: ["expected"]}, undefined);

		expect(result.pass).toEqual(true);
	});

	it("fails with no matches", () => {
		var result = matcher.compare({ success: false, matches: []}, ["expected"]);

		expect(result.pass).toEqual(false);
		expect(result.message).toEqual("Expected Pooregex to match 'expected', but it did not.");
	});

	it("fails with mismatching matches", () => {
		var result = matcher.compare({ success: true, matches: ["actual"]}, ["expected"]);

		expect(result.pass).toEqual(false);
		expect(result.message).toEqual("Expected Pooregex to match 'expected', but it did not. Matched: 'actual'");
	});
});
