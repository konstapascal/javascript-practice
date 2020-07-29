// iife stored inside value, requires a return of an object
// only stuff declared inside return are accessible

const APP1 = (function () {
	const var1 = 'var1';

	function function1() {
		console.log('function1 log');
	}

	const function2 = () => console.log('function2 log');

	const function3 = function () {
		console.log('function3 log');
	};

	return {
		var1,
		var2: 'var2',
		function1,
		function2,
		function3,
	};
})();

const app2Function = () => {
	const var1 = 'var1';

	function function1() {
		console.log('function1 log');
	}

	const function2 = () => console.log('function2 log');

	const function3 = function () {
		console.log('function3 log');
	};

	return {
		var1,
		var2: 'var2',
		function1,
		function2,
		function3,
	};
};

const APP2 = app2Function();

// console logs

console.log('Output from APP1:');
console.log(APP1.var1, APP1.var2);
console.log(APP1.function1(), APP1.function2(), APP1.function3());

console.log('-----------------------------');

console.log('Output from APP2:');
console.log(APP2.var1, APP2.var2);
console.log(APP2.function1(), APP2.function2(), APP2.function3());
