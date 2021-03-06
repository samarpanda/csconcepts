(function(){
	
	function swap(items, firstIndex, secondIndex){
		var temp = items[firstIndex];
		items[firstIndex] = items[secondIndex];
		items[secondIndex] = temp;
	}

	/**
	* Bubble sort
	*/
	function bubbleSort(items){
		var len = items.length,
			i, j, stop;

		for(i=0; i<len; i++){
			for(j=0, stop=len-i; j<stop; j++){
				if(items[j] > items[j+1])
					swap(items, j, j+1);
			}
		}
		return items;
	}

})();