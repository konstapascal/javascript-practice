console.log('start');

var prom1 = new Promise(resolve => {
	console.log('inside promise executor 1');
	resolve('inside then 1');
});

var prom2 = new Promise(resolve =>
	setTimeout(() => {
		console.log('inside promise executor 2');
		resolve('inside then 2');
	}, 0)
);

function prom3() {
	return new Promise(resolve =>
		setTimeout(() => {
			console.log('inside promise executor 3');
			resolve('inside then 3');
		}, 0)
	);
}

prom2.then(msg => console.log(msg));
prom1.then(msg => console.log(msg));
prom3().then(msg => console.log(msg));

console.log('end');

/* 

TODO
script output:
not written
TODO

execution order explanation:
1. global execution frame gets pushed onto the call stack
2. log gets pushed to the stack, executed and popped off
3. the 2 promises are instantiated, their executor function

*/
