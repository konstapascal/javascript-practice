f();

function f() {
	console.log('f');
}

let a = 'var a';

// console.log(a);
// console.log(f);

const arr = Array(2, 3);
const arr2 = Object.create(Array);

console.log(arr);
console.log(arr.__proto__);
console.log(arr.prototype);

console.log(Array);

const fun1 = new Function();

console.log(f);
