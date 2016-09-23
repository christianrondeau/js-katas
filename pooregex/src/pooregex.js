"use strict";

var StringReader = require("./string-reader");
var RegexParser = require("./regex-parser");

class Pooregex {
	constructor(regex) {
		this.regexParser = new RegexParser(regex);
	}

	match(value) {
		var m = "";
		var stringReader = new StringReader(value);
		this.regexParser.begin();
		while(stringReader.next()) {
			if(this.regexParser.doMatch(stringReader.char)) {
				m += stringReader.char;
				if(!this.regexParser.canContinue()) {
					break;
				}
			} else {
				this.regexParser.begin();
				if(m) {
					m = "";	
				}
			}
		}
		if(m && this.regexParser.isMatchComplete()) {
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
