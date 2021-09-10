console.log('start 1');

(async function p4() {
	console.log('start 2');

	const p1 = new Promise(resolve => {
		resolve('promise 1');
	});

	function p2() {
		return new Promise((res, err) => {
			res('promise 2');
		});
	}

	function p3() {
		return Promise.resolve('promise 3');
	}

	const promisesArray = [p1, p2(), p3()];
	const all = await Promise.all(promisesArray);

	all.forEach(promise => console.log(promise));

	console.log('end 2');
})();

console.log('end 1');
