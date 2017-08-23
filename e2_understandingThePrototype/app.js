var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var patrick = {
    firstname: 'Patrick',
    lastname: 'Miner'
}

//Don't do this EVER! For demo purposes only
patrick.__proto__ = person; // sets 'person' as Patrick's prototype
console.log(patrick.getFullName()); // print's 'Patrick Miner'
console.log(patrick.firstname); // logs 'Patrick' (not 'Default')

var forbes = {
    firstname: 'Forbes'
}

forbes.__proto__ = person;

console.log(forbes.getFullName()); // logs 'Forbes Default'


// NEXT LECTURE

var a = {};
var b = function(){};
var c = [];