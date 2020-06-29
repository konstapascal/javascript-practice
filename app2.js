import _ from './node_modules/lodash';

// Arrays are object type and use reference values
arr1 = ['elm1', 'elm2', 'elm3'];
arr2 = arr1;

console.log(arr1, arr2);

arr1.push(2);

console.log(arr1, arr2);

// Primitive types will not
num1 = 1;
num2 = num1;

console.log(num1, num2);

num1 = 2;

console.log(num1, num2);

// Objects

obj1 = {
	name: 'Konsta',
	age: 20,
	hobbies: [1, 2, 3],
	function: () => {
		console.log('Hello');
	},
};

// Both pointing to same reference
obj2 = obj1;

// "Shallow copy" meaning objects within the object are still pointing same reference
obj3 = { ...obj1 };

// "Deep clone"
// NOTE: stringify() will remove any functions
obj4 = JSON.parse(JSON.stringify(obj1));

obj1.name = 'Changed';
obj1.hobbies.push('pushed');

console.log(obj1, obj2, obj3, obj4);
