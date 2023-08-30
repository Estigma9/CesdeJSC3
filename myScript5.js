//EJERCICIO OBJETOS

var carro = {
    //Atributos
    tipo: "Ferrari",
    modelo: "F40",
    color: "Rosso Corsa",

    //Metodos
    nombreCompleto: function(){
        return this.tipo + " " + this.modelo;
    },

    nombreColor: function(){
        return carro.tipo + " - " + this.color;
    }
};


document.getElementById("demo5.0").innerHTML = "El carro es un " + carro.tipo;

document.getElementById("demo5.1").innerHTML = "El color es  " + carro["color"];

document.getElementById("demo5.2").innerHTML = carro.nombreCompleto();

document.getElementById("demo5.3").innerHTML = carro.nombreColor();