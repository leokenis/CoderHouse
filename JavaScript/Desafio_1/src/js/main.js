// Ingreso los datos del usuario para calcular el año de su nacimiento
var diaEdadUsuario = prompt("Ingrese el número de día de su fecha de nacimiento");
console.log (diaEdadUsuario);
var mesEdadUsuario = prompt("Ingrese el número de mes de su fecha de nacimiento");
console.log (mesEdadUsuario);
var edadUsuario = prompt("Ingrese su edad"); 
console.log (edadUsuario);

// Creo un objeto fecha, para obtener la fecha actual
var fecha = new Date;
console.log(fecha.getMonth() + 1); // Sumo 1 porque enero = 0
console.log(fecha.getDate());
console.log(fecha.getFullYear());

// Creo un condicional para ver si éste año ya paso su cumpleaños. En función de eso calculo su año de nacimiento
if (mesEdadUsuario > (fecha.getMonth() + 1) || (mesEdadUsuario == (fecha.getMonth() + 1) && diaEdadUsuario < fecha.getDate())) {
        var anioActual = fecha.getFullYear() - edadUsuario - 1;
        alert ("Usted nacio en el año: \n\n" + anioActual);
    } else {
    var anioActual = fecha.getFullYear() - edadUsuario;
    alert ("Usted nacio en el año: \n\n" + anioActual);
}