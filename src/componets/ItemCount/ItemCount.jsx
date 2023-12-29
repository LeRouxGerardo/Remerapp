import { useState } from 'react';
import './ItemCount.css';

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
        <div className='Contador'>
            <div className='Controles'>
                <button className="botonMas" onClick={decrement}>-</button>
                <h4 className="numero">{compraQ}</h4>
                <button className="botonMenos" onClick={increment}>+</button>
            </div>
            <div>
                 <button className="botonContador" onClick={() => onAdd(compraQ)} disabled={!stock}>
                    Agregar al Pedido
                 </button>
            </div>
        </div>
    )

}

export default ItemCount