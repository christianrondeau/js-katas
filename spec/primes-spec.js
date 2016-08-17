require('jasmine');
var primes = require('../src/primes');

describe("primes generator", function() {
	it("2 -> 2", function() {
		expect(primes(2)).toBe(2);
	});
});
