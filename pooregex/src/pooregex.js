var StringReader = require("./string-reader");
var RegexReader = require("./regex-reader");

function Pooregex(regex) {
	this.regexReader = new RegexReader(regex);
}
Pooregex.prototype.match = function(value) {
	var m = "";
	var stringReader = new StringReader(value);
	this.regexReader.begin();
	while(stringReader.next()) {
		if(this.regexReader.doMatch(stringReader.char)) {
			m += stringReader.char;
			if(this.regexReader.isMatchComplete()) {
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
};

module.exports = Pooregex;
