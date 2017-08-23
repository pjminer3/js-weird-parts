function Person(firstname, lastname) {
    // creates new empty object 'this'
    this.firstname = firstname;
    this.lastname = lastname;
    // returns new object (as long as nothing else is explicity returned)
}

var john = new Person('John', 'Doe');
// 'new' is actually an operator.  When the js parser sees it in automatically
// creates a new object.  Then inside the code, 'this' always points to the new object
// that the 'new' operator created.

console.log(john);

var jane = new Person('Jane', 'Doe');

console.log(jane);