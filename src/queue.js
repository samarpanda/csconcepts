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
	}
};
