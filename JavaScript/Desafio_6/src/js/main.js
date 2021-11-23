// Agregar productos al stock

var ID = 0;

var groupArticles = ["Bebida", "Comida", "Snack", "Postre"];
const EL = "\n" // End Line
var select = document.getElementById("group"); 

//for(var i = 0; i < groupArticles.length; i++) {
groupArticles.forEach (article => {
    // alert (article);
    var element = document.createElement("option");
    element.textContent = article;
    element.value = article;
    select.appendChild(element);
});

var button = document.getElementById ("add");

var products = [];
var ouput;
var text = "";

class product {
    constructor (article, price, group) {
    this.id = ID + 1,
    this.article = article,
    this.group = group,
    this.price = price,
    this.globalPrice = this.profit (this.price)
    this.text;
    }

    profit (price) {
        return price * 1.25;
    }
    /*  Comento el método para utilizarlo más adelante. */
    mostrar () {
        const EL = "\n" // End Line
        text = "ID: " + this.id + EL + "Artículo: " + this.article + EL + "Grupo de artículos: " + this.group + EL + "Precio de venta: " + this.globalPrice;
        return text;
    }
}

function refresh () {
    var fromDataProduct = [] = JSON.parse(localStorage.getItem("articulos"));
    var tb = document.getElementById("tBody");
    tb.innerHTML = "";    
    for (var i=0; i<fromDataProduct.length; i++) {
        // text = text + fromDataProduct[i].article + EL + EL;
        var _articulo = fromDataProduct[i].article;
        var _precio = fromDataProduct[i].price;
        var _tipo = fromDataProduct[i].group;
        insertInTable (_articulo, _precio, _tipo, i);
    }    
}

function eliminarFila (ID) {
    var fromDataProduct = [] = JSON.parse(localStorage.getItem("articulos"));
    fromDataProduct.splice(ID, 1);
    localStorage.setItem ("articulos", JSON.stringify (fromDataProduct));
    products.splice(ID, 1);
    refresh();
}

function insertInTable (articulo, price, group, ID) {   
    var _articulo = articulo;
    var _precio = price;
    var _tipo = group;
    // alert ("I am in insertInTable" + _articulo);

    var fila=`<tr><td>${_articulo}</td><td>${_precio}</td><td>${_tipo}</td><td><button type="button" class="btn btn-sm btn-danger" onclick="eliminarFila(${ID})">Delete</button></td></tr>`;

    // document.getElementById("tBody").remove();

    var btn = document.createElement("tr");
    btn.innerHTML=fila;
    btn.id = ID;
    document.getElementById("tBody").appendChild(btn);
}

button.onclick = function () {
    var article = document.getElementById ("name");
    var price = document.getElementById ("price");
    var group = document.getElementById ("group");
    // alert (nombreArticulo.value);
    // alert (precioArticulo.value);
    // alert ("Estoy aquí!");

    console.log (article.value);
    console.log (price.value);
    console.log (group.value);

    // localStorage.setItem ("articulo", nombreArticulo.value);
    /*
    if (!(localStorage.getItem ("articulos") === null)) {
        products.push(JSON.parse (localStorage.getItem ("articulos")));
        // alert ("Estoy aqui!");
    }
    */

    item = new product (article.value, price.value, group.value);
    ID = ID + 1;
    products.push (item);
    // item = new product (article.value, price.value, group.value);
    // products.push (item);
    localStorage.setItem ("articulos", JSON.stringify (products));
    // alert (ID);
    // productos = JSON.parse ("articulos");
    //new product fromDataProduct = [];

    var fromDataProduct = [] = JSON.parse(localStorage.getItem("articulos"));
    // console.log (fromDataProduct);
    /* Muestra en un alert solo las propiedades del objeto!
    ATENCION: PIERDE LOS METODOS!
    text = "";
    for (var i=0; i<fromDataProduct.length; i++) {
        text = text + fromDataProduct[i].article + EL + EL;
    }
    alert (text);
    */

    var tb = document.getElementById("tBody");
    tb.innerHTML = "";    

    for (var i=0; i<fromDataProduct.length; i++) {
        // text = text + fromDataProduct[i].article + EL + EL;
        var _articulo = fromDataProduct[i].article;
        var _precio = fromDataProduct[i].price;
        var _tipo = fromDataProduct[i].group;
        insertInTable (_articulo, _precio, _tipo, i);
    }
}



/*

var products = [];  // Array de objetos.

function defineGroup () {
    groupArticles = ["Bebida", "Comida", "Snack", "Postre"];
    do {
        var getOption = prompt ("Gestión de productos del almacen!\nIngrese el grupo de artículos:\n1.-" + groupArticles [0] + "\n2.-" + groupArticles [1] + "\n3.-" + groupArticles [2] + "\n4.-" + groupArticles [3]);
        switch (getOption) {
        case "1":
            return groupArticles [0]; 
            break;
        case "2":
            return groupArticles [1];
            break;
        case "3":
            return groupArticles [2];
            break;
        case "4":
            return groupArticles [3];
            break;            
        default:
          alert ("La opción ingesada es incorrecta. Vuelva a intentarlo!");
      }
    } while (getOption != "1" || getOption != "2" || getOption != "3" || getOption != "4")
}

class product {
    constructor (article, price) {
    this.id = ID + 1,
    this.article = article,
    this.group = this.selectGroup (),
    this.price = price,
    this.globalPrice = this.profit (this.price);
    }

    selectGroup () {
        var selectedGroup = defineGroup ();
        console.log (selectedGroup);
        return selectedGroup;
    }

    profit (price) {
        return price * 1.25;
    }

    mostrar () {
        const EL = "\n" // End Line
        var text = "ID: " + this.id + EL + "Artículo: " + this.article + EL + "Grupo de artículos: " + this.group + EL + "Precio de venta: " + this.globalPrice;
        return text;
    }
}   

do {
    var i = 0;
    var getOption = prompt ("Gestión de productos del almacen!\nIngrese el número de la opción deseada:\n1.- Agregar nuevo producto\n2.- Ver lista de productos\n3.- Salir...");
    switch (getOption) {
    case "1":
        // alert ("Usted eligió la opción " + getOption);
        addArticle ();
        break;
    case "2":
        // alert ("Usted eligió la opción " + getOption);
        seeArticles ();
        break;
    case "3":
        alert ("Hasta luego!");
        break;
    default:
      alert ("La opción ingesada es incorrecta. Vuelva a intentarlo!")//Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
  }
} while (getOption != "3")

function addArticle () {
    var article = prompt ("Ingrese el nombre del artículo: ");
    var price = prompt ("Ingrese el precio del artículo: $");
    // inserto objeto según el índice global
    // **** products [ID] = new product (article, price);  
    // insertar con push
    products.push (new product (article, price));
    ID ++;
}

function seeArticles () {
    var text = "";
    const EL = "\n" // End Line
    for (var i=0; i<products.length; i++) {
        text = text + products[i].mostrar() + EL + EL;
    }
    alert (text);
}
*/