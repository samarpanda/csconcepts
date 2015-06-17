/**
 * FIFO
 */
var queue = [];
queue.prototype = {
	enqueue: function(item) {
		queue.push(item);
	},
	dequeue: function() {
		return queue.shift();
	},
	isEmpty: function() {
		return queue.size > 0 ? false : true;
	},
	size: function() {
		return queue.length;
	}
};
