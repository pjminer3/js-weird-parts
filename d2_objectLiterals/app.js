function greet(person) {
	console.log('Hello ' + person.firstname);
}

console.log(patrick); // this should log 'undefined'
var patrick = {
  firstname: 'Patrick',
  lastname: 'Miner',
  address: {
  	street: '1079 Elm St.',
  	city: 'Winnetka',
  	state: 'IL'
  }
};


greet(patrick);
greet({
	firstname: 'Forbes',
	lastname: 'Miner'
});