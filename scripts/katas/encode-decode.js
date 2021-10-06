function encode(string) {
	const pattern = { a: 1, e: 2, i: 3, o: 4, u: 5 };

	return string
		.split('')
		.map(char => (pattern.hasOwnProperty(char) ? pattern[char] : char))
		.join('');
}

function decode(string) {
	const pattern = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

	return string
		.split('')
		.map(char => (pattern.hasOwnProperty(char) ? pattern[char] : char))
		.join('');
}

console.log(encode('hello'));
console.log(decode('h2ll4'));
