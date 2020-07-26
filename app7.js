// sync code

console.log('start');

// async code

// callbacks

function getUser(arg, callback) {
	setTimeout(() => {
		console.log('function1: getUser');
		// callback(arg);
	}, 2222);
}

function getUserDetails(arg, callback) {
	setTimeout(() => {
		console.log('function2: getUserDetails');
		// callback(arg);
	}, 3333);
}

function getUserName(arg, callback) {
	setTimeout(() => {
		console.log('function3: getUserName');
		// callback(arg);
	}, 4444);
}

const p1 = new Promise((resolve) => resolve('promise1'));

// getUser('arg1 passed in', function (string) {
// 	console.log(string);
// 	getUserDetails('arg2 passed in', function (string) {
// 		console.log(string);
// 		getUserName('arg3 passed in', function (string) {
// 			console.log(string);
// 		});
// 	});
// });

getUser();
getUserDetails();
getUserName();

p1.then((string) => console.log(string)).then(() => console.log('second log'));

console.log('finish');
