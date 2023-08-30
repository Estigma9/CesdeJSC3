//---- Estructuras Repetitivas ----//

// While - Mientras

let numero = 0;
let cajaNumero = [];

while (numero <= 100){
    cajaNumero.push(numero);

    numero = numero + 10;
    // numero++;
};

// console.log(cajaNumero);

document.getElementById("demo10.0").innerHTML = cajaNumero; 


//Do While - Haga Mientras

// let contador = 5;

// do {
//     document.write("Hola");
//     contador = contador + 1;

// } while (contador < 3);


// For - Para

let arregloPara = [];

for (let i = 0; i <= 20; i=i+1) {

    // if (i==17) {
    //     break;        
    // } 

    if (i==17) {
        continue;        
    } 
    
    arregloPara.push(i);
    
};

document.getElementById("demo10.1").innerHTML = arregloPara; 


//For in vs For of

let animales = ["gato", "perro", "elefante", "Dodo"];

let textIn = "";

for (let animal in animales) {

    // textIn = textIn + animales[animal] + "<br>";
    textIn += animal + "<br>";

}

document.getElementById("demo10.2").innerHTML = textIn;

let textOf = "";

for (let animal of animales) { 
    textOf = textOf + animal + "<br>";  
}

document.getElementById("demo10.3").innerHTML = textOf;


const usuarioCliente = {
    name: "Federico",
    lastName: "Rueda",
    age: 42
};

let textObj = "";

for (let key in usuarioCliente) {
    // textObj = textObj + usuarioCliente + "<br>";
    // textObj = textObj + key + "<br>";
    textObj = textObj + usuarioCliente[key] + "<br>";
}

document.getElementById("demo10.4").innerHTML = textObj;


//forEach

let estudiantes = ["Yuli", "Sebastian", "Rafael", "Lina"];
let textEach = "";

estudiantes.forEach(miSalida);

document.getElementById("demo10.5").innerHTML = textEach;

function miSalida(item, index){
    textEach = textEach + index + " = " + item + "<br>";
};

