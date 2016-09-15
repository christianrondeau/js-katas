
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
RegexReader.prototype.isMatch = function(char) {
	if(this.token === ".") {
		return true;
	}

	return char === this.token;
}

module.exports = RegexReader;
