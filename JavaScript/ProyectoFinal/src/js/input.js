// OnCLick form submit function
var button = document.getElementById ("add");

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

    var isValid = new RegExp ('^[A-Za-z ]{2,100}$'); // Más de 2 caracteres alfabéticos 
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
    // Modifico los elementos con jQuery
    if (validate){
        $('#alert').hide();
        $('#alert').text("El artículo fue agregado correctamente");
        $('#alert').addClass("alert alert-success col-sm-4 container fadeout");
        $('#alert').fadeIn(500);       
        $('#alert').attr("role","alert");
        $('#add').prop("disabled",true);
        setTimeout(() => {
            $('#alert').fadeOut(500);
            setTimeout(() => {
                location.reload(); // Le da tiempo al fadeOut
                }, 500);
        }, 2000);
        return true;      
    }
    return false;
}

// Article objetc
class article {
    constructor (_ID, _article, _price, _type) {
    this.id = _ID;
    this.article = _article,
    this.type = _type,
    this.price = this.addProfit (_price);
    }
    addProfit (price) {
        return price * profits;
    }
}

// Save item in local storage
function addItem (_article, _price, _type) {
    var products = [];
    if (!(localStorage.getItem ("articles") === null)) {
        products = JSON.parse(localStorage.getItem("articles"));
        const ID = parseInt(localStorage.getItem("lastId")) + 1;
        products.push(new article (ID, _article, _price, _type));
        localStorage.setItem("articles", JSON.stringify(products));
        localStorage.setItem ("lastId", ID);
    } else { // No existe el local storage de artículos
        newArticle[0] = new article (0, _article, _price, _type);
        localStorage.setItem ("articles", JSON.stringify(newArticle));
        localStorage.setItem ("lastId", 0);
    }
}

// Button function add element
button.onclick = function (event) {
    event.preventDefault();    
    var article = document.getElementById ("name").value;
    var price = document.getElementById ("price").value;
    var type = document.getElementById ("type").value;
    if(validate (article, price, type)){ // Valida los datos
        addItem (article, price, type);
    }
}

// Grupos de artículos insertados de forma dinámica
var select = document.getElementById("type"); 
groupArticles.forEach (article => {
    var element = document.createElement("option");
    element.textContent = article;
    element.value = article;
    select.appendChild(element);
});