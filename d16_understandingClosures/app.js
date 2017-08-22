function greet(whatToSay) {

	return function(name) {
		console.log(whatToSay + ' ' + name);
	}

}

greet('Hi')('Patrick');

var sayHi = greet('Hi');
sayHi('Forbes');

var sayHola = greet('Hola');
sayHola('Mamacita!');

var saySup = greet('Sup');
saySup('Kevin?');

sayHi('Mr. PoopyButthole');
sayHola('Mr. PoopyButthole');
saySup('Mr. PoopyButthole');