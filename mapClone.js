Array.prototype.mapClone = mapClone;
Object.prototype.mapClone = mapClone;

function mapClone(callback) {
	const temp = [];

	// case for arrays
	if (Array.isArray(this)) {
		for (i = 0; i < this.length; i++) {
			temp.push(callback(this[i], i, this));
		}

		// this.forEach((el, index) => {
		// 	temp.push(callback(el, index, this));
		// });
	}

	return temp;
}

const arr = [1, 2, 3, 4, 5].mapClone(val => val * 10);

console.log(arr);
