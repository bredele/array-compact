

/**
 * Return a copy of an array without the falsy values.
 * 
 * @param {Array} arr 
 * @return {Array}
 * @api public
 */

module.exports = function(arr) {
	var cp = [];
	for(var i = arr.length; i--;) {
		if(arr[i]) cp.unshift(arr[i]);
	}
	return cp;
};