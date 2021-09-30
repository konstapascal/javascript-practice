function findShort(s) {
	const arr = s.split(' ');
	const shortest = arr.reduce((shortest, curr) =>
		curr.length < shortest.length ? curr : shortest
	);

	return shortest.length;
}

console.log(findShort('Hello world, this is a nice day!'));
