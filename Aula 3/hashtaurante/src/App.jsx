import { useState } from 'react'; // santo grial


import Hashtaurante from './assets/hashtaurante.webp';
import './App.css' // importacion del estilo globlal
import { Navegacao } from './Navegacao' // las {navegacao, other function} pueden traer mas funciones
//import { ItemCardapio } from './assets/ItemCardapio';
//vamos a hacerlo dinamico

import { pratosPrincipais, sobremesas, bebidas } from './cardapio';
import { ItemCardapio } from './assets/ItemCardapio';
//Creamos la estructura
//Siempre el Export para que me exporte esta funcion, si no se usa va a utilizarce como una sola funcion




export function App() {//objetivo especial que va tener las informaciones que elc componente requiere
  //no necesita tener el mismo nombre del archivo



  //variable de control para promessees

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0); // valor incial de esa variable de estado
  //atualizarPaginaSelecionada funcion
  return (
    //Reglas de padres
    <>
      {/*No va a funcionar hasta que importe la imagen*/}
      <img src={Hashtaurante} alt="" className='capa' />
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}>
        {/*Puesta del componente */}
      </Navegacao >

      <div className='menu'>
        {/*Migracion a JS no react
         <ItemCardapio />
        <ItemCardapio />
        <ItemCardapio />
        <ItemCardapio /> */}

        {
          //concepto y reglas de reakt


          paginasMenu[paginaSelecionada].map(item =>
            <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}
            />)/*este toma los itmes de mi arreglo y les suma un punto*/}
      </div>
    </>

  )
}