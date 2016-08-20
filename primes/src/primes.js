function reduce(r,n,d) {
	while(n > d && n % d === 0) {
		var n = n / d;
		r.push(d);
	}
	return n;
}

module.exports = function(n) {
  var d = 2;	
	var r = [];
	var c = n;
	do {
		c = reduce(r,c,d);
		d++;
	} while(d < c)
	if(c !== n) r.push(c);
	return r;
}
