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
		var c2 = reduce(r,c,d);
		if(c !== c2) r.push(c = c2);
		d++;
	} while(d < c)
	return r;
}
