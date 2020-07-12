f();

function f() {
	console.log('f');
}

let a = 'var a';

console.log(a);
console.log(f);

const arr = [];
console.log(arr);

const fun1 = new Function();

console.log(fun1);
console.dir(fun1.__proto__);

console.log('test');
