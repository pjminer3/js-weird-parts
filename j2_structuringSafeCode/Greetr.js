// This will serve as framework/Library

// Below we create the execution context of our framework so variables we set do not interfere with those of any other code
// We need to pass into the the function the global object (window) and the other object we want to interact with (jQuery)


(function(global, $) {
   'use strict'
    // Defines function Greetr that returns new objects
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }


    // The below 4 variables are hidden/not-exposed to the outside world outside of this execution context.
    // Our Greetr function will be able to access them outside in the real world thanks to closure
    var supportedLangs = ['en', 'es', 'fr'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        fr: 'Salut'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio session',
        fr: 'Connecte\''
    };

    // Sets a Greetr prototype where we can place all the shared properties and methods of its instances
    Greetr.prototype = {
        // fullName method returns a full name.  EX: 'John Doe'
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        }, 
        
        // validate method throws the error 'Invalid Language' if a language other than english (en) or spanish (es) is tried
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        // greeting method creates an informal greeting.  EX: 'Hello John!'
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        // formalGreeting method creates a formal greeting.  EX: 'Greetings, Doe'
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.lastName;
        }, 

        // Logs either an informal or formal greeting depending on the formal argument passed in
        greet: function(formal) {
            var msg;
            // If a truthy argument is given (if something is there) this will be coerced to 'true'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // If a console exists we will log msg
            if (console) {
                console.log(msg);
            }

            // by returning 'this' we make this method chainable
            return this;
        },

        // log method logs a log message when a user calls it. EX: 'Logged in: John Doe'
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        // setLanguage method resets the language property to the argument passed in and validates its an acceptable value
        setLanguage: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery was not loaded';
            } else if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    // New object constructor that is returned by function Greetr 
    Greetr.init = function(firstName, lastName, language) {
        var self = this; // Use this so we can be sure we're referring to the right object
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        self.validate();
    }

    // Sets Greetr.init.prototype (the true prototype of all Greetr.init instances) to Greetr.prototype (so both reference the same object);
    Greetr.init.prototype = Greetr.prototype

    // Makes Greetr accessable from the window so we can use it as a framework in our code
    global.Greetr = global.G$ = Greetr;

}(window, jQuery))