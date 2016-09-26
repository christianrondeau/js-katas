"use strict";

var applyModifier = require("./modifiers.js");
var getOperator = require("./operators.js");

class RegexParser {
	constructor(regex) {
		this.regex = regex;
	}

	begin() {
		this.index = -1;
		this.next();
	}

	next() {
		if(this.operator && this.operator.canMatchAgain()) {
			return;
		}

		this.operator = this.nextModifier(this.nextOperator());
	}

	nextOperator() {
		var token = this.regex[++this.index];
		if(typeof token === "undefined") {
			return null;	
		}
		if(token  === "\\") {
			token += this.regex[++this.index];
		}

		return getOperator(token);
	}

	nextModifier(operator) {
		var peek = this.regex[this.index + 1];

		if(applyModifier(operator, peek)) {
			this.index++;
		}

		return operator;
	}

	canContinue() {
		return this.index < this.regex.length;
	}

	isMatchComplete() {
		return !this.canContinue() || (this.index === this.regex.length - 1 && this.operator.repeat < 0);
	}

	isMatch(char) {
		var matched = this.operator.isMatch(char);
		return matched;
	}

	doMatch(char) {
		var matched = this.isMatch(char);

		while(!matched && (this.operator.optional || this.operator.repeat < 0)) {
			this.operator = null;
			this.next();
			if(!this.operator) {
				return false;
			}
			matched = this.isMatch(char);
		}

		this.next();
		return matched;
	}
}

module.exports = RegexParser;
