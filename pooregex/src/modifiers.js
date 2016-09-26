"use strict";

var modifiers = {
	"?": function optionalModifier(operator) {
		operator.repeat = 1;
		operator.optional = true;
	},
	"+": function repeatedModifier(operator) {
		operator.repeat = -1;
		operator.optional = false;
	},
	"*": function wildcardModifier(operator) {
		operator.repeat = -1;
		operator.optional = true;
	}
};

module.exports = function applyModifier(operator, token) {
	var modifierFn = modifiers[token];
	if(modifierFn) { 
		modifierFn(operator);
		return true;
	} 
	return false;
}
