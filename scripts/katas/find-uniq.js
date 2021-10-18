function findUniq(arr) {
	let record = new Map();
	let unique;

	arr.forEach(el => (!record.has(el) ? record.set(el, 1) : record.set(el, record.get(el) + 1)));
	for ([key, value] of record.entries()) if (value === 1) unique = key;

	return unique;
}

console.log(findUniq([1, 1, 1, NaN, 1, 1]));
