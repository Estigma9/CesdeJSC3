//---- Funciones ----//

//Primera Forma Por Declaración

let numero1 = "Pedro";

function HacerSuma(numero1, numero2){
    let suma = numero1 + numero2;

    return suma
};

document.getElementById("demo6.0").innerHTML = HacerSuma(7, 3);

document.getElementById("demo6.1").innerHTML = numero1;


// Segunda Forma Por expresión

let HacerResta = function(numero1, numero2){
    let resta = numero1 - numero2;
    
    return resta
};

document.getElementById("demo6.2").innerHTML = HacerResta(9, 3);

document.getElementById("demo6.3").innerHTML = HacerResta(-9, -233);


//Tercera Forma Arrow Function

const HacerMultiplicacion = (numero1, numero2) => {
    let multiplicar = numero1 * numero2;

    return multiplicar
};

document.getElementById("demo6.4").innerHTML = HacerMultiplicacion(-9, -233);


//Funciones anonimas

// function (){

// };

// () => {

// };




