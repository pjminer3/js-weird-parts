greet();  // logs 'hi'

// this is a function statement (it doesn't result in a value)
// When code is executed the computer says 'oh, there's a function there' (but that's it)
function greet() {
  console.log('hi');
}

//anonymousGreet()  // this will not run, because although the variable exists, it is still equal to 'undefined' not the function 

// this is a function expression 
// this is technically an anonymous function (a function without a name) - it's ok because it is referenced by its variable name
// When code is executed the computer says 'a variable object that points to this anonymous function. I need to create an object'
var anonymousGreet = function() {
	console.log('hi');
}

anonymousGreet(); // logs greet

function log(a) {
	a();  //the parens say 'Run the 'code' portion of your object'.  If object doesn't have function code body, it throws an error
}

log(function() {
  console.log('The internal function is being called by the function \'log\'')
});

log('a');