require('jasmine');
var primes = require('../src/primes');

describe("primes generator", function() {
	it("2 -> 2", function() {
		expect(primes(2)).toEqual([2]);
	});
				
	it("4 -> 2,2", function() {
		expect(primes(4)).toEqual([2,2]);
	});
});
