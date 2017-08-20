var person = new Object();

person['firstName'] = 'Patrick';
person['lastName'] = 'Miner';

var firstNameProperty = 'firstName';

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();

//console.log(person);

person.address.street = '1079 Elm St.';
person.address.city = 'Winnetka';
person.address.state = 'IL';

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);