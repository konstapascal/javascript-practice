// Given a list of integers, create a function that returns the highest product between three of those numbers.
// For example, given the list [1, 10, 2, 6, 5, 3] the highest product would be 10 * 6 * 5 = 300

function highestProduct(arr) {
	const sortedArr = [...arr].sort((firstEl, secondEl) => firstEl - secondEl); // [1, 2, 3, 5, 6, 10]
	const newArr = sortedArr.splice(sortedArr.length - 3); // [5, 6, 10]

	// multiplying all the new array elements
	const product = newArr.reduce((acc, currEl) => acc * currEl);

	return product;
}

const givenArr = [1, 10, 2, 6, 5, 3];

console.log(highestProduct(givenArr)); // logs 300
