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
	}
};