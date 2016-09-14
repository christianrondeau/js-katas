function RegexReader(regex) {
	this.index = -1;
	this.regex = regex;
}
RegexReader.prototype.next = function() {
	this.token = this.regex[++this.index];
};
RegexReader.prototype.isMatchComplete = function() {
	return this.index == this.regex.length;
};

function StringReader(value) {
	this.index = -1;
	this.value = value;
}
StringReader.prototype.next = function() {
	this.char = this.value[++this.index];
	return this.value.length > this.index;
};

function Pooregex(regex) {
	this.regexReader = new RegexReader(regex);
}
Pooregex.prototype.match = function(value) {
	var m = "";
	var stringReader = new StringReader(value);
	this.regexReader.next();
	while(stringReader.next()) {
		if(stringReader.char === this.regexReader.token) {
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
