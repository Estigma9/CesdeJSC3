//---- Arreglos y Objetos ----//

//ARREGLOS

const numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19];

document.getElementById("demo4.0").innerHTML = numerosPrimos;

document.getElementById("demo4.1").innerHTML = numerosPrimos[3];

document.getElementById("demo4.2").innerHTML = numerosPrimos.length;


//Datos de los arreglos
datosRecibidos = [76587, 8.98, "Violeta", null, undefined, [1, "talla", false], {marca: "Lenovo", ram: 8}];

document.getElementById("demo4.3").innerHTML = datosRecibidos;

document.getElementById("demo4.4").innerHTML = datosRecibidos[5][1];


//Formas de crear un Arreglo
var misMaterias = [];

const misVideoJuegos = new Array(
    "Mario Bross",
    "Zelda",
    "Super Metroid"
);

profesiones = [
    "Ingeniería",
    "Medicina",
    "Diseño",
    "Economía",
    "Derecho"
];

document.getElementById("demo4.5").innerHTML = profesiones;

// profesiones.pop();

// document.getElementById("demo4.6").innerHTML = profesiones

document.getElementById("demo4.6").innerHTML = profesiones.pop();


//OBJETOS

let pc1 = {
    nombre: "Estigma",
    marca: "Lenovo",
    procesador: "Intel Core I7",
    ram: "16GB",
    disco: "1TB",
    cantidad: 5   
};

document.getElementById("demo4.7").innerHTML = pc1["marca"];

document.getElementById("demo4.8").innerHTML = pc1.disco;

fraseSalida = `Esta est mi computadora, su nombre es: <br> ${pc1["nombre"]}, <br>su marca es ${pc1["marca"]},<br> con un procesador ${pc1["procesador"]}, <br> con una ram de ${pc1["ram"]}, <br> y un disco duro de ${pc1.disco}<br>`;

document.getElementById("demo4.9").innerHTML = fraseSalida;

