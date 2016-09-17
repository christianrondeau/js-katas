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

	isMatch() {
		return true;
	}
}

var operators = {
	".": AnyCharOperator,
	"SpecificChar": SpecificCharOperator
};

class SingleModifier {
	constructor() {
			this.repeat = 1;
			this.optional = false;
	}
}

class OptionalModifier {
	constructor() {
			this.repeat = 1;
			this.optional = true;
	}
}

class RepeatedModifier {
	constructor() {
			this.repeat = -1;
			this.optional = false;
	}
}

var modifiers = {
	"?": OptionalModifier,
	"+": RepeatedModifier,
	"Single": SingleModifier
}

class RegexReader {
	constructor(regex) {
		this.regex = regex;
	}

	begin() {
		this.index = -1;
		this.next();
	}

	next() {
		if(this.modifier && --this.modifier.repeat !== 0) {
			return;
		}

		this.operator = this.nextOperator();
		this.modifier = this.nextModifier();
	}
	
	nextOperator() {
		var token = this.regex[++this.index];
		if(token  === "\\") {
			return new operators.SpecificChar(this.regex[++this.index]);
		}

		var operatorCtor = operators[token];
		if(operatorCtor) {
			return new operatorCtor();
		}

		return new operators.SpecificChar(token);
	}

	nextModifier() {
		var peek = this.regex[this.index + 1];

		var modifierCtor = modifiers[peek];
		if(modifierCtor) {
			this.index++;
			return new modifierCtor();
		}
		
		return new modifiers.Single();
	}

	isMatchComplete(stringComplete) {
		var complete = this.index === this.regex.length || (stringComplete && this.index === this.regex.length - 1 && this.modifier.repeat < 0);
		return complete;
	}

	isMatch(char) {
		return this.operator.isMatch(char);
	}

	doMatch(char) {
		var matched = this.isMatch(char);

		if(!matched && (this.modifier.optional || this.modifier.repeat < 0)) {
			this.modifier = new modifiers.Single();
			this.next();
			matched = this.isMatch(char);
		}

		this.next();
		return matched;
	}
}

module.exports = RegexReader;
