// sync code

console.log('start');
alert('alert');
console.log('finish');

// async code

// callbacks

function getUser(arg, callback) {
	setTimeout(() => {
		console.log('function1: getUser');
		callback(arg);
	}, 2000);
}

function getUserDetails(arg, callback) {
	setTimeout(() => {
		console.log('function2: getUserDetails');
		callback(arg);
	}, 2000);
}

function getUserName(arg, callback) {
	setTimeout(() => {
		console.log('function3: getUserName');
		callback(arg);
	}, 2000);
}

getUser('arg1 passed in', function (string) {
	console.log(string);
	getUserDetails('arg2 passed in', function (string) {
		console.log(string);
		getUserName('arg3 passed in', function (string) {
			console.log(string);
		});
	});
});
