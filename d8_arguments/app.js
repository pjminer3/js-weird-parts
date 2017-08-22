function greet(firstname, lastname, language) {
    // NOTE: in the next version of JS we will be able to add default arguments in the parameter list itself but for now we do the below
    language = language || 'english' // this line of code creates a default language value of 'english' if no argument is given
  
    if (arguments.length === 0) {
    	console.log('Missing all Parameters!');
    	console.log('-----------');
    	return;
    } else if (arguments.length === 1) {
    	console.log('Missing 2 Parameters!');
    } else if (arguments.length === 2) {
    	console.log('Missing 1 Parameter!');
    }

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);
	console.log('----------')
}

greet(); // this works in JS but would throw an error in other languages.  In JS it would log 'undefined' 3 times
greet('John'); // logs John \n undefined \n undefined
greet('John', 'Doe');
greet('John', 'Doe', 'en');