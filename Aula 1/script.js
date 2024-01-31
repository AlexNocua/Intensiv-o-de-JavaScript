
//constante no cambia el contenido de la variable
///left para cambiar lo que esta dentro de la variable
//var 

const botaoPlaypause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('anterior');
const botaovoltar = document.getElementById('proximo');
const nomeCapitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloActual = 1;

function tocarfacha() {
    audioCapitulo.play();
    botaoPlaypause.classList.add('bi-pause-circle-fill')
    botaoPlaypause.classList.remove('bi-play-circle-fill')
};

function pausarfaixa() {
    audioCapitulo.pause()
    botaoPlaypause.classList.add('bi-play-circle-fill')
    botaoPlaypause.classList.remove('bi-pause-circle-fill')
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarfacha();
        taTocando = 1;
      
        trocaNomefaiza();
        

    } else {
        pausarfaixa();
        taTocando = 0;
        
        trocaNomefaiza();
    }
    
}

function trocaNomefaiza() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloActual;
}

function proximaFaxa() {
    if (capituloActual === numeroCapitulos) {
        capituloActual = 1;

    } else {
        capituloActual = capituloActual + 1
    }

    audioCapitulo.src = "./aula 1 (do zero)/books/dom-casmurro/" + capituloActual + ".mp3";
    tocarfacha();
    taTocando = 1;
    trocaNomefaiza();
}

function voltatFaxa() {
    if (capituloActual === 1) {
        capituloActual = numeroCapitulos;

    } else {
        capituloActual = capituloActual - 1
    }

    audioCapitulo.src = "./aula 1 (do zero)/books/dom-casmurro/" + capituloActual + ".mp3";
    tocarfacha();
    taTocando = 1;
    trocaNomefaiza();
}

botaovoltar.addEventListener('click', proximaFaxa);
botaoAvancar.addEventListener('click', voltatFaxa)
botaoPlaypause.addEventListener('click', tocarOuPausar); //no se coloca el parentecis porque si no se reproduce