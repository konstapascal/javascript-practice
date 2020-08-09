// FUNCTION DECLARATION
// function IS hoisted

function function1() {}

// FUNCTION EXPRESSION
// variable hoisted but NOT initialized

const function3 = function function3() {
	console.log('function3');
}; // named function expression

const function2 = function () {}; // anon function expresssion

const function4 = () => {}; // same as above, ES6 syntax
