var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

// PURE PROTOTYPAL INHERITANCE
// This is a newer thing in modern browsers/environments
// Olderprojects might not have this
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
john.greeting = john.greet();
console.log(john);

//Object.Create POLYFILL - USE THIS WHENEVER USING Object.create();
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1 ) {
            throw new Error('Object.create implementation only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
} 




