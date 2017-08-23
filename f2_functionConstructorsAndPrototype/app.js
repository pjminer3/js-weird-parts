function Person(firstname, lastname) {
 
    console.log(this); // logs new empty object
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe'); // sets prototype of this object to Person.prototype
console.log(john);
// when using 'new', sets the prototype of the new object to the constructor's prototype property

var jane = new Person('Jane', 'Doe');
console.log(jane);

// console.log(jane.getFormalFullName());
// the above code throws an error because the method prototype.getFormalFullName hasn't been defined yet
Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(jane.getFormalFullName());

// From an efficiency standpoint it is better to put shared method
// in the prototype object, not in the object itself

// Any function that is meant to be a function constructor should be 
// titled with a capital first-letter