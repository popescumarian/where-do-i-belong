# where do I belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.<br />
The returned value should be a number.<br />
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).<br />
<br />
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.<br />
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.<br />
getIndexToIns([40, 60], 50) should return 1.<br />
getIndexToIns([3, 10, 5], 3) should return 0.<br />
getIndexToIns([5, 3, 20, 3], 5) should return 2.<br />
getIndexToIns([2, 20, 10], 19) should return 2.<br />
getIndexToIns([2, 5, 10], 15) should return 3.<br />
