console.log('start');

// promises get put in the microtask queue (job queue), higher priority

const p1 = new Promise((resolve, reject) => {
	resolve('p1');
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('p2');
	}, 0);
});

// async functions like timeout, interval, event handlers get put in webapi and the macrotask queue (task queue) thereafter

setTimeout(() => {
	console.log('t1');
}, 0);

p2.then(msg => console.log(msg)).catch(err => console.log(err));
p1.then(msg => console.log(msg)).catch(err => console.log(err));

console.log('end');
