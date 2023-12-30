import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';


const CartItem = ({id, nombre, precio, quantity}) => {
    
    const { removeItem } = useContext(CartContext);

    const eliminarItem = () => {
        removeItem(id);
    };


    return (
        <article>
          
            <body className="CartItem">
                            
                <section className="CartHeader">
                    <h3 className="CartHeaderText">
                        {nombre}
                    </h3>
                </section>

                <section className="PrecioUn">
                    <p>
                        Precio ${precio}
                    </p>
                </section>
                <section className="CantidadUn">
                    <p>
                        Cantidad {quantity}
                    </p>
                </section>

                <section className="PrecioSubTotal">
                    <p className="CartSubTotal">
                        SubTotal ${precio*quantity}
                    </p>
                </section>

                <section className="EliminarItem">
                    <button className="BtnEliminarItem" onClick={eliminarItem}>
                        X
                    </button>
                </section>
            </body>
        </article>
    )
}

export default CartItem