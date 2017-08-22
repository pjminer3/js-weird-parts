var person = {
    firstname: 'Patrick',
    lastname: 'Miner',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---------------');
}

var logPersonName = logName.bind(person);
logPersonName('English Bind', 'Spanish Bind');
// 'bind' is a method of every function.  It creates a copy of the function only
// with the argument given bound to the function as the 'this' object
//... the above will log ""'Logged: ' + person.getFullName()"

logName.call(person, 'English Call', 'Spanish Call');
// 'call' calls the original function (it doesn't create a new one like 'bind')
// the first parameter is the object you want to use for 'this', and the following 
// arguments are arguments you want to pass into the function you're calling

logName.apply(person, ['English Apply', 'Spanish Apply']);
// 'apply' is the same thing as call except for the way you enter the parameters.
// the first parameter is the object you want 'this' to point to.  Afterwards
// the parameters to pass into the function will be provided in an array



//FUNCTION BORROWING
// borrowing a method from another object to be applied to a different one
var person2 = {
    firstname: 'Forbes',
    lastname: 'Miner'
};

console.log(person.getFullName.apply(person2));
// borrows the method of 'person' to apply it to 'person2'





// FUNCTION CURRYING
function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
// The above line of code does not change the object 'this' points to, but it
// does make a copy of the multiply function with 2 as a permanent argument that 
// is passed to parameter 'a'

console.log(multiplyByTwo(4));

