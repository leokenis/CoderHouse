const usuario = {
    user_name: 'Leo',
    rol: 'alumno',
    curso: 'ReactJS',
    edad: 36,
    phone: {
        home: 123456789,
        cel: 987654321
    }
}

// Desestructurar con alias.
const {user_name: nombre, phone:{cel: tel}} = usuario;

console.log(nombre);
console.log(tel);