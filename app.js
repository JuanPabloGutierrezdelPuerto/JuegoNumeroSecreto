let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarItento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste al numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();    
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p' , 'Ya se sortearon todos los numeros disponibles');

    } else {        
        // Si el numero genrado esta incluido en la lista, buscar otro, si no, utilizar
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de itervalo de numero
    //generar numero aleatorio
    //Iniciar numero de intentos
    condicionesIniciales();
    //deshabilitar boton juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();