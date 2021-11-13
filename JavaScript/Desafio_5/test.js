const nombreVuelo = "Air Canada";

localStorage.setItem ("Nombre Vuelo", nombreVuelo);
localStorage.setItem ("Cantidad de Pasajeros", 50);

const getNombreVuelo = localStorage.getItem ("Nombre Vuelo");

console.log (`El nombre del vuelo es: ${getNombreVuelo}`); // plantilla literal