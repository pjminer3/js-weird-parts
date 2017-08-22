function greet() {
	console.log('hi');
}

console.log(greet);

greet.language = 'english';

console.log(greet); // logs the text of the function
console.log(greet.language); // logs 'enlgish'
