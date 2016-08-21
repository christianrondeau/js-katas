var numbers = [ 10,  5,   1 ];
var letters = ['X', 'V', 'I'];

function roman(n) {
	var r = '';
	for(var index = 0; index < numbers.length; index++) {
		var currentNumber = numbers[index];
		while(n >= currentNumber) {
			r = r + letters[index];
			n -= currentNumber;
		}

		for(var nextIndex = index + 1; nextIndex <= numbers.length; nextIndex++){
			var nextNumber = numbers[nextIndex];
			if(n !== nextNumber && n === currentNumber - nextNumber) {
				r = letters[nextIndex] + letters[index]  + r;
				n -= currentNumber - nextNumber;
			}
		}
	}
	return r;
}

module.exports = roman;
