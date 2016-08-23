var numbers = [1, 5, 10];
var lettersByDigit = [
	['I', 'V', 'X'],
	['X', 'L', 'C'],
	['C', 'D', 'M']
];

function roman(n) {
	var r = '';
	var ns = '' + n;
	for(var index = 0; index < ns.length; index++) {
		var nd = parseInt(ns[ns.length - index - 1]);
		if(index >= lettersByDigit.length) {
			r = lettersByDigit[lettersByDigit.length - 1][2].repeat(nd * Math.pow(10, index - lettersByDigit.length)) + r;
			continue;
		}
		var letters = lettersByDigit[index];

		if(nd === numbers[2] - numbers[0])
		{
			r = letters[0] + letters[2] + r;
			continue;
		}

		if(nd === numbers[1] - numbers[0])
		{
			r = letters[0] + letters[1] + r;
			continue;
		}

		var rd = '';
		if(nd >= numbers[1])
		{
			rd += letters[1];
			nd -= numbers[1];
		}

		rd += letters[0].repeat(nd);
		r = rd + r;
	}
	return r;
}

module.exports = roman;

