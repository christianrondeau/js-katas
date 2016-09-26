"use strict";

class Operator {
	constructor(minchar, maxchar) {
		this.mincode = minchar;
		this.maxcode = maxchar;
		this.repeat = 1;
		this.optional = false;
	}

	isMatch(char) {
		var code = char.charCodeAt();
		var matched = code >= this.mincode && code <= this.maxcode;
		return matched;
	}

	canMatchAgain() {
		return --this.repeat !== 0;
	}
}

module.exports = function getOperator(token) {
	if(token === ".") {
		return new Operator(1, 999999);
	}	
	return new Operator(token.charCodeAt(), token.charCodeAt());
};
