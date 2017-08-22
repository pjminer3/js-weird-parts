// by value (primitive types)

var a = 3;
var b;

b = a; // at this point a = 3, and b = (a copy of/a separate) 3
a = 2; // now a = 2, but b = 3 (because they equaled different 3s in the first place)

console.log(a); // logs 2
console.log(b); // logs 3


// by reference (all objects - including functions)

var c = {greeting: 'hi'};
var d;

d = c; // at this point both c and d point to the same exact object in memory: {greeting: 'hi'}

c.greeting = 'hello'; // mutates the object that both varabiles c and d point to {greeting: 'hello'}
console.log(c);
console.log(d);


// by reference (even as parameters)
// passing an object to a function passes the object by reference (it changes the obj thus changing anything that references it)
function changeGreeting(obj) {
	obj.greeting = 'Hola';
}

changeGreeting(d);

console.log(c); // logs {greeting: 'Hola'}
console.log(d); // logs {greeting: 'Hola'}


// equals operator (=) sets up new memory space
c = {greeting: 'Howdy'};  // object literal syntax creates a new object and points variable c to it
// c and d are no longer pointing to the same memory space, and equal different objects
console.log(c);
console.log(d);