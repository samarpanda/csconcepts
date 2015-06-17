/**
 * LIFO
 */
function Stack(){
	this.cards = new Array();
}

Stack.prototype = {
	pushData: function(item){
		this.cards.push(item);
	},
	popData: function(){
		return this.cards.pop();
	},
	showStackData: function(){
		return this.cards;
	},
	isEmpty: function() {
		return this.size > 0 ? false : true;
	},
	size: function() {
		return this.cards.length;
	}
}