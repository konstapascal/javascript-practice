// You are provided a 2 dimensional array. You must test if each value within the sub arrays is larger than the given test value n.
// Return true if so, false if not.

function everyEvery(a, n) {
	return a.every(subArr => subArr.every(num => num > n));
}

console.log(
	everyEvery(
		[
			[66, 101],
			[99, 88],
			[77, 10]
		],
		100
	) === false
);
