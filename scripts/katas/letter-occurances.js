// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
	let count = {};

	[...string].forEach(letter =>
		!count.hasOwnProperty(letter) ? (count[letter] = 1) : count[letter]++
	);

	return count;
}

function countReduce(string) {
	return [...string].reduce((obj, letter) => {
		!obj.hasOwnProperty(letter) ? (obj[letter] = 1) : obj[letter]++;
		return obj;
	}, {});
}

console.log(count('abcdab').toString() === countReduce('abcdab').toString()); // true
