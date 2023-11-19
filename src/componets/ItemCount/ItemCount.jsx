import { useState } from 'react' 

const ItemCount = ({stock,  initial, onAdd})=> {
    const [compraQ, setCompra] = useState(initial)

    const increment = () =>{
        if(compraQ < stock) {
            setCompra(compraQ + 1)
        }
    }

    const decrement = () => {
        if(compraQ > 1) {
            setCompra(compraQ - 1)
        }
    }

    return(
        <div className='Counter'>
            <div>
                <button className="boton" onClick={decrement}>-</button>
                <h4 className="numero">{compraQ}</h4>
                <button className="boton" onClick={increment}>+</button>
            </div>
            <div>
                 <button className="boton" onClick={() => onAdd(compraQ)} disabled={!stock}>
                    Agregar al Pedido
                 </button>
            </div>
        </div>
    )

}

export default ItemCount