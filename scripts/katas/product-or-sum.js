// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

function sumOrProduct(array, n) {
	const product = array
		.sort((el1, el2) => el1 - el2)
		.slice(0, n)
		.reduce((acc, curr) => acc * curr);

	const sum = array
		.sort((el1, el2) => el2 - el1)
		.slice(0, n)
		.reduce((acc, curr) => acc + curr);

	if (product === sum) return 'same';
	return product > sum ? 'product' : 'sum';
}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) === 'sum');

// sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
