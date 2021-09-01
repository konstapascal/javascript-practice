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

/* 
script output:

start
inside prom 1
end
prom 1 then
inside prom 2
prom 2 then

execution order explanation:
1. global execution frame gets pushed onto the call stack
2. log gets pushed to the stack, executed and popped off
3. the 2 promises are instantiated, their executor function

*/
