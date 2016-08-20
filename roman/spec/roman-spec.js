require('jasmine');
		var roman = require('../src/roman');

describe("roman numbers generator", function() {
	it("1 -> I", function() {
		expect(roman(1)).toEqual('I');
	});
});
