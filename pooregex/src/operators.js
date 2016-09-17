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

module.exports = {
	".": AnyCharOperator,
	"SpecificChar": SpecificCharOperator
};
