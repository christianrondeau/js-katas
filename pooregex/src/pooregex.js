function pooregex(s, r) 
{
	var m = "";
	var si = -1;
	var ri = 0;
	var t = r[ri];
	while(++si < s.length) {
		var c = s[si];
		if(c === t) {
			m += c;
			t = r[++ri];
		} else if(m) {
			break;
		}
	}
	if(m && ri == r.length) {
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
