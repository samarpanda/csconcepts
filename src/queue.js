/**
 * FIFO
 */
/**
 * FIFO
 */
function Queue(){
	this.cards = new Array();
}

Queue.prototype = {
	enqueue: function(item){
		this.cards.push(item);
	},
	dequeue: function(){
		return this.cards.shift();
	},
	showQueuedData: function(){
		return this.cards;
	},
	isEmpty: function() {
		return this.size > 0 ? false : true;
	},
	size: function() {
		return this.cards.length;
	}
}