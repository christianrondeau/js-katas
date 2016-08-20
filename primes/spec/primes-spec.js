require('jasmine');
var primes = require('../src/primes');

describe("primes generator", function() {
	it("2 -> none", function() {
		expect(primes(2)).toEqual([]);
	});

	it("4 -> 2,2", function() {
		expect(primes(4)).toEqual([2,2]);
	});

	it("6 -> 2,3", function() {
		expect(primes(6)).toEqual([2,3]);
	});

	it("8 -> 2,2,2", function() {
		expect(primes(8)).toEqual([2,2,2]);
	});

	it("9 -> 3,3", function() {
		expect(primes(9)).toEqual([3,3]);
	});
	it("990 -> 2,3,3,5,11", function() {
		expect(primes(990)).toEqual([2,3,3,5,11]);
	});
});
