var loadButton = document.getElementById ("btnLoad");

// Primera forma de escuchar eventos
/*
loadButton.addEventListener ("click", showInConsole);

function showInConsole (event) {
    event.preventDefault ();
    console.log ("Hola desde showInConsole");
}
*/

// Segunda forma
/*
loadButton.onclick = (event) => {
    event.preventDefault ();
    console.log("Hola desde segunda forma");
    // alert ("Estoy aquí");
}
*/

loadButton.addEventListener ("click", showCard);
const inputAge = document.getElementById ("age");

function showCard (event) {
    event.preventDefault ();
    createCard ("Leo", 35, content);
}

// Callback
// Fx que recibe o devuelve una función como parámetro
/*
function hello () {
    console.log ("Hello");
}

function callHello (fx) {
    fx ();
}

callHello (hello);
*/
inputAge.addEventListener ("change", onNameChange);

function onNameChange (event) {
    console.log ("Evento: ", event);
    console.log ("Target: ", event.target);
    console.log ("Valor: ", event.target.value);
}

function createCard (name, age, element) {
    const card = document.createElement ("div");
    card.className = "card m-2 p-3";
    card.innerHTML = `<h2>Nombre: ${name} </h2>
    <h3>Edad: ${age} <h3>`;
    element.appendChild (card);
}