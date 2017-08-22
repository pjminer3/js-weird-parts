function getPerson() {
	return 
	{
		name: "Patrick Miner"
	}
}

console.log(getPerson()); // returns undefined because the syntax parser adds a ';' after 'return' thus ending the function call

function getPersonReal() {
	return {
		name: 'Patrick Miner'
	};
}

console.log(getPersonReal());