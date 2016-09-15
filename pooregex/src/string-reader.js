function StringReader(value) {
	this.index = -1;
	this.value = value;
}
StringReader.prototype.next = function() {
	this.char = this.value[++this.index];
	return this.value.length > this.index;
};

module.exports = StringReader;
