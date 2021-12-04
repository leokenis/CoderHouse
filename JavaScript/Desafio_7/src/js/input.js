// OnCLick form submit function
var button = document.getElementById ("add");
const profits = 1.25;

// Validate input function
function validate (article, price, type) {
    var priceFloat = 0;
    var validate = true;
    // Oculta los errores de validación
    var validateArticle = document.getElementById ("input-article");
    validateArticle.className = "invalid-feedback d-none";
    var validatePrice = document.getElementById ("input-price");
    validatePrice.className = "invalid-feedback d-none";
    var validateType = document.getElementById ("input-type");
    validateType.className = "invalid-feedback d-none";

    var isValid = new RegExp ('^[A-Za-z]{2,100}$'); // Más de 2 caracteres alfabéticos 
    if(!isValid.test(article)){
        validateArticle.className = "invalid-feedback d-block";
        validate = false;
    }
    priceFloat = parseFloat (price);
    if (price <= 0){
        validatePrice.className = "invalid-feedback d-block";
        validate = false;
    }
    if (type === "Seleccionar tipo de artículo"){
        validateType.className = "invalid-feedback d-block";
        validate = false;
    }
    if (validate){
        var insert = document.getElementById("alert");
        var alertValidate = document.createElement("div");
        alertValidate.textContent = "El artículo fue agregado correctamente";
        alertValidate.className = "alert alert-success col-sm-4 container fadeout"
        alertValidate.setAttribute("role","alert");
        alertValidate.setAttribute("style", "margin-top: 2em;");
        insert.appendChild(alertValidate);
        button.disabled = true;
        setTimeout(() => {
            alertValidate.setAttribute("style", "display: none;");
            location.reload();
        }, 2000);
       
    }
}

// Save in local storage function
class product {
    constructor (_article, _price, _type) {
    this.id = 0;
    this.article = _article,
    this.type = _type,
    this.price = this.addPprofit (_price)
    }
    addProfit (price) {
        return price * profits;
    }
}

// Button Function
button.onclick = function (event) {
    event.preventDefault();    
    var article = document.getElementById ("name").value;
    var price = document.getElementById ("price").value;
    var type = document.getElementById ("type").value;
    validate (article, price, type);
    saveArticle ();
}

// Grupos de artículos insertados de forma dinámica
var groupArticles = ["Bebida", "Comida", "Snack", "Postre"];
var select = document.getElementById("type"); 
groupArticles.forEach (article => {
    var element = document.createElement("option");
    element.textContent = article;
    element.value = article;
    select.appendChild(element);
});