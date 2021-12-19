// Selectores

$('h1').css({backgroundColor: "red"});
$('h1, p').css({backgroundColor: "blue"});
$('#1').css({backgroundColor: "green"});
$('.container-p').css({backgroundColor: "yellow"});

$('p:first').css({backgroundColor: "orange"});

$('li:last').css({backgroundColor: "gray"});

$('.container-p').append('<h1>Hola desde Append<h1>');
$('.container-p').prepend('<h1>Hola desde Append (first)<h1>');
$(document).ready() // cuando el documento esta cargado se ejecuta
