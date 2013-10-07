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
	* partition
	*/
	function partition(items, left, right){
		var pivot = items[Math.floor((right + left)/2)],
		i = left,
		j = right;

		while( i<=j ){

			while(items[i] < pivot){
				i++;
			}

			while(items[j] > pivot){
				j--;
			}

			if(i<=j){
				swap(items, i, j);
				i++;
				j--;
			}
		}
		return i;
	}

	/**
	* Quicksort
	*/
	function quickSort(items, left, right){
		var index;
		if(items.length > 1) {
			
			left = typeof left != "number" ? 0 : left;
			right = typeof right != "number" ? items.length-1 : right;

			index = partition(items, left, right);
			
			if(left < index -1){
				quickSort(items, left, index-1);
			}

			if(index < right){
				quickSort(items, index, right);
			}
		}
		return items;
	}

	// Call to quick sort items
	var result = quickSort([3, 5, 2, 7, 8]);
  console.log(result);
})();