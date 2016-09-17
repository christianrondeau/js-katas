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

class WildcardModifier {
	constructor() {
			this.repeat = -1;
			this.optional = true;
	}
}

module.exports = {
	"?": OptionalModifier,
	"+": RepeatedModifier,
	"*": WildcardModifier,
	"Single": SingleModifier
}
