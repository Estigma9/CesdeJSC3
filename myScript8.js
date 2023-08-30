//Estructuras de Decisión Lógica

/* 
Hacer un algoritmo que, dados dos valores numéricos A y B, escriba un mensaje diciendo si A es mayor, menor o igual a B.
*/

function CompararNumero(a, b){
    if (a > b) {
        document.getElementById("demo8.0").innerHTML = "A es MAYOR que B"; 
        
    } else {
        if (a < b) {
            document.getElementById("demo8.0").innerHTML = `${a} es MENOR que ${b}`;

        } else {
            if (a == b) {
                document.getElementById("demo8.0").innerHTML = "A es IGUAL que B";
                
            } else {
                document.getElementById("demo8.0").innerHTML = "Coloque datos apropiados";  
            }   
        }
    }
};



/*
if (a > b) {
    document.getElementById("demo8.0").innerHTML = "A es MAYOR que B";
} else if (a == b) {
    document.getElementById("demo8.0").innerHTML = "A es IGUAL que B";
} else {
    document.getElementById("demo8.0").innerHTML = "A es MENOR que B";
}
*/

