require('jasmine');
		var roman = require('../src/roman');

describe("roman numbers generator", function() {
	it("1 -> I", function() {
		expect(roman(1)).toEqual('I');
	});
<<<<<<< HEAD

	it("2 -> II", function() {
		expect(roman(2)).toEqual('II');
	});

	it("5 -> V", function() {
		expect(roman(5)).toEqual('V');
	});

	it("4 -> IV", function() {
		expect(roman(4)).toEqual('IV');
	});

	it("10 -> X", function() {
		expect(roman(10)).toEqual('X');
	});

	it("9 -> IX", function() {
		expect(roman(9)).toEqual('IX');
	});

	it("6 -> VI", function() {
		expect(roman(6)).toEqual('VI');
	});

	it("7 -> VII", function() {
		expect(roman(7)).toEqual('VII');
	});
=======
>>>>>>> 32730d280ee781e91ba0dfbc7b7d07d196808fb3
});
