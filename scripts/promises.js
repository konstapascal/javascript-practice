console.log('start');

// promises get put in the microtask queue (job queue), higher priority

const p1 = new Promise(resolve => {
	console.log('promise 1 log');
	resolve('promise 1'); // micro q
});

const p2 = new Promise(resolve => {
	console.log('promise 2 log');
	setTimeout(() => {
		console.log('promise 2 log inside timeout');
		resolve('promise 2'); // task q 1
	}, 0);
});

// async functions like timeout, interval, event handlers get put in webapi and the macrotask queue (task queue) thereafter

setTimeout(() => {
	console.log('timeout 1'); // task q 2
}, 0);

p2.then(msg => console.log(msg));
p1.then(msg => console.log(msg));

console.log('end');

// execution output:

/*
start 
promise 1 log
promise 2 log
end
promise 1
promise 2 log inside timeout
promise 2
timeout 1
*/
