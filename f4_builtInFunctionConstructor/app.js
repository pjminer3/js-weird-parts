var a = new Number(3);
console.log(a);
// NOTE: it does not create a number.  It creates a new object ('new' always creates objects)

var b = new String('John');
console.log(b);
// Doesn't create an actual string, but acts like a string bc has String.prototype

console.log(b.slice());

//Built-In Function Constructors do not create primitives.  It looks like they do,
//but they actually create objects that CONTAIN primitives and gives them extra
//abilities

//PRACTICE
//This is helpful when we want to add features to all of a certain type of primitive.

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
} // this works because JS will automatically convert all string primitives to objects

console.log('Patrick'.isLengthGreaterThan(3)); // logs true;

Number.prototype.isPositive = function() {
    return this > 0;
} //Does not work because JS does not convert all number primitives to objects