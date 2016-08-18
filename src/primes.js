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
	n = reduce(r,n,d);
	r.push(n);
	return r;
}
