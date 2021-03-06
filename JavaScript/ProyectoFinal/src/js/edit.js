// Validate input function
function validate (article, price, type) {
    var priceFloat = 0;
    var validate = true;
    // Oculta los errores de validación
    var validateArticle = document.getElementById ("edit-article");
    validateArticle.className = "invalid-feedback d-none";
    var validatePrice = document.getElementById ("edit-price");
    validatePrice.className = "invalid-feedback d-none";
    var validateType = document.getElementById ("edit-type");
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
        $('#editAlert').show();
        setTimeout(() => {
            $('#editAlert').hide();
            $('#editModal').modal('toggle');
        }, 2000);
        return true;      
    }
    return false;
}

// Show item in modal from local storage
function editarFila (ID) {  
    $('#edit').prop("disabled",false);
    $('#cancel').prop("disabled",false);
    itemEdit = ID;  
    fromDataProduct = JSON.parse(localStorage.getItem("articles")); 
    $('#editModal').modal('toggle');
    $('#editAlert').hide();
    const found = fromDataProduct.findIndex(element => element.id == itemEdit);
    $('#in-edit-name').val(fromDataProduct[found].article);
    $('#in-edit-price').val(fromDataProduct[found].price/profits);
    $('#in-edit-type').val(fromDataProduct[found].type);
}

// Button edit item function
button.onclick = function (event) {
    event.preventDefault();    
    const found = fromDataProduct.findIndex(element => element.id == itemEdit);
    var article = fromDataProduct[found].article = $('#in-edit-name').val();
    var price = fromDataProduct[found].price = $('#in-edit-price').val()*profits;
    var type = fromDataProduct[found].type = $('#in-edit-type').val();
    if(validate (article, price, type)){
        $('#edit').prop("disabled",true);
        $('#cancel').prop("disabled",true);
        localStorage.removeItem("articles");
        localStorage.setItem ("articles", JSON.stringify (fromDataProduct));
        mostrar();
    }
}

// Grupos de artículos insertados de forma dinámica
var select = document.getElementById("edit-type"); 
groupArticles.forEach (article => {
    var element = document.createElement("option");
    element.textContent = article;
    element.value = article;
    select.appendChild(element);
});