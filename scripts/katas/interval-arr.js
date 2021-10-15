// You need to return a new array with only those elements of array that fall in the interval from start to end (both inclusive).
// In tests you will be given only integers.

function arrayInterval(array, start, end) {
	return [...array].filter(num => num >= start && num <= end);
}

console.log(arrayInterval([1, 3, 5, 6, 8, 2, 4, 3], 2, 4));
