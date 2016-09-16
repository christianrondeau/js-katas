"use strict";

class StringReader {
	constructor(value) {
		this.index = -1;
		this.value = value;
	}

	next() {
		this.char = this.value[++this.index];
		return this.value.length > this.index;
	}
}

module.exports = StringReader;
