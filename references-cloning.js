// Arrays are object type and use reference values
const arr1 = ['elm1', 'elm2', 'elm3'];
const arr2 = arr1;

console.log(arr1, arr2);

arr1.push(2);

console.log(arr1, arr2);

// Primitive types will not
let num1 = 1;
const num2 = num1;

console.log(num1, num2);

num1 = 2;

console.log(num1, num2);

// Objects

const obj1 = {
	name: 'Konsta',
	age: 20,
	hobbies: [1, 2, 3],
	function: () => {
		console.log('Hello');
	},
};

// Both pointing to same reference
const obj2 = obj1;

// "Shallow copy" meaning objects within the object are still pointing same reference
const obj3 = { ...obj1 };

// "Deep clone"
// NOTE: stringify() will remove any functions
const obj4 = JSON.parse(JSON.stringify(obj1));

obj1.name = 'Changed';
obj1.hobbies.push('pushed');

console.log(obj1, obj2, obj3, obj4);
