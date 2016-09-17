"use strict";

var modifiers = require("./modifiers.js");
var operators = require("./operators.js");

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

	canContinue() {
		return this.index < this.regex.length;
	}

	isMatchComplete() {
		return !this.canContinue() || (this.index === this.regex.length - 1 && this.modifier.repeat < 0);
	}

	isMatch(char) {
		var matched = this.operator.isMatch(char);
		return matched;
	}

	doMatch(char) {
		var matched = this.isMatch(char);

		if(!matched && (this.modifier.optional || this.modifier.repeat < 0)) {
			this.modifier = null;
			this.next();
			return this.doMatch(char);
		}

		this.next();
		return matched;
	}
}

module.exports = RegexReader;
