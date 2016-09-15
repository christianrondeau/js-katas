var StringReader = require("./string-reader");
var RegexReader = require("./regex-reader");

function Pooregex(regex) {
	this.regexReader = new RegexReader(regex);
}
Pooregex.prototype.match = function(value) {
	var m = "";
	var stringReader = new StringReader(value);
	this.regexReader.next();
	while(stringReader.next()) {
		if(this.regexReader.isMatch(stringReader.char)) {
			m += stringReader.char;
			this.regexReader.next();
		} else if(m) {
			break;
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
