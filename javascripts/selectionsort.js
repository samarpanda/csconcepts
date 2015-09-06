(function(){

	/**
	 * Swap items.
	 */
	function swap(items, firstIndex, secoundIndex){
		var temp = items[firstIndex];
		items[firstIndex] = items[secoundIndex];
		items[secoundIndex] = temp;
	}

	/**
	 * Index of minimum value from startIndex
	 */
	function indexOfMinimum(array, startIndex){
		var minValue = array[startIndex];
		var minIndex = startIndex;

		for(var i = minIndex + 1; i < array.length; i++){
			if(minValue > array[i]){
				minIndex = i;
				minValue = array[i];
			}
		}

		return minIndex;
	}

	/**
	 * Selection sort of an array
	 */
	function selectionSort(array){
		var minIndex = 0;
		for(var i = 0; i<array.length; i++){
			minIndex = indexOfMinimum(array, i);
			swap(array, i, minIndex);
		}
	}
})();