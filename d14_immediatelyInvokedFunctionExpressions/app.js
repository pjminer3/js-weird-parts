// function statement
function greet(name) {
	console.log(`Hello ${name}`);
}
greet('Patrick Miner');

//using a function expression
var greetFunc = function(name) { // notice the variable declaration, then saving the function as the variable
	console.log(`Hello ${name}`);
}
greetFunc('Patrick Miner');

// Using an Immediately Invoked Function Expression (IIFE) pronounced 'Iffy'
var greetIIFE = function(name) {
	return `Hello ${name}`;
}('Forbes Miner'); // notice the parens invoke the function instantly
// the result/return value of the IIFE is saved with the variable, not the function object itself
console.log(greetIIFE); // will log 'Hello Forbes Miner'

3; // valid line of code; simply runs it
'Hello world'; // valid line of code, simply runs int
// function(name) { console.log(name);} // not a valid line of code! Throws an error! Things its a function statement when we want a function expression!

//To create a valid anonymous function expression you need to wrap the entire function in parens
//Anything between parens is interpretted as an expression
(function(name) {
	console.log(`Hi ${name}`);
})

(function(name) {
	var greet = 'hello';
	console.log(`${greet} ${name}`)
}('Mr. Poopy Butthole')) // notice we invoked the anonymous function expression immediately (IIFE styyle)
// This is the most common/usual IIFE style function. It is a very powerful tool that is used frequently in libraries