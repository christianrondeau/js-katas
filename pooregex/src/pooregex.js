"use strict";

var StringReader = require("./string-reader");
var RegexReader = require("./regex-reader");

class Pooregex {
	constructor(regex) {
		this.regexReader = new RegexReader(regex);
	}

	match(value) {
		var m = "";
		var stringReader = new StringReader(value);
		this.regexReader.begin();
		while(stringReader.next()) {
			if(this.regexReader.doMatch(stringReader.char)) {
				m += stringReader.char;
				if(!this.regexReader.canContinue()) {
					break;
				}
			} else {
				this.regexReader.begin();
				if(m) {
					m = "";	
				}
			}
		}
		if(m && this.regexReader.isMatchComplete()) {
			return {
				success: true,
				matches: [ m ]
			};
		} else {
			return {
				success: false,
				matches: []
			};
		}
	}
}

	module.exports = Pooregex;
