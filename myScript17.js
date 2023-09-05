//--- Ejercicios del DOM ---///
//1 onchange

function upperCase(){
    const text = document.getElementById("fname");
    text.value = text.value.toUpperCase();
};


//mouse Over - Out
function moveOver(obj){
    obj.innerHTML = "Hola, muevete afuera";
};

function moveOut(obj){
    obj.innerHTML = "Mouse Over Me";
};


//mouse Down - Up
function mDown(obj){
    obj.style.backgroundColor = '#1ec5e5';
    obj.innerHTML = "Sueltame amigo";
};

function mUp(obj){
    obj.style.backgroundColor = 'rgb(26, 88, 12)';
    obj.innerHTML = "Gracias Humano";
};


//Escuchador de eventos, Botón Intentalo
document.getElementById('myBtn').addEventListener("click", ()=>{
    alert("Buena por intentar, por eso lo lograrás");
});


//Escuchador de eventos, narración de acción 
var accion = document.getElementById("otherBtn");

accion.addEventListener("mouseover", meCubres);
accion.addEventListener("click", mePresionas);
accion.addEventListener("mouseout", meLiberas);

function meCubres(){
    document.getElementById("demo17.0").innerHTML += "Tu Mouse me cubre!! <br>";
};

function mePresionas(){
    document.getElementById("demo17.0").innerHTML += "Has dado Clic y me presionas :( <br>";
};

function meLiberas(){
    document.getElementById("demo17.0").innerHTML += "Gracias Humano por liberarme :D <br>";
};

