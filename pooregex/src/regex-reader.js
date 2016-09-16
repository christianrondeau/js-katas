
function RegexReader(regex) {
	this.regex = regex;
}

RegexReader.prototype.begin = function() {
	this.index = -1;
	this.repeat = 1;
	this.optional = undefined;
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
		this.optional = false;
	} else if(peek === "?") {
		this.index++;
		this.repeat = 1;
		this.optional = true;
	} else {
		this.repeat = 1;
		this.optional = false;
	}
};

RegexReader.prototype.isMatchComplete = function(stringComplete) {
	var complete = this.index === this.regex.length || (stringComplete && this.index === this.regex.length - 1 && this.repeat < 0);
	return complete;
};

RegexReader.prototype.isMatch = function(char) {
	if(this.token === ".") {
		return true;
	}

	return char === this.token;
}

RegexReader.prototype.doMatch = function(char) {
	var matched = this.isMatch(char);

	if(!matched && (this.optional || this.repeat < 0)) {
		this.repeat = 1;
		this.next();
		matched = this.isMatch(char);
	}

	this.next();
	return matched;
};

module.exports = RegexReader;
