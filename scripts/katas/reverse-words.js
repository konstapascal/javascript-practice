// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
	let words = str.split(' ');
	let reversedWords = words.map(word => word.split('').reverse().join(''));

	return reversedWords.join(' ');
}

console.log(reverseWords('Hello World!'));
