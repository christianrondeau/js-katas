function RegexReader(regex) {
	this.index = -1;
	this.regex = regex;
}
RegexReader.prototype.next = function() {
	this.token = this.regex[++this.index];
}
RegexReader.prototype.isMatchComplete = function() {
	return this.index == this.regex.length;
}

function StringReader(value) {
	this.index = -1;
	this.value = value;
}
StringReader.prototype.next = function() {
	this.char = this.value[++this.index];
	return this.char;
}

function pooregex(s, r) 
{
	var m = "";
	var stringReader = new StringReader(s);
	var regexReader = new RegexReader(r);
	regexReader.next();
	while(stringReader.next()) {
		if(stringReader.char === regexReader.token) {
			m += stringReader.char;
			regexReader.next();
		} else if(m) {
			break;
		}
	}
	if(m && regexReader.isMatchComplete()) {
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

module.exports = pooregex;
