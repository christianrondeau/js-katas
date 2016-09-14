require('jasmine');
var Pooregex = require('../src/pooregex');

describe("Pooregex", function() {
	it("can find a letter", function() {
		expect(new Pooregex("a").match("a")).toEqual({ success: true, matches: ["a"] });
	});

	it("can fail finding a letter", function() {
		expect(new Pooregex("a").match("b")).toEqual({ success: false, matches: [] });
	});

	it("can find a letter among others", function() {
		expect(new Pooregex("b").match("abc")).toEqual({ success: true, matches: [ "b" ] });
	});

	it("can find multiple letters among others", function() {
		expect(new Pooregex("bc").match("abcd")).toEqual({ success: true, matches: [ "bc" ] });
	});

	it("can match but stop when pattern ends", function() {
		expect(new Pooregex("bb").match("abab")).toEqual({ success: false, matches: [] });
	});
});
