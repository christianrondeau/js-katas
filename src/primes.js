module.exports = function(n) {
  var d = 2;	
	var r = [];
	while(n > 2 && n % 2 === 0) {
		n = n / 2;
		r.push(2);
	}
	r.push(n);
	return r;
}
