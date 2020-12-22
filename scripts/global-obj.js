// 1. We create an object, 'new' runs and calls the constructor of the Array/Object/Map/Set/Date/Math (global/native JS object).
// 2. This new object instance gets a property __proto__ pointing to the prototype of the object it has been created from.
// 3. This way instance object inherits all methods and properties from up the prototype chain.

// Prototype is an special property of a function/class/super used to create the prototype chain in new instances of said object.
// __proto__ is a property present in ALL objects pointing up the prototype chain.
// Object is the top of the chain in JS, Object's __proto__ is null.

// Global objects (Object, Array, Date, Set, Map...)
obj1 = new Object({});
arr1 = new Array([]);
date1 = new Date();
set1 = new Set([1, 2]);
map1 = new Map();

// Instance prototypes are pointing to object prototypes

console.log(obj1.__proto__ === Object.prototype); // true
console.log(arr1.__proto__ === Array.prototype); // true
console.log(date1.__proto__ === Date.prototype); // true

console.log(obj1);
console.log(arr1);
console.log(Date.prototype);
