// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const isOdd = num => (num % 2 != 0 ? true : false);

function findOdd(arr) {
	if (arr.length === 1) return arr[0];

	let record = {};

	arr.forEach(num => (!record.hasOwnProperty(num) ? (record[num] = 1) : record[num]++));

	for (let [key, val] of Object.entries(record)) {
		if (isOdd(val)) return Number(key);
	}
}

console.log(findOdd([0, 1, 0, 1, 0]));
