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

function pooregex(s, r) 
{
	var m = "";
	var si = -1;
	var ri = 0;
	var regexReader = new RegexReader(r);
	regexReader.next();
	while(++si < s.length) {
		var c = s[si];
		if(c === regexReader.token) {
			m += c;
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
