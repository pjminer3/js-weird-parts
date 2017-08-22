function sayHiLater() {

	var greeting = 'Hi!';

	setTimeout(function(){
		console.log(greeting);
	}, 3000)

}

sayHiLater();

// The above is an example of a closure.  The code 'sayHiLater()' run instantly but then after 3 seconds it runs the interior function.
// the inside function requires the greeting variable which can only be found by going up the lexical scope (inside the scope) of the
// function that completely closed out.


function tellMeWhenDone(callback) {
	var a = 1000; // some work
	var b = 2000; // some work

	callback() // calling the function, it runs the program I give
}


tellMeWhenDone(function() {
	console.log('I am done!');
});

tellMeWhenDone(function() {
	alert('I am done!');
});