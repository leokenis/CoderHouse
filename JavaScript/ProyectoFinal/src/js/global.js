// Global variables
var groupArticles = ["Bebida", "Comida", "Snack", "Postre", "Otro"];
var fromDataProduct = [];
var itemEdit;
var i = 0;
var cotizaciones = [];
const profits = 1.25;
var newArticle = [];

// Clear storage common function
$('#clearStorage').click(function() {
    var RA = localStorage.getItem("articles");
    var RID = localStorage.getItem("lastId");
    if (RA !== null || RID !== null) {
        localStorage.removeItem("articles");
        localStorage.removeItem("lastId");
        $('#modalText').text("Los datos almacenados localmente han sido borrados correctamente!");
        $('#myModal').modal('toggle');
    }else {
        $('#modalText').text("No hay datos almacenados localmente para borrar!");
        $('#myModal').modal('toggle');
    }
    $('#reload').click(function(){
        location.reload();
    })
});

// GET quote AJAX function
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

// function mouse over menu items (bootstap)
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})