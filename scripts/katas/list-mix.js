// list_mix() will take an input in the form of a list of numbers, and output the max, min, med, and mean in that order!

// max is the biggest number in the list.
// min is the smallest number in the list.
// med is the number in the middle when the list is sorted.
// mean is all the elements of the list summed together divided by the length of the list, or the average.
// Note: The list will only have valid types, so no need for error checking, and if the list has an even amount of numbers, return the average of the two numbers in the middle for the median.

// All floats should be rounded to two decimal places.

function listMix(arr) {
	function median(arr) {
		const mid = Math.floor(arr.length / 2);
		const sortedArr = arr.sort((a, b) => a - b);

		return arr.length % 2 !== 0
			? sortedArr[mid]
			: Number(((sortedArr[mid - 1] + sortedArr[mid]) / 2).toFixed(2));
	}

	function average(arr) {
		return Number((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
	}

	return [Math.max(...arr), Math.min(...arr), median(arr), average(arr)];
}

console.log([1, 5, 4, 3, 2].join(', ') + ' => ', listMix([1, 5, 4, 3, 2]));
console.log([-12, 2, 1.2, 20].join(', ') + ' => ', listMix([-12, 2, 1.2, 20]));
console.log([1].join(', ') + ' => ', listMix([1]));
