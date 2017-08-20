function b() {
	console.log(myVar);  // PREDICTION: will log 2;  I WAS WRONG!  It logs 1, the value at the global level
}

/*
It logs 1 because it references the 'outer environment' ( the thing all execution contexts is created with).  The kicker is that
the outer environment is defined by the lexical scope.  Because both functions are defined in the global object, the global 
object serves as the outer environment.  

If b had been defined WITHIN function a, it would log 2.  Lets try it now.
*/

function a() {
	var myVar = 2;
	b();

	// function b () {
	// 	console.log(myVar); // logs 2 because the 'outer environment' is the environment of the lexical scope (function a)
	// }
}

var myVar = 1;
a();