// Selectores

$('h1').css({backgroundColor: "red"});
$('h1, p').css({backgroundColor: "blue"});
$('#1').css({backgroundColor: "green"});
$('.container-p').css({backgroundColor: "yellow"});

$('p:first').css({backgroundColor: "orange"});

$('li:last').css({backgroundColor: "gray"});

$('.container-p').append('<h1>Hola desde Append<h1>');