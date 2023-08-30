//Concatenación con +
persona = "Esteban";
saludo = "Desde el curso les mando mi saludo";
fraseCompleta = persona + " " + saludo;

document.getElementById("demo2.0").innerHTML = persona;
document.getElementById("demo2.1").innerHTML = saludo;
document.getElementById("demo2.2").innerHTML = fraseCompleta;


//Concatenación con engaño 524
numeroImpar = 5;
numeroPar = 24;
numeroSeguido = "" + numeroImpar + numeroPar;

document.getElementById("demo2.3").innerHTML = numeroSeguido;


//Concatenación con concat()

animal = "Perro ";
sonido = "Guauu ";
accion = "Correr";

animalHabla = animal.concat(sonido, true, 23, accion, " ", persona, " por tu vida");


document.getElementById("demo2.4").innerHTML = animalHabla;


//Concatenación ${}

forma = "con estos simbolos ${}";

conclusion = `La forma de concatenar más adecuada es la siguiente: ${forma}, porque puedo poner la frase y llamar variables`

document.getElementById("demo2.5").innerHTML = conclusion;
