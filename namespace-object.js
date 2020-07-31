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

const APP3 = {
	var1: 'var1',
	var2: 'var2',
	sayHello() {
		console.log('hello from app3 ' + this.var1);
	},
};

// console logs

const log = console.log;

log('Output from APP1:');
log(APP1.var1, APP1.var2);
log(APP1.function1(), APP1.function2(), APP1.function3());

log('-----------------------------');

log('Output from APP2:');
log(APP2.var1, APP2.var2);
log(APP2.function1(), APP2.function2(), APP2.function3());

log('-----------------------------');

log('Output from APP3:');
log(APP3.var1, APP3.var2);
log(APP3.sayHello());
