"use strict";

class SpecificCharOperator {
	constructor(token) {
		this.token = token;
	}

	isMatch(char) {
		return char === this.token;
	}
}

class AnyCharOperator {
	constructor(token) {
		this.token = token;
	}

	isMatch(char) {
		return true;
	}
}

var operators = {
	".": AnyCharOperator
};

class RegexReader {
	constructor(regex) {
		this.regex = regex;
	}

	begin() {
		this.index = -1;
		this.repeat = 1;
		this.optional = undefined;
		this.next();
	}

	next() {
		if(--this.repeat !== 0) {
			return;
		}

		this.operator = this.nextOperator();

		var peek = this.regex[this.index + 1];

		if(peek === "+") {
			this.index++;
			this.repeat = -1;
			this.optional = false;
		} else if(peek === "?") {
			this.index++;
			this.repeat = 1;
			this.optional = true;
		} else {
			this.repeat = 1;
			this.optional = false;
		}
	}
	
	nextOperator() {
		var token = this.regex[++this.index];
		if(token  === "\\") {
			return new SpecificCharOperator(this.regex[++this.index]);
		}
		var operatorCtor  = operators[token];
		if(operatorCtor) {
			return new operatorCtor();
		}

		return new SpecificCharOperator(token);
	}

	isMatchComplete(stringComplete) {
		var complete = this.index === this.regex.length || (stringComplete && this.index === this.regex.length - 1 && this.repeat < 0);
		return complete;
	}

	isMatch(char) {
		return this.operator.isMatch(char);
	}

	doMatch(char) {
		var matched = this.isMatch(char);

		if(!matched && (this.optional || this.repeat < 0)) {
			this.repeat = 1;
			this.next();
			matched = this.isMatch(char);
		}

		this.next();
		return matched;
	}
}

module.exports = RegexReader;
