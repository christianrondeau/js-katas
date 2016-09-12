function pooregex(s, r) 
{
	if(s === r) {
		return {
			success: true,
			matches: [ s ]
		};
	} else {
		return {
			success: false,
			matches: []
		};
	}
}

module.exports = pooregex;
