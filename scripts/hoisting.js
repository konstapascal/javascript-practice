const log = console.log;

// function

hoistedFunction();

function hoistedFunction() {
	log('I am a function!');
}

// var

log(variable_var);

var variable_var = 'I am a var!';

log(variable_var);

// let

log(variable_let);

let variable_let = 'I am a let!';

log(variable_let);

// const
