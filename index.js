

/**
 * Return a copy of an array without the falsy values.
 * 
 * @param {Array} arr 
 * @return {Array}
 * @api public
 */

module.exports = function(arr) {
	var cp = [];
	for(var i = 0, l = arr.length; i < l; i++){
		if(arr[i]) cp.push(arr[i]);
	}
	return cp;
};