const prom1 = new Promise(function (resolve, reject) {
	if (true) {
		resolve('resolved');
	} else {
		reject('rejected');
	}
});

prom1.then(console.log('success')).catch(console.log('fail'));
