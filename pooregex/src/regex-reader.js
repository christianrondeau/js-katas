
function RegexReader(regex) {
	this.regex = regex;
}

RegexReader.prototype.begin = function() {
	this.index = -1;
	this.repeat = 1;
	this.next();
}

RegexReader.prototype.next = function() {
	if(--this.repeat !== 0) {
		return;
}

	this.token = this.regex[++this.index];
	if(this.token  === "\\") {
		this.token = this.regex[++this.index];
	}

	var peek = this.regex[this.index + 1];
	if(peek === "+") {
		this.index++;
		this.repeat = -1;
	} else {
		this.repeat = 1;
	}
};

RegexReader.prototype.isMatchComplete = function() {
	return this.index === this.regex.length;
};

RegexReader.prototype.isMatch = function(char) {
	if(this.token === ".") {
		return true;
	}

	return char === this.token;
}

RegexReader.prototype.doMatch = function(char) {
	var matched = this.isMatch(char);

	if(!matched && this.repeat < 0) {
		this.repeat = 1;
		this.next();
		matched = this.isMatch(char);
	}

	this.next();
	return matched;
};

module.exports = RegexReader;
