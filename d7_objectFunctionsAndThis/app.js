console.log(this); // logs the window object

function a() {
	console.log(this);
}

var b = function() {
	console.log(this);
}

a();  // 'this' still points to the global object. When simply invoking a function 'this' points to the global object
b(); // 'this' still points to the global object, too

function c() {
	this.newVariable = 'hello';
}

c();
console.log(newVariable); // logs 'hello' because we added the newVariable property to the global object (aka added a newVariable variable)

var d = {
	name: 'The d object',
	log: function() {
		var self = this; // NOTE: ADD THIS VARIABLE TO REPLACE ALL BELOW 'this's with self to ensure we mutate the right object
		self.name = 'Updated D Object';
		console.log(self);

		var setname = function() {
		  self.name = 'Updated Again! The D object updated'; 
		  // instead of updating d.name it creates a window.name variable... 'this' refers to the global object, self refers to the object we want to mutate
	    }

	    setname();
	    console.log(self);
	}

}

// calling the d method
d.log(); // logs the d object because d is left of the calltime dot