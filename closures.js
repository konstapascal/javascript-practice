const outer = function () {
	let count = 0;

	return function inner() {
		count += 1;
		return count;
	};
};

// a closure is created by running outer and inner will keep the access to count
let a = outer();
let b = outer();
let c = b;

// a and b still have access to count despite only the inner being called whenever they run
// a and b also have different instances of count, b and c share the reference

for (let i = 0; i < 2; i++) {
	console.log(a());
}

console.log('---------------');

for (let i = 0; i < 4; i++) {
	console.log(b());
}

console.log('---------------');

for (let i = 0; i < 4; i++) {
	console.log(c());
}
