// 1. We create an object, 'new' runs and calls the constructor of Array/Object object.
// 2. This new instance gets a property __proto__ pointing to the prototype of the object it has been created from.
// 3. This way instance object inherits all methods and properties from up the prototype chain.

// Prototype is an special property of a function/class/super used to create the prototype chain
// __proto__ is a property present in ALL objects pointing up the chain

obj1 = {};
arr1 = [];

// Instance prototypes are pointing to Object prototypes
console.log(obj1.__proto__ === Object.prototype); // true
console.log(arr1.__proto__ === Array.prototype); // true

console.log(obj1);
console.log(arr1);
