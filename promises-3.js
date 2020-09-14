console.log('start');

let prom1 = new Promise(resolve => {
	console.log('inside prom 1');
	resolve('resolved 1');
});

let prom2 = new Promise(resolve =>
	setTimeout(() => {
		console.log('inside prom 2');
		resolve('resolved 2');
	}, 0)
);

prom2.then(() => {
	console.log('prom 2');
});

prom1.then(() => {
	console.log('prom 1');
});

console.log('end');
