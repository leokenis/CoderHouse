$('#clearStorage').click(function() {
    localStorage.removeItem("articles");
    localStorage.removeItem("lastID");
    location.reload();
});

var i = 0;
var cotizaciones = [];

function getCotizacion () {
    var API = "\cotizaciones.json";
    $.getJSON(API, function(data) {
        $.each(data, function(key, val) {
            cotizaciones.push(`La cotización del ${key} es de $ ${val}`);
        });
    })
    .done(function() {
        $('#cotizacion').hide();
        $('#cotizacion').text(cotizaciones[i]);
        $('#cotizacion').fadeIn(500);
        ++i;
        if (i===3) i=0;
    })
    .fail(function() {
        $('#cotizacion').text("No se lograron obtener las cotizaciones!");
    })
}
getCotizacion();

var intervalID = window.setInterval(getCotizacion, 3000);

// functio mouse over menu items (bootstap)
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})