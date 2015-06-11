var Graph = (function(undefined){

	/**
	* Extract Keys
	*/
	var extractKeys = function(obj){
		var keys = [], key;
		for(key in obj){
			Object.prototype.hasOwnProperty.call(obj, key) && keys.push(key);
		}
		return keys;
	};


	var Graph = function(map){
		this.map = map;
	};

	Graph.extractKeys = extractKeys;

	return Graph;
})();