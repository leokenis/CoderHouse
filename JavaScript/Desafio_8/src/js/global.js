$('#clearStorage').click(function() {
    //alert ("hola");
    localStorage.removeItem("articles");
    localStorage.removeItem("lastID");
    location.reload();
});

var i = 0;
var cotizaciones = [];
getCotizacion();

var intervalID = window.setInterval(printCotizacion, 3000);

function getCotizacion () {
    var API = "\cotizaciones.json";
    $.getJSON(API, function(data) {
        $.each(data, function(key, val) {
            cotizaciones.push(`La cotización del ${key} es de $ ${val}`);
        });
    })
}

function printCotizacion () {
    $('#cotizacion').fadeOut(250);
    $('#cotizacion').text(cotizaciones[i]);
    $('#cotizacion').fadeIn(250);
    ++i;
    if (i===3) i=0;
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})