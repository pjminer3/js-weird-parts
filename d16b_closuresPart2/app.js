function buildFunctions() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(function() {
			console.log(i);
		});
	}

	return arr;
}


fs = buildFunctions();

fs[0](); // expect 0, logged 3
fs[1](); // expected 1, logged 3
fs[2](); // expected 2, logged 3
// The 3 lines above all log 3.  The reason for this is that when the function fs[0] - fs[2] is invoked it looks back inside its 
// lexical scope and finds i.  At that point, i = 3 (because that's what it had to equal to make the loop stop running)



// How to make it log 0, 1, and 2;
// AND A WAY TO USE CLOSURES TO OUR ADVANTAGE!
function buildFunctions2() {
	var arr = [];

	for (var i = 0; i < 3; i++) {
		// let j = i; // 'let' is scoped to the code block of the for-loop (but this only works for ES6)
		// // everytime the for-loop runs j will be a new object in memory
		arr.push(function(j) {
			// this is how to do it with ES5 (creating a new execution context for each function with an IIFE)
			return function() {
				console.log(j);
			}
			// The outer function (with parameter) is immidiately invoked (thus creating an execution context and pushing the functions return value into the arrray)
			// The return value is a function that, when invoked, logs j.  to find 'j' it will reach back into the execution context
			// it was created in, and will show i at the time
		}(i));
	}

	return arr;
}

fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

