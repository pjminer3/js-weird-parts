function makeGreeting(language) {

	return function(firstname, lastname) {
		if (language === 'en') {
			console.log(`Hello ${firstname} ${lastname}`);
		} else if (language === 'es') {
			console.log(`Hola ${firstname} ${lastname}`);
		} 
	}

}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Patrick', 'Miner');
greetSpanish('Forbes', 'Miner');