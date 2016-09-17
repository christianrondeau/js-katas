"use strict";

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

module.exports = {
	"?": OptionalModifier,
	"+": RepeatedModifier,
	"Single": SingleModifier
}
