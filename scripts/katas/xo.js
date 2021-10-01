// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
	if (!str.includes('x') && !str.includes('o')) return true;

	let xoCount = { x: 0, o: 0 };

	str.toLowerCase()
		.split('')
		.forEach(char => {
			if (char === 'x') xoCount.x += 1;
			if (char === 'o') xoCount.o += 1;
		});

	console.log(xoCount);

	return xoCount.x === xoCount.o;
}
