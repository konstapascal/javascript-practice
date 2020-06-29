arr1 = [1, 2, 3];
arr2 = [...arr1]; // Or use slice() to create a copy

function pushToArray(number, array) {
	array.push(number);
}

console.log('Before: ', arr1, arr2);
pushToArray(5, arr1);
console.log('After: ', arr1, arr2);
