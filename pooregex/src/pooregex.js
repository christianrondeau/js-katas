function pooregex(s, r) 
{
	var i = -1;
	while(++i < s.length) {
		var c = s[i];
		if(c === r) {
			return {
				success: true,
				matches: [ c ]
			};
		}
	}

	return {
		success: false,
		matches: []
	};
}

module.exports = pooregex;
