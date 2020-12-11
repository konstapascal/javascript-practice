console.log('start');

var prom1 = new Promise(resolve => {
	console.log('inside prom 1');
	resolve('resolved 1');
});

var prom2 = new Promise(resolve =>
	setTimeout(() => {
		console.log('inside prom 2');
		resolve('resolved 2');
	}, 0)
);

prom2.then(() => {
	console.log('prom 2 then');
});

prom1.then(() => {
	console.log('prom 1 then');
});

console.log('end');
