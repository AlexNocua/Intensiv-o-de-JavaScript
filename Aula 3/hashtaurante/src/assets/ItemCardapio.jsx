//importacion de objetos
//import { enroladinhoMignon } from "../cardapio";

export function ItemCardapio(props) {//promesa de que yo en un futuro voy a enviar todas las informaciones
    return ( //palabre clave no react describe un on¿bjeto que va a tener las informaciones que un componente va a utilizar
        <div className="container-item-cardapio">{/*importacion de clase en css global*/}
            <div>
                {/**control + d para seleccionar una palabra repetida que yo quiera cambiar*/}
                <h2>{props.nome}</h2>
                <p>{props.preco}</p>
                <p>{props.descricao}</p>
            </div>
            <img src={props.imagem} alt="" />
        </div>
    )
}