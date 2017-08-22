function greet(firstname, lastname, language) {
        language = language || 'en';

        if (language === 'en') {
        	console.log(`Hello ${firstname} ${lastname}`);
        } else if (language === 'es') {
        	console.log(`Hola ${firstname} ${lastname}`);
        }
}

function greetEnglish(firstname, lastname) {
	greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
	greet(firstname, lastname, 'es');
}

// greet('John', 'Doe'); // logs Hello John Doe
// greet('John', 'Doe', 'es'); // logs Hola John Doe

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');