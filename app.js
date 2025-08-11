let numeroMaximoPosible = 10;
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];


//funcion para asignar texto a un elemento
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario  = parseInt(document.getElementById("valorDeUsuario").value);
    
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento("p",`Felicidades! Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return
}

function limpiarCaja() {
    document.querySelector("#valorDeUsuario").value = "";
}

function generarNumeroSecreto(MaximoPosible) {
    let numeroGenerado = parseFloat(Math.floor(Math.random()*MaximoPosible)+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximoPosible) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } 
        //Si el numero no a sido sorteado, incluirlo a la lista
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}   

function condicionesIniciales() {
    asignarTextoElemento('h1',"Juego Del Número Secreto");
    asignarTextoElemento('p',`Indica un número de 1 al ${numeroMaximoPosible}`);
    numeroSecreto = generarNumeroSecreto(numeroMaximoPosible);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //reestablecer las condiciones iniciales
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

