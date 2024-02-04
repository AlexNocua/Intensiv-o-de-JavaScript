//Variables de informacion de la pagina

const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');


const socket = io(); //por medio del socket se conecta


botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== '') {
        socket.emit('nova mensagem', caixaMensagem.value)//evento que yo cree
        caixaMensagem.value = ""; //actualizacion de la caja
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    console.log('holsaaaa')
    //responsable de cargar el mednsaje en la pagina.
    const elementoMensagem = document.createElement('li');//creacion en html
    elementoMensagem.textContent = msg; //el elemento que se guardo en nova mensagem va a ser guardado y agregado en el valor de la caja
    elementoMensagem.classList.add('mensagem');// llama una clase de css

    const horamensagem = document.createElement('li');
    const iconMensagem = document.createElement('li');
    const filaContainer = document.createElement('div');
    filaContainer.classList.add('padding')


    let fecha = new Date();
    let hora = fecha.getHours();
    let minutes = fecha.getMinutes();

    horamensagem.textContent = 'Mensagem recebida as: ' + hora + ':' + minutes + ' da noite';
    horamensagem.classList.add('hora');

    console.log('Mensagem recebida as ' + hora + ' : ' + minutes + ' da noite.');

    chat.appendChild(elementoMensagem); //coloca un elemento que este en forma de parentecis como hijo


    console.log(elementoMensagem);
    // Obtén un elemento HTML

    iconMensagem.innerHTML = imagenCheked();

    // Agrega el elemento al DOM

    // Agregar elementos al contenedor
    filaContainer.appendChild(horamensagem);
    filaContainer.appendChild(iconMensagem);
    chat.appendChild(filaContainer);

})

function imagenCheked() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width"16" height="16" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#199432" d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/></svg>'
}



