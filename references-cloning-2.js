arr1 = [[1, 2], 3];

// Spread or slice will only make a shallow copy. That's ok if array is not multi dimensional
// Using lodash cloneDeep or JSON stringify and parse is best on arrays
arr2 = _.cloneDeep(arr1);

function pushToArray(number, array) {
	array[0].push(number);
}

console.log('Before: ' + arr1 + ' ' + arr2);
pushToArray(5, arr1);
console.log('After: ' + arr1 + ' ' + arr2);

// Same applies here, best would be either JSON methods (dangerous with functions) or lodash
obj1 = { arr1: [1, 2, 3], name: 'Konsta' };
obj2 = _.cloneDeep(obj1);

obj1.arr1 = null;

console.log('Should be different: ');
console.log(obj1, obj2);
