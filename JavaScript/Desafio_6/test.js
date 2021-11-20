const nombreVuelo = "Air Canada";

localStorage.setItem ("Nombre Vuelo", nombreVuelo);
localStorage.setItem ("Cantidad de Pasajeros", 50);

const getNombreVuelo = localStorage.getItem ("Nombre Vuelo");
const cantidadPasajeros = localStorage.getItem ("Cantidad de Pasajeros");

console.log (`El nombre del vuelo es: ${getNombreVuelo}`); // plantilla literal
console.log (`El nombre del vuelo es: ${cantidadPasajeros}`); // plantilla literal

// Almacenar array en local storage

localStorage.setItem ("Clase", ["Primera Clase", "Business", "Turista"]);
localStorage.setItem ("Number", ["0", "1", "2", "3"]);
const Clase = localStorage.getItem ("Clase").split (",");
let Num = localStorage.getItem ("Number").split (",");
console.log (Clase);

Num = Num.map(elemento => parseInt (elemento));

console.log (Num);

numero = ["0", "1", "2", "3"].map(elemento => {
    return Number(elemento) * 2;
}) 

console.log (numero);

// Session storage

sessionStorage.setItem ("usuario", "Leonardo");
sessionStorage.setItem ("numeros", ["1","2","3","4"]);

sessionStorage.removeItem ("numeros"); // Borra el ítem del storage
sessionStorage.clear (); // Borra todo el storage

// Objetos

const vuelo = {
    destino: "Buenos Aires",
    origen: "Barcelona",
    pasajeros: [
        {nombre: "Juan",
        edad: 20},
        {nombre: "Pedro",
        edad: 30},   
        {nombre: "Alberto",
        edad: 40},
    ]
}

// JSON

const vueloJSON = `{
    "destino": "Buenos Aires",
    "origen": "Barcelona",
    "pasajeros": [
        {"nombre": "Juan",
        "edad": 20},
        {"nombre": "Pedro",
        "edad": 30},   
        {"nombre": "Alberto",
        "edad": 40}
    ]
}`;

localStorage.setItem ("vuelos", vuelo);
localStorage.setItem ("vuelosJSON", vueloJSON);

// Metodo para crear JSON a partir de un objeto y visceversa

console.log (JSON.stringify (vuelo));
console.log (JSON.parse (vueloJSON));

localStorage.setItem ("vuelos", JSON.stringify (vuelo));

console.log ("Volvió a ser un objeto");
console.log (JSON.parse (localStorage.getItem ("vuelos")));

// Manipulando el DOM

const container = document.getElementById ("container");
console.log ("Interactuando con el DOM");
console.log (container);
console.log (container.innerHTML);
console.log (typeof(container.innerHTML));
const heading = document.getElementsByTagName ("h1");
console.log (heading);
console.log ("Selección por clase");
const classes = document.getElementsByClassName ("saludar");
console.log (classes);
console.log ("ontainer");
const comodin = document.querySelector ("#container");
console.log (comodin.innerHTML);
