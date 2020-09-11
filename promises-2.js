console.log('start');

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

Promise.all(promisesArray)
	.then(results => console.log(results))
	.catch(err => console.log(err));

console.log('end');
