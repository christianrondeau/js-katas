"use strict";

require("jasmine");
var pooregexMatchers = require("./matchers/pooregex-matchers");
var Pooregex = require("../src/pooregex");

describe("Pooregex", () => {
	beforeEach(() => {
		jasmine.addMatchers(pooregexMatchers);
	});

	it("can find a letter", () => {
		expect(new Pooregex("a").match("a")).toPoomatch(["a"]);
	});

	it("can fail finding a letter", () => {
		expect(new Pooregex("a").match("b")).not.toPoomatch();
	});

	it("can find a letter among others", () => {
		expect(new Pooregex("b").match("abc")).toPoomatch([ "b" ]);
	});

	it("can find multiple letters among others", () => {
		expect(new Pooregex("bc").match("abcd")).toPoomatch([ "bc" ]);
	});

	it("can partial match but stop when pattern ends", () => {
		expect(new Pooregex("bb").match("abab")).not.toPoomatch();
	});

	it("can match '.'", () => {
		expect(new Pooregex("b.d").match("abcde")).toPoomatch(["bcd"]);
	});

	it("can match escaped characters", () => {
		expect(new Pooregex("b\\\\c").match("a\\b\\c\\d")).toPoomatch(["b\\c"]);
	});

	it("can match repeated (+) characters", () => {
		expect(new Pooregex("ab+c").match("aaabbbccc")).toPoomatch(["abbbc"]);
	});

	it("can match repeated characters on whole string", () => {
		expect(new Pooregex("a+").match("aaa")).toPoomatch(["aaa"]);
	});

	it("fails matching repeated characters when not present", () => {
		expect(new Pooregex("b+").match("ac")).not.toPoomatch();
	});

	it("can match optional (?) characters", () => {
		expect(new Pooregex("ab?c").match("ac")).toPoomatch(["ac"]);
	});
});
