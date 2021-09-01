// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		newStr = str[i] + newStr;
	}

	return newStr;
}

console.log(reverseWords('Hello World!'));
