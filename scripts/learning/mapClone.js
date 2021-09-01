Array.prototype.mapClone = mapClone;
Object.prototype.mapClone = mapClone;

function mapClone(callback) {
	const temp = [];
	console.log(arguments);
	console.log(this);

	// case for arrays
	if (Array.isArray(this)) {
		for (i = 0; i < this.length; i++) {
			temp.push(callback(this[i], i, this));
		}

		// this.forEach((el, index) => {
		// 	temp.push(callback(el, index, this));
		// });
	} else {
		throw new Error('Not an array!');
	}

	return temp;
}

const arr = [1, 2, 3, 4, 5].mapClone((value, index, array) => {
	return `index ${index} - value: ${value}`;
});

console.log(arr);
