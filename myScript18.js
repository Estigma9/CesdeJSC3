// POO - Paradigma de programación orientada a objetos: //
//-- Clases --// Es la plantilla con la que creo objetos

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;

        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    };

    verInfo(){
        document.getElementById("demo18.4").innerHTML += this.info + "<br>";
    }

    //Polimorfismo
    ladrar(){
        if (this.especie == 'perro') {
            document.getElementById("demo18.6").innerHTML = "¡Guau, Guau!!!<br>";   
        } else {
            document.getElementById("demo18.6").innerHTML = "No puedo ladrar porque no soy un perro, soy un " + this.especie + "<br>";   
        }
    };

};


// let perro = new Animal();
// perro.especie = 'Perro';
// perro.edad = 5;
// perro.color = 'gris';

// console.log(perro);

let perro = new Animal("perro", 5, "rojo");

document.getElementById("demo18.0").innerHTML = perro.info
console.log(perro);

let gato = new Animal("gato", 8, "blanco");
let elefante = new Animal("elefante", 35, "gris");
let loro = new Animal("loro", 1, "verde");

document.getElementById("demo18.1").innerHTML = gato.info;
document.getElementById("demo18.2").innerHTML = elefante.info;
document.getElementById("demo18.3").innerHTML = loro.info;

elefante.verInfo();
gato.verInfo();
perro.verInfo();


document.getElementById("demo18.5").innerHTML = 'Perro:  ' + perro.info;

// perro.ladrar();
gato.ladrar();


class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    };


};

let perrito = new Perro("perro", 1, "Blue Merlé", "Criollo")
document.getElementById("demo18.6").innerHTML = perrito.color;


