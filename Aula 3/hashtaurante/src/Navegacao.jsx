export function Navegacao(props) {
    return (
        /*estas clases son del archivo bas de css */
        <div className="navegacao">
            {/*control + alt y flecha abajo para colocar nuestro seleccionador de columnas*/}
            <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)} />
            {/*html es como for en HTML este es para especificar que este es un rotulo de un respectivo id
            en este caso este rotulo es de pagina-0*/}
            <label htmlFor="pagina-0">Pratos Principais</label>
            <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)} />
            <label htmlFor="pagina-1">Sobre Mesas</label>
            <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)} />
            <label htmlFor="pagina-2">Bebidas</label>
        </div>
    )
}

//export default Navegation
//con este ejemplo se sabe que por defecto esta va a sser la funcion principal
//cuando es una funcion principal no es necesario ponerla dentro de,los {} en la importacion de otras clases