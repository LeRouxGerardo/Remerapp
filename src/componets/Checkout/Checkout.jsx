import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { cart, precioTotal, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: precioTotal ()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "Remerapp");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Compra exitosa!Gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="text" placeholder="Ingresá tu Apellido" {...register("nombre")} />
            <input type="text" placeholder="Ingresá tu ciudad" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}

export default Checkout