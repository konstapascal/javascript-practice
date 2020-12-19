console.log('start');

// async code

// callbacks

const condition = false;

function getUser(arg, callback) {
	setTimeout(() => {
		if (!condition) {
			console.log('function1: getUser error');
			callback(null, new Error('Error was thrown!'));
		} else {
			console.log('function1: getUser');
			callback(arg);
		}
	}, 555);
}

function getUser2(arg, callback, error) {
	setTimeout(() => {
		if (!condition) {
			console.log('function1: getUser error');
			error(new Error('Error was thrown!'));
		} else {
			console.log('function1: getUser');
			callback(arg);
		}
	}, 555);
}

function getUserDetails(arg, callback) {
	setTimeout(() => {
		console.log('function2: getUserDetails');
		callback(arg);
	}, 555);
}

function getUserName(arg, callback) {
	setTimeout(() => {
		console.log('function3: getUserName');
		callback(arg);
	}, 555);
}

// callback hell, nesting callbacks when chaining async functions (solved by promises)

getUser('arg1 passed in', function (err, string) {
	if (err) return console.log(err);
	console.log(string);
	getUserDetails('arg2 passed in', function (string) {
		console.log(string);
		getUserName('arg3 passed in', function (string) {
			console.log(string);
			getUserName('arg4 passed in', function (string) {
				console.log(string);
				getUserName('arg5 passed in', function (string) {
					console.log(string);
					getUserName('arg6 passed in', function (string) {
						console.log(string);
					});
				});
			});
		});
	});
});

console.log('end');
