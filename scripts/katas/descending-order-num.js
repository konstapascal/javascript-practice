// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Input: 42145 Output: 54421
// Input: 145263 Output: 654321

function descendingOrder(n) {
	const strArr = String(n).split('');
	const numArr = strArr.map(n => Number(n));
	const descStr = numArr.sort((n1, n2) => n2 - n1).join('');

	return Number(descStr);
}
