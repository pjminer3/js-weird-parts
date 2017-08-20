

var myVar = 1;
console.log(myVar); // logs 1
a();
console.log(myVar) // logs 1

function a() {
	var myVar = 2;
	console.log(myVar); // logs 2
	b();
}

function b() {
	var myVar;
	console.log(myVar);  // logs undefined
}



// PERSONAL QUESTION

var myVar = 1;
console.log(myVar); // logs 1
a();
console.log(myVar) // logs 'New Value'

function a() {
	var myVar = 2;
	console.log(myVar); // logs 2
	b();
	console.log(myVar); // logs 2
}

function b() {
	myVar = 'New Value';  // it seems that this changes the gloval variable myVar (window.myVar), instead of 
	                      // (what i figured it might change) the myVar of the previous execution context 
}