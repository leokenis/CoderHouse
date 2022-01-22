var button = document.getElementById ("edit");

// Listar elementospara edición
function mostrar () {
    $('#tBody').empty();
    var products = [] = JSON.parse(localStorage.getItem ("articles"));
    if(products.length === 0) location.reload();
    for(var i=0; i<products.length; ++i) {
        var ID = products[i].id;
        var _articulo = products[i].article;
        var _precio = products[i].price;
        var _tipo = products[i].type;
        var fila=`<tr>
            <td>${_articulo}</td>
            <td class="text-lg-center">$ ${_precio}</td>
            <td class="text-lg-center">${_tipo}</td>
            <td class="text-lg-center">
                <button type="button" class="btn btn-sm" onclick="eliminarFila(${ID})"><img src="./src/svg/trash.svg"></button>
                <button type="button" class="btn btn-sm" onclick="editarFila(${ID})"><img src="./src/svg/edit.svg"></button>
            </td>
        </tr>`;
        var rowTable = document.createElement("tr");
        rowTable.innerHTML=fila;
        rowTable.id = ID;
        document.getElementById("tBody").appendChild(rowTable);
    }
}

function listEditElements () {
    if ((localStorage.getItem ("articles") === null) || localStorage.getItem ("articles") === "[]") {
        var insert = document.getElementById("warning");
        var warningList = document.createElement("div");
        warning.innerHTML = '<div class="alert alert-warning col-sm-4 container" role="alert" style="margin-top: 2em;">La lista no tiene elementos para mostrar!</div>';
        insert.appendChild(warningList);
        var table = document.getElementById ("divTable");
        table.className = "container col-lg-7 d-none";
    } else {
        mostrar();
    }
}

listEditElements();

function eliminarFila (ID) {
    var fromDataProduct = [] = JSON.parse(localStorage.getItem("articles"));
    const found = fromDataProduct.findIndex(element => element.id == ID);
    fromDataProduct.splice(found, 1);
    localStorage.removeItem("articles");
    localStorage.setItem ("articles", JSON.stringify (fromDataProduct));
    mostrar();
}

var select = document.getElementById("in-edit-type"); 
groupArticles.forEach (article => {
    var element = document.createElement("option");
    element.textContent = article;
    element.value = article;
    select.appendChild(element);
});