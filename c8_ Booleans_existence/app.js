var a;

// a goes out to the internet and finds something
a = 'hi';
if (a) { 
/* If using a single value between the parens of an 'if' statement, the JS compiler will try to convert to a boolean
 Note that the below examples coerce to 'false':
   undefined
   null
   '' 
   0
 ** the problem is that sometimes we will want 0 to represent a real value that is present (and therefore be truthy)
 */

  console.log('Something is there: ' + a);
}


// example of 'if' statement to use if there's a chance the variable is 0;

if (a || a === 0) { // The reason this works is that, due to === having a higher precedence than ||, (a === 0) with be evaluated first.
	//  It will evaluate to 'true' and then the (a || true) expression will evaluate to (false || true) aka true
	console.log('something is there');
}