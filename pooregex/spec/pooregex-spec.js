require('jasmine');
var pooregex = require('../src/pooregex');

describe("pooregex", function() {
	it("can find a letter", function() {
		expect(pooregex("a", "a")).toEqual({ success: true, matches: ["a"] });
	});

	it("can fail finding a letter", function() {
		expect(pooregex("b", "a")).toEqual({ success: false, matches: [] });
	});
});
