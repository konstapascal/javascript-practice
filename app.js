const arr1 = [1, 2, 3, 4, 5, 'elem1', 'elem2'];

const obj1 = {
	prop1: 'value1',
	prop2: 'value2',
	arr1: [1, 2, 3, 'string1', 'str2'],
	function1: (arg) => console.log(`Hello ${arg}`),
};

const obj2 = {
	prop1: 'value1',
	prop2: 'value2',
	arr1: [1, 2, 3, 'string1', 'str2'],
	function1: (arg) => console.log(`Hello ${arg}`),
};

console.log(arr1);
console.log(obj1);

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

const stringifiedObj1 = JSON.stringify(obj1);

console.log(stringifiedObj1);
console.log(JSON.parse(stringifiedObj1));
