"use strict";

class Operator {
	constructor(minchar, maxchar) {
		this.minchar = minchar;
		this.maxchar = maxchar;
	}

	isMatch(char) {
		return char >= this.minchar && char <= this.maxchar;
	}
}

module.exports = function getOperator(token) {
	if(token === ".") {
		return new Operator(1, 999999);
	}	
	return new Operator(token, token);
};
