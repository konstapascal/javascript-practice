// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
	let duplicates = {};

	text
		.toLowerCase()
		.split('')
		.forEach(char =>
			!duplicates.hasOwnProperty(char) ? (duplicates[char] = 0) : (duplicates[char] = 1)
		);

	const sum = Object.values(duplicates).reduce((sum, el) => (el === 1 ? (sum += 1) : sum), 0);

	return sum;
}

console.log(duplicateCount('aaabbcde') === 2); // true
