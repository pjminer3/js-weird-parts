var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;


// the below will log the property getFullName even though it is on the prototype 
for (var property in john) {
    console.log(property + ': ' + john[property]);
}

// to see properties that are truly only on the desired object...
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '1079 Elm St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    //firstname: 'jim',
    getFirstName: function() {
        return this.firstname;
    }
}

// the below extends the john object with the properties of jane and jim
_.extend(john, jane, jim);

console.log(john);


