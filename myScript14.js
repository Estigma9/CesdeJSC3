//SCOPE (Ámbito)
/*
El alcance determina la accesibilidad (visibilidad) de las variables.

JavaScript has 3 types of scope:

Block scope
Function scope
Global scope
*/

// Function Scope
var fruta = 'Cereza';

function comer() {
    var fruta = 'manzana';
    document.getElementById("demo14.0").innerHTML = 'Comiendo ' + fruta;
};

function lavar() {
    var fruta = 'banana';
    document.getElementById("demo14.1").innerHTML = 'Lavando ' + fruta;
};

comer();
lavar();


//Global Scope

var frutaGlobal = 'Piña';

function picar() {
    var otraFruta = 'Pera';
    document.getElementById("demo14.2").innerHTML = 'Picando ' + frutaGlobal;
};

picar()

// document.getElementById("demo14.3").innerHTML = 'Picando ' + otraFruta;


// Block Scope

function cultivar() {
    var frutaSembrada = "Papaya";
    if (true) {
        var frutaCosechada = "Lulo";
    }

    document.getElementById("demo14.4").innerHTML = 'Sembrando ' + frutaSembrada;
    document.getElementById("demo14.5").innerHTML = 'Cosechando ' + frutaCosechada;
};

cultivar();


/*
Un Bloque en JS es todo lo que está encerrado entre {}, if, else, while, for
Cambiar el var de frutaCosechada por un let o const, me sacaría error
*/


// COMO HACE JS PARA ENCONTRAR UNA VARIABLE

var frutaTraida = 'Mangostino';

function almacenar(){
    var frutaGuardada = 'Granada';

    function sacarFruta(){
        document.getElementById("demo14.6").innerHTML = 'Sacando ' + frutaTraida;
    };
    
    sacarFruta();
    
    document.getElementById("demo14.7").innerHTML = 'Guardando ' + frutaGuardada;    
};

almacenar();


// document.getElementById("demo14.8").innerHTML = 'Guardando ' + frutaGuardada;



// OCULTAMIENTO DE VARIABLES (Variable Shadowing)

/*
Cuando una variable está en un scope mas reducido tiene el mismo 
nombre que otra que esta en un scope superior, siguiendo la cadena
de scopes 
*/

var miFruta = 'Durazno';

if(true){
    var miFruta = 'Coco'
}



function buscarMiFruta(){
    var miFruta = 'Maracuyá';
    
    function encontrarMiFruta(){
        document.getElementById("demo14.10").innerHTML = 'Encontrando ' + miFruta;
    };
    
    encontrarMiFruta();
    document.getElementById("demo14.11").innerHTML = 'Buscando ' + miFruta;
};

buscarMiFruta();

document.getElementById("demo14.9").innerHTML = 'Nueva Busqueda ' + miFruta;



