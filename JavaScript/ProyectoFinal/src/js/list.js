// Listar elementos
function listElements () {
    if ((localStorage.getItem ("articles") === null)) {
        //alert("Estoy en listElements");
        var insert = document.getElementById("warning");
        var warningList = document.createElement("div");
        // Otra forma de llenar el div con todo el contenido en lugar dehacerlo campo por campo (class, style, etc.)
        warning.innerHTML = '<div class="alert alert-warning col-sm-4 container" role="alert" style="margin-top: 2em;">La lista no tiene elementos para mostrar!</div>';
        insert.appendChild(warningList);
        var table = document.getElementById ("divTable");
        table.className = "container col-lg-7 d-none";
    } else {
        var products = [] = JSON.parse(localStorage.getItem ("articles"));
        for(var i=0; i<products.length; ++i) {
            var ID = products[i].id;
            var _articulo = products[i].article;
            var _precio = products[i].price;
            var _tipo = products[i].type;
            var fila=`<tr><td>${_articulo}</td><td class="text-lg-center">$ ${_precio}</td><td class="text-lg-center">${_tipo}</td></tr>`;
            var rowTable = document.createElement("tr");
            rowTable.innerHTML=fila;
            rowTable.id = ID;
            document.getElementById("tBody").appendChild(rowTable);
        }
    }
}
listElements();