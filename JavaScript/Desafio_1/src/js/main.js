// script del desafío

var diaEdadUsuario = prompt("Ingrese el número de día de su fecha de nacimiento");
console.log (diaEdadUsuario);
var mesEdadUsuario = prompt("Ingrese el número de mes de su fecha de nacimiento");
console.log (mesEdadUsuario);
var edadUsuario = prompt("Ingrese su edad"); 
console.log (edadUsuario);

var fecha = new Date;
console.log(fecha.getMonth() + 1);
console.log(fecha.getDate());
console.log(fecha.getFullYear());

if (mesEdadUsuario > (fecha.getMonth() + 1) || (mesEdadUsuario == (fecha.getMonth() + 1) && diaEdadUsuario < fecha.getDate())) {
        var anioActual = fecha.getFullYear() - edadUsuario - 1;
        alert ("Usted nacio en el año: \n\n" + anioActual);
    } else {
    var anioActual = fecha.getFullYear() - edadUsuario;
    alert ("Usted nacio en el año: \n\n" + anioActual);
}

