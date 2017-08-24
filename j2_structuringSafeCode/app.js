var patrick = G$('Patrick', 'Miner');
patrick.greet().greet(1).setLanguage('es').greet().greet(1);

$('#login').click(function() {
    var loginGrtr = G$('Patrick', 'Miner');
    $('#logindiv').hide();
    loginGrtr.setLanguage($('#lang').val()).HTMLGreeting('#greeting', true).log();
})