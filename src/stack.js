/**
 * LIFO
 */
var stack = [];

stack.prototype = {
	pushdata: function(item) {
		stack.push(item);
	},
	popdata: function() {
		return stack.pop();
	},
	isEmpty: function() {
		return stack.size > 0 ? false : true;
	},
	size: function() {
		return stack.length;
	}
};