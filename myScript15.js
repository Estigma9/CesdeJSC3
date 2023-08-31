// HOISTING (Elevación)
/*
Elevar es el comportamiento predeterminado de JavaScript de mover declaraciones a la parte superior.

Las variables definidas con let y const se elevan a la parte superior del bloque, pero no se inicializan.

Significado: el bloque de código conoce la variable, pero no se puede usar hasta que se haya declarado.

El uso de una let variable antes de declararla dará como resultado un archivo ReferenceError.

JavaScript solo levanta declaraciones, no inicializaciones.

*/

// console.log(nombre);
// var nombre = "Esteban";
// console.log(nombre);

// var nombre;
// console.log(nombre);
// nombre = 'Esteban' 


miNumero = 5; 

elemento = document.getElementById("demo15.0");
elemento.innerHTML = miNumero;

var miNumero;

//---- Hoisting con funciones ----//
// Función como declaración

saludar("Sergio");

function saludar(name){
    document.getElementById("demo15.1").innerHTML = 'Hola ' + name;
};


// // Función como expresión --WARNING-- //

// saludar("Sergio");

// var saludar = function (name){
//     document.getElementById("demo15.2").innerHTML = 'Hola ' + name;
// };



