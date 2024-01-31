//console.log('funcionando')
//const caixinha = 2;

//objeto, este se maneja como un paquete de informaciones
//Ejemplo de cartera de identdad donde tiene varias informaciones
// const caixinha = {
//     nome: 'Alex Nocua',
//     edade: '30'
// };

//inicio de codigo

const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
//variables para el cambio de imagenes
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');



const azulInverno = {
    nome: 'Azul-inverno', //tipo de color.
    pasta: 'imagens-azul-inverno' //nombre de la carpeta.

}

const verdeCipreste = {
    nome: 'Verde-cipreste', //tipo de color.
    pasta: 'imagens-verde-cipreste' //nombre de la carpeta.

}
const meiaNoite = {
    nome: 'meia-noite', //tipo de color.
    pasta: 'imagens-meia-noite' //nombre de la carpeta.

}
const estelar = {
    nome: 'Estelar', //tipo de color.
    pasta: 'imagens-estelar' //nombre de la carpeta.

}
const rosaClaro = {
    nome: 'Rosa-claro', //tipo de color.
    pasta: 'imagens-rosa-claro' //nombre de la carpeta.

}

//listas de informaciones o Arrays

const opsCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
// console.log('Nome', opsCores[verdeCipreste.nome]);// revisar

const opcoesTamanho = ['41 mm', '45mm'];


//slecciones de imagenes y recolecta de informaciones del HTML
//variables de control
let imagemSelecionada = 1; //esto es para que siempre se mueste la segunda opcion
let tamanhoSelecionado = 1;
let corSelecionada = 1;


//resposable de cambiar la imagen segun la Opcion

function trocarImagem() {

    //manera de bosqueda pir string en HTML o Escoger un elemento, asi mismo que me lo chequee
    //escoger un elemento por el nombnre de el.
    //Asi mismo en la ultima parte reconoce su id
    //recuerda que el id es un cracter
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-imagem"]:checked').id;

    //toma el primer caracter que esta en esa posicion (ID) y usa el para actualizar la variable seleccionada
    imagemSelecionada = idOpcaoSelecionada.charAt(0);//Guardar el primer caracter
    console.log(corSelecionada)
    console.log('hola')
    // cambio del numero para la imagen seleccionada
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opsCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';

}

//Cambio en las imagenes de la caja junto con el cambio de las imagenes.
function trocarTanmanho() {
    //actualizar variable del control del tamaño de la caja
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

    //cambiar el titulo del producto
    tituloProduto.innerText = "Pulseira loop esportiva " + opsCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado] //Texto interior

    //cambiar el tamanho de la imgne de acuerdo a la opcion.

    //condicion de seleccionador de tamaño
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena'); // quiero que accedas a la lista de clases y me añadas esta clase mas.
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena'); // quiero que accedas a la lista de clases y me elimines esta clase .
    }
}


function trocarCor() {
    //Actualizar variable del color seleccionado
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);

    //Cambiar el titulo de la pagina
    //obtuve
    tituloProduto.innerText = "Pulseira loop esportiva " + opsCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado] //Texto interior

    //Cambiar el titulo del color

    nomeCor.innerText = 'Cor - ' + opsCores[corSelecionada].nome;


    //Cambiar imagenes exibidas
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opsCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opsCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opsCores[corSelecionada].pasta + '/imagem-2.jpeg';


    //Cambiar imagen de visualizacion

    imagemVisualizacao.src = './imagens/opcoes-cores/' + opsCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}