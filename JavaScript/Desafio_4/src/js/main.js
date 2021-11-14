// Agregar productos al stock

var ID = 0;

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