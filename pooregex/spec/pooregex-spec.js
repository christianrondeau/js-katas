require("jasmine");
var pooregexMatchers = require("./matchers/pooregex-matchers");
var Pooregex = require("../src/pooregex");

describe("Pooregex", function() {
	beforeEach(function() {
		jasmine.addMatchers(pooregexMatchers);
	});

	it("can find a letter", function() {
		expect(new Pooregex("a").match("a")).toPoomatch(["a"]);
	});

	it("can fail finding a letter", function() {
		expect(new Pooregex("a").match("b")).not.toPoomatch();
	});

	it("can find a letter among others", function() {
		expect(new Pooregex("b").match("abc")).toPoomatch([ "b" ]);
	});

	it("can find multiple letters among others", function() {
		expect(new Pooregex("bc").match("abcd")).toPoomatch([ "bc" ]);
	});

	it("can partial match but stop when pattern ends", function() {
		expect(new Pooregex("bb").match("abab")).not.toPoomatch();
	});

	it("can match '.'", function() {
		expect(new Pooregex("b.d").match("abcde")).toPoomatch(["bcd"]);
	});

	it("can match escaped characters", function() {
		expect(new Pooregex("b\\\\c").match("a\\b\\c\\d")).toPoomatch(["b\\c"]);
	});

	it("can match repeated (+) characters", function() {
		expect(new Pooregex("ab+c").match("aaabbbccc")).toPoomatch(["abbbc"]);
	});

	it("can match repeated characters on whole string", function() {
		expect(new Pooregex("a+").match("aaa")).toPoomatch(["aaa"]);
	});
});
