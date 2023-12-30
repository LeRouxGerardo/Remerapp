import './Cart.css';
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, cantidadTotal
,precioTotal} = useContext(CartContext)

    if(cantidadTotal
 === 0) {
        return (
            <div>
                <h1>No agregaste nada a tu pedido</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='cerrarPedido'>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${precioTotal}</h3>
            <button onClick={() => clearCart()} className="botonVaciar">Vaciar pedido</button>
            <Link to='/Checkout' className='Checkout'>Finalizar Compra!</Link>
        </div>
    )   
}

export default Cart