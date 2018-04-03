function getIndexToIns(arr, num) {	

	var sorted = arr.sort(function(a, b) {
		return a - b;
	});

	var position = sorted.findIndex(function(element) {
			return (element == num) || (element > num);
		});

	if( position < 0) { // not found in sorted or no element smaller than num
		// then position is at the end of the array
		position = sorted.length;
	}

	return position;
}

console.log(getIndexToIns([2, 5, 10], 15));

/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.

 */